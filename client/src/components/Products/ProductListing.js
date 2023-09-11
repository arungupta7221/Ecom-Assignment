import React, { useEffect, useState, useContext } from 'react'
import './ProductListing.css'
import axios from 'axios'
import { cartContext } from '../../contextProvider/cartContext'
import Navbar from '../navbar/Navbar'
const ProductListing = () => {
  const [products, setProducts] = useState([])
  const [productsByCategory, setProductsByCategory] = useState({})
  const { cartProducts, addToCart, getCartProductCount, removeCart, isProductInCart } =
    useContext(cartContext)

  function getFirstThreeWords(productName) {
    // Split the product name into words
    const words = productName.split(' ')

    // Get the first three words
    const shortName = words.slice(0, 3).join(' ')

    return shortName
  }

  useEffect(() => {
    // Fetch products from your API using relative URL
    axios
      .get('/api/products')
      .then((response) => {
        // Set the products in the state
        const products = response.data
        const productsByCategory = {}
        products.map((product) => {
          if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [product]
          } else {
            if (productsByCategory[product.category].length < 5)
              productsByCategory[product.category].push(product)
          }
        })
        setProductsByCategory(productsByCategory)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [])
  const RenderProductByCat = ({ category }) => {
    console.log(productsByCategory[category])
    return (
      <>
        <div className="card_container">
          {productsByCategory[category]?.map((product) => (
            <div key={product.id} className="product-card">
              {/* Display product information here */}
              <img className="product_img" src={product.img_url} alt="product_img" />

              <h2>{getFirstThreeWords(product.name)}</h2>
              <p>price:{product.price}</p>
              {console.log(isProductInCart(product._id))}
              {isProductInCart(product._id) ? (
                <button onClick={() => removeCart(product)}>Remove From Card</button>
              ) : (
                <button onClick={() => addToCart(product)}>Add to cart</button>
              )}
            </div>
          ))}
        </div>
      </>
    )
  }
  return (
    <div>
      <div>
        <Navbar categoris={Object.keys(productsByCategory)} />
        {Object.keys(productsByCategory)?.map((category) => {
          return (
            <>
              <h2>{category}</h2>
              <RenderProductByCat category={category} />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ProductListing
