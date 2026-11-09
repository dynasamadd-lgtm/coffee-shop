import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { STEPS, currentStep, findOrder, money } from '../utils/orders.js'

// Dynamic page: /order/:orderId shows the live status of one order
export default function OrderStatus() {
  const { orderId } = useParams()
  const order = findOrder(orderId)
  const [now, setNow] = useState(Date.now())

  // Re-check the status every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 5000)
    return () => clearInterval(timer)
  }, [])

  if (!order) {
    return (
      <PageHeader title="Order not found" text={`We could not find order #${orderId} on this device.`}>
        <Link to="/menu/drinks" className="btn">Back to menu</Link>
      </PageHeader>
    )
  }

  const step = currentStep(order, now)
  const readyText = order.type === 'dine-in' ? `We bring it to table ${order.table}.` : 'Pick it up at the counter.'

  return (
    <>
      <PageHeader eyebrow={`Order #${order.id}`} title={`Thanks, ${order.name.split(' ')[0]}!`}>
        <p className="page-header-text">
          {step < 2 ? 'Your order is on its way through the bar.' : readyText}
        </p>
      </PageHeader>

      <section className="section">
        <div className="tracking">
          <ol className="timeline">
            {STEPS.map((s, i) => (
              <li key={s.label} className={i < step ? 'done' : i === step ? 'current' : ''}>
                <span className="timeline-dot">{i <= step ? s.icon : ''}</span>
                <span className="timeline-label">{s.label}</span>
              </li>
            ))}
          </ol>

          <div className="receipt">
            <h2>Order summary</h2>
            <p className="receipt-meta">
              {order.type === 'dine-in' ? `Dine-in · Table ${order.table}` : 'Takeaway'} ·{' '}
              {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <ul>
              {order.items.map((i) => (
                <li key={i.key}>
                  <span>
                    {i.qty} × {i.name} {i.size && <small>({i.size})</small>}
                  </span>
                  <span>{money(i.price * i.qty)}</span>
                </li>
              ))}
            </ul>
            {order.notes && <p className="receipt-notes">Notes: {order.notes}</p>}
            <div className="total">
              <span>Total</span>
              <strong>{money(order.total)}</strong>
            </div>
          </div>
        </div>
        <div className="center">
          <Link to="/menu/drinks" className="btn btn-outline">Order something else</Link>
        </div>
      </section>
    </>
  )
}
