// src/components/ProductListing.js
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
            if (productsByCategory[product.category].length <= 5)
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
              <h2>{product.name}</h2>
              {/* <p>{product.price}</p> */}
              {console.log(isProductInCart(product._id))}
              {isProductInCart(product._id) ? (
                <button onClick={() => removeCart(product)}>Remove</button>
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
              <p>{category}</p>
              <RenderProductByCat category={category} />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ProductListing
