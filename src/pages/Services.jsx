import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const services = [
  {
    icon: '📱',
    title: 'Order Ahead',
    text: 'Place your order online and pick it up at the counter without waiting in line.',
    link: { to: '/menu', label: 'Start an order' },
  },
  {
    icon: '🪑',
    title: 'Dine-in',
    text: 'Order from your table. Add your table number at checkout and we bring it to you.',
    link: { to: '/menu', label: 'See the menu' },
  },
  {
    icon: '📍',
    title: 'Live Order Tracking',
    text: 'Follow every order from received to ready with your order number.',
    link: { to: '/track', label: 'Track an order' },
  },
  {
    icon: '🫖',
    title: 'Specialty Brew Bar',
    text: 'V60 pour-overs with single-origin beans from Peru, Ethiopia, Mexico and Colombia.',
    link: { to: '/menu/drinks', label: 'View drinks' },
  },
  {
    icon: '🥯',
    title: 'Bagel Packs',
    text: 'Take home packs of 4 fresh bagels in six flavours, from $7.00.',
    link: { to: '/menu/food', label: 'View food' },
  },
  {
    icon: '🎉',
    title: 'Office & Event Catering',
    text: 'Coffee, sweets and sandwich trays for meetings and small events. Order 24 hours ahead.',
    link: { to: '/contact', label: 'Ask for a quote' },
  },
]

const hours = [
  ['Monday – Saturday', '7:00 AM – 11:00 PM'],
  ['Sunday', '8:00 AM – 10:00 PM'],
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="More than a cup of coffee"
        text="However you like your coffee, here, to go, or for the whole office, we have you covered."
      />

      <section className="section">
        <div className="service-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link to={s.link.to} className="text-link">{s.link.label} →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="hours">
          <h2>Opening hours</h2>
          <table>
            <tbody>
              {hours.map(([day, time]) => (
                <tr key={day}>
                  <th scope="row">{day}</th>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
