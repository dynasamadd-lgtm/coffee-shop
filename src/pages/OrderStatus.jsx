import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { STEPS, currentStep, findOrder, money } from '../context/CartContext.jsx'

// Dynamic page: /order/:orderId shows the live status of one order
export default function OrderStatus() {
  const { orderId } = useParams()
  const order = findOrder(orderId)
  const [, refresh] = useState(0)

  // Re-render every 5 seconds so the status moves forward
  useEffect(() => {
    const timer = setInterval(() => refresh((n) => n + 1), 5000)
    return () => clearInterval(timer)
  }, [])

  if (!order) {
    return (
      <PageHeader title="Order not found" text={`There is no order #${orderId} on this device.`}>
        <Link to="/menu/drinks" className="btn">Back to menu</Link>
      </PageHeader>
    )
  }

  const step = currentStep(order)

  return (
    <>
      <PageHeader eyebrow={`Order #${order.id}`} title={`Thanks, ${order.name}!`} text="Pay at the counter when you pick it up." />
      <section className="section">
        <div className="panel">
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s} className={i <= step ? 'on' : ''}>{s}</li>
            ))}
          </ol>
          <ul>
            {order.items.map((i) => (
              <li key={i.key} className="line">
                <span>{i.qty} × {i.key}</span>
                <strong>{money(i.price * i.qty)}</strong>
              </li>
            ))}
          </ul>
          <p className="line total"><span>Total</span><strong>{money(order.total)}</strong></p>
        </div>
      </section>
    </>
  )
}
