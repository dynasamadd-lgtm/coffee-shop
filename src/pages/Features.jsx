import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const features = [
  { icon: '📱', title: 'Order ahead', text: 'Pick your drinks and food online and collect them at the counter without waiting in line.' },
  { icon: '🪑', title: 'Dine-in ordering', text: 'Sitting in the café? Add your table number at checkout and we bring the order to you.' },
  { icon: '⏱️', title: 'Live order status', text: 'After checkout you get an order number and a live timeline: received, preparing, ready, completed.' },
  { icon: '☕', title: 'Choose your size', text: 'Every drink shows Small, Medium and Large prices. Tap the one you want to add it.' },
  { icon: '🌙', title: 'Light and dark mode', text: 'Switch the look of the site with one tap. Your choice is remembered.' },
]

const hours = [
  ['Monday – Saturday', '7:00 AM – 11:00 PM'],
  ['Sunday', '8:00 AM – 10:00 PM'],
]

export default function Features() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Order your way"
        text="Everything you can do with Bean & Brew online."
      />

      <section className="section">
        <ul className="feature-list">
          {features.map((f) => (
            <li key={f.title}>
              <span className="feature-icon" aria-hidden="true">{f.icon}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>

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

        <div className="center">
          <Link to="/menu/drinks" className="btn">Start an order</Link>
        </div>
      </section>
    </>
  )
}
