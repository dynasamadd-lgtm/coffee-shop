import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const features = [
  { icon: '☕', title: 'Specialty coffee', text: 'Espresso classics pulled on our La Marzocco, plus V60 pour-overs with single-origin beans.' },
  { icon: '🥯', title: 'Baked every morning', text: 'Bagels, croissants and sweets come out of the oven before we open the doors.' },
  { icon: '💪', title: 'Healthy corner', text: 'Protein bars, energy balls, granola parfaits and a sugar-free cookie.' },
  { icon: '🪑', title: 'Dine-in or takeaway', text: 'Stay in our calm corner with fast Wi-Fi, or grab your coffee on the go.' },
  { icon: '🥛', title: 'Make it yours', text: 'Every drink comes in three sizes, with oat, almond or coconut milk and ten syrup flavours.' },
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
        title="Why come to Bean & Brew"
        text="What makes our café a good place for your daily cup."
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
          <Link to="/menu/drinks" className="btn">See the menu</Link>
        </div>
      </section>
    </>
  )
}
