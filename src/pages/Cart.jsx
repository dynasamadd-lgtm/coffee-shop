import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { useCart } from '../context/CartContext.jsx'
import { money, newOrderId, saveOrder } from '../utils/orders.js'

const sizeNames = { S: 'Small', M: 'Medium', L: 'Large' }

export default function Cart() {
  const { items, changeQty, removeItem, clearCart, total } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', type: 'takeaway', table: '', notes: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const placeOrder = (e) => {
    e.preventDefault()
    const found = {}
    if (form.name.trim().length < 2) found.name = 'Please enter your name.'
    if (!/^[0-9+\s]{7,}$/.test(form.phone)) found.phone = 'Please enter a valid phone number.'
    if (form.type === 'dine-in' && !form.table) found.table = 'Please enter your table number.'
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const order = { id: newOrderId(), ...form, items, total, createdAt: Date.now() }
    saveOrder(order)
    clearCart()
    navigate(`/order/${order.id}`)
  }

  if (items.length === 0) {
    return (
      <PageHeader eyebrow="Cart" title="Your cart is empty" text="Tap any price on the menu to add it here.">
        <Link to="/menu" className="btn">Browse the menu</Link>
      </PageHeader>
    )
  }

  return (
    <>
      <PageHeader eyebrow="Cart" title="Review your order" />

      <section className="section">
        <div className="checkout">
          <div className="cart-panel">
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.key} className="cart-item">
                  <div className="cart-info">
                    <strong>{item.name}</strong>
                    <span>
                      {item.size ? `${sizeNames[item.size]} · ` : ''}
                      {money(item.price)} each
                    </span>
                  </div>
                  <div className="qty">
                    <button onClick={() => changeQty(item.key, -1)} aria-label={`Remove one ${item.name}`}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => changeQty(item.key, 1)} aria-label={`Add one ${item.name}`}>+</button>
                  </div>
                  <span className="line-total">{money(item.price * item.qty)}</span>
                  <button className="remove" onClick={() => removeItem(item.key)} aria-label={`Delete ${item.name}`}>✕</button>
                </li>
              ))}
            </ul>
            <div className="total">
              <span>Total</span>
              <strong>{money(total)}</strong>
            </div>
            <Link to="/menu" className="text-link">← Add more items</Link>
          </div>

          <form className="form checkout-form" onSubmit={placeOrder} noValidate>
            <h2>Your details</h2>

            <label htmlFor="o-name">Name</label>
            <input id="o-name" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="o-phone">Phone</label>
            <input id="o-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <fieldset className="order-type">
              <legend>Order type</legend>
              <label>
                <input type="radio" name="type" value="takeaway" checked={form.type === 'takeaway'} onChange={handleChange} />
                Takeaway
              </label>
              <label>
                <input type="radio" name="type" value="dine-in" checked={form.type === 'dine-in'} onChange={handleChange} />
                Dine-in
              </label>
            </fieldset>

            {form.type === 'dine-in' && (
              <>
                <label htmlFor="o-table">Table number</label>
                <input id="o-table" name="table" type="number" min="1" value={form.table} onChange={handleChange} />
                {errors.table && <p className="error">{errors.table}</p>}
              </>
            )}

            <label htmlFor="o-notes">Notes (optional)</label>
            <textarea id="o-notes" name="notes" rows="3" placeholder="e.g. oat milk, extra shot" value={form.notes} onChange={handleChange} />

            <button className="btn btn-full" type="submit">Place order · {money(total)}</button>
            <p className="form-hint">Pay at the counter when you pick up.</p>
          </form>
        </div>
      </section>
    </>
  )
}
