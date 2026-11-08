import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { STEPS, currentStep, findOrder, getOrders, money } from '../utils/orders.js'

export default function Track() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const recent = getOrders().slice(0, 5)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (findOrder(code.trim())) navigate(`/order/${code.trim().toUpperCase()}`)
    else setError(`We could not find order “${code}”. Check the number on your confirmation.`)
  }

  return (
    <>
      <PageHeader
        eyebrow="Track Order"
        title="Where is my coffee?"
        text="Enter the order number you got after checkout."
      >
        <form className="track-form" onSubmit={handleSubmit}>
          <input
            id="track-code"
            placeholder="e.g. BB12345"
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
              setError('')
            }}
            aria-label="Order number"
          />
          <button className="btn" type="submit">Track</button>
        </form>
        {error && <p className="error">{error}</p>}
      </PageHeader>

      <section className="section">
        <h2 className="small-title">Your recent orders</h2>
        {recent.length === 0 ? (
          <p className="empty">
            No orders yet on this device. <Link to="/menu" className="text-link">Place your first order</Link>
          </p>
        ) : (
          <ul className="order-list">
            {recent.map((o) => (
              <li key={o.id}>
                <Link to={`/order/${o.id}`}>
                  <strong>#{o.id}</strong>
                  <span>{new Date(o.createdAt).toLocaleString()}</span>
                  <span className="status-pill">{STEPS[currentStep(o)].label}</span>
                  <span>{money(o.total)}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
