import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { useCart, money } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, changeQty, placeOrder, total } = useCart()
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim().length < 2) return setError('Please enter your name.')
    navigate(`/order/${placeOrder(name.trim())}`)
  }

  if (items.length === 0) {
    return (
      <PageHeader eyebrow="Cart" title="Your cart is empty" text="Tap any price on the menu to add it here.">
        <Link to="/menu/drinks" className="btn">Browse the menu</Link>
      </PageHeader>
    )
  }

  return (
    <>
      <PageHeader eyebrow="Cart" title="Your order" />
      <section className="section">
        <form className="panel form" onSubmit={handleSubmit} noValidate>
          <ul>
            {items.map((i) => (
              <li key={i.key} className="line">
                <span>{i.key}</span>
                <span className="qty">
                  <button type="button" onClick={() => changeQty(i.key, -1)} aria-label={`Remove one ${i.key}`}>−</button>
                  {i.qty}
                  <button type="button" onClick={() => changeQty(i.key, 1)} aria-label={`Add one ${i.key}`}>+</button>
                </span>
                <strong>{money(i.price * i.qty)}</strong>
              </li>
            ))}
          </ul>
          <p className="line total"><span>Total</span><strong>{money(total)}</strong></p>

          <label htmlFor="o-name">Your name</label>
          <input id="o-name" value={name} onChange={(e) => { setName(e.target.value); setError('') }} />
          {error && <p className="error">{error}</p>}
          <button className="btn" type="submit">Place order</button>
        </form>
      </section>
    </>
  )
}
