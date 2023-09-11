import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import './ProductByCategoris.css'
const ProductByCategoris = () => {
  const [products, setProducts] = useState([])
  // console.log(products)
  const { cat } = useParams()
  useEffect(() => {
    axios
      .get(`/api/products?category=${cat}`)
      .then((response) => {
        console.log(response.data)
        // const products = response.data;
        // setProducts(response.data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [cat])
  return (
    <>
      <h2>{cat}</h2>
    </>
  )
}

export default ProductByCategoris
