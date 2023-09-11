import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import './ProductByCategoris.css'
import App from './App'
const ProductByCategoris = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  // console.log(products)
  const { cat } = useParams()
  function getFirstThreeWords(productName) {
    // Split the product name into words
    const words = productName.split(' ')

    // Get the first three words
    const shortName = words.slice(0, 3).join(' ')

    return shortName
  }
  useEffect(() => {
    axios
      .get(`/api/products?category=${cat}`)
      .then((response) => {
        console.log(response.data)
        setProducts(response.data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [cat])

  // Function to navigate to the homepage
  const navigateToHomepage = () => {
    navigate('/') // Navigate to the homepage route
  }
  return (
    <>
      <button onClick={navigateToHomepage}>Go to Homepage</button>
      <h2>{cat}</h2>
      {
        <div className="card_container">
          {products?.map((product) => (
            <div key={product.id} className="product-card">
              {/* Display product information here */}
              <img className="product_img" src={product.img_url} alt="product_img" />

              <h2>{getFirstThreeWords(product.name)}</h2>
              <p>price:{product.price}</p>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default ProductByCategoris
