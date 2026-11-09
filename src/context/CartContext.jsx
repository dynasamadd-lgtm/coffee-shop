import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

// Read / write JSON in localStorage safely
const load = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage blocked */
  }
}

export const money = (n) => `$${n.toFixed(2)}`
export const findOrder = (id) => load('bb-orders', []).find((o) => o.id === id)

// Status changes every 30 seconds after the order is placed (simulated)
export const STEPS = ['Order received', 'Preparing', 'Ready', 'Completed']
export const currentStep = (order) =>
  Math.min(STEPS.length - 1, Math.floor((Date.now() - order.createdAt) / 30000))

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => load('bb-cart', []))
  useEffect(() => save('bb-cart', items), [items])

  // key = name + size, so "Latte S" and "Latte L" are separate lines
  const add = (name, size, price) => {
    const key = `${name} ${size || ''}`.trim()
    setItems((prev) =>
      prev.some((i) => i.key === key)
        ? prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { key, price, qty: 1 }]
    )
  }

  const changeQty = (key, amount) =>
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty: i.qty + amount } : i)).filter((i) => i.qty > 0)
    )

  const placeOrder = (name) => {
    const order = { id: 'BB' + String(Date.now()).slice(-5), name, items, total, createdAt: Date.now() }
    save('bb-orders', [order, ...load('bb-orders', [])])
    setItems([])
    return order.id
  }

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ items, add, changeQty, placeOrder, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
