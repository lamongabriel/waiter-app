import { createContext, useState } from 'react'
import { CartItem } from '../types/cartItem'

import { IProduct } from '../types/product'

interface CartContextProps {
  cart: CartItem[]
  setCart: (cart: CartItem[]) => void

  selectedTable: string
  setSelectedTable: (table: string) => void

  resetCart: () => void
  addProduct: (productToAdd: IProduct, quantityToAdd?: number) => void
  removeProduct: (productToSubtract: IProduct) => void
  deleteProduct: (productToDelete: IProduct) => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider ({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState([] as CartItem[])
  const [selectedTable, setSelectedTable] = useState('')

  function resetCart () {
    setCart([])
  }

  function addProduct (productToAdd: IProduct, quantityToAdd: number = 1) {
    const temporaryCart = [...cart]

    const productInCart = temporaryCart.find(el => el.product._id === productToAdd._id)

    if (productInCart) {
      productInCart.quantity++
    } else {
      temporaryCart.push({
        product: productToAdd,
        quantity: quantityToAdd
      })
    }

    setCart(temporaryCart)
  }

  function removeProduct (productToSubtract: IProduct) {
    const temporaryCart = [...cart]

    const productInCart = temporaryCart.find(el => el.product._id === productToSubtract._id)

    if (productInCart && productInCart.quantity > 1) {
      productInCart.quantity--
    } else {
      return deleteProduct(productToSubtract)
    }

    setCart(temporaryCart)
  }

  function deleteProduct (productToDelete: IProduct) {
    const temporaryCart = [...cart]

    const productInCartIndex = temporaryCart.findIndex(el => el.product._id === productToDelete._id)

    if (productInCartIndex !== -1) {
      temporaryCart.splice(productInCartIndex, 1)
    }

    setCart(temporaryCart)
  }

  return (
		<CartContext.Provider value={
			{
			  cart,
			  setCart: (cart: CartItem[]) => setCart(cart),
			  selectedTable,
			  setSelectedTable: (table: string) => setSelectedTable(table),
			  resetCart,
			  addProduct,
			  deleteProduct,
			  removeProduct
			}}
		>
			{children}
		</CartContext.Provider>
  )
}
