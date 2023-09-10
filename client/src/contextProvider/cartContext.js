import { createContext, useState } from 'react'
export const cartContext = createContext({})

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  console.log(cartProducts)
  const addToCart = (Product) => {
    setCartProducts((prev) => {
      return [...prev, Product]
    })
  }

  const getCartProductCount = () => cartProducts.length

  const removeCart = (Product) => {
    let newCartProducts = [...cartProducts]
    newCartProducts = newCartProducts.filter((cartProduct) => cartProduct._id != Product._id)
    setCartProducts(newCartProducts)
  }

  const isProductInCart = (productId) => {
    return cartProducts.filter((cartProduct) => cartProduct._id === productId).length > 0
  }
  return (
    <cartContext.Provider
      value={{
        cartProducts,
        addToCart,
        getCartProductCount,
        removeCart,
        isProductInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
export default CartProvider
