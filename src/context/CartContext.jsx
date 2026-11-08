import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('bb-cart')) || []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  // Keep the cart after a page refresh
  useEffect(() => {
    try {
      localStorage.setItem('bb-cart', JSON.stringify(items))
    } catch {
      /* storage blocked: cart still works for this visit */
    }
  }, [items])

  // size is 'S', 'M', 'L' or null for single-price items
  const addToCart = (name, size, price) => {
    const key = size ? `${name}-${size}` : name
    setItems((prev) => {
      const found = prev.find((i) => i.key === key)
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { key, name, size, price, qty: 1 }]
    })
  }

  const changeQty = (key, amount) =>
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty: i.qty + amount } : i)).filter((i) => i.qty > 0)
    )

  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key))
  const clearCart = () => setItems([])

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, changeQty, removeItem, clearCart, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
