import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const values = [
  { icon: '🌱', title: 'Single-Origin Beans', text: 'We brew beans from Peru, Ethiopia, Mexico and Colombia, chosen for flavour and fair trade.' },
  { icon: '🥐', title: 'Baked Every Morning', text: 'Bagels, croissants and sweets come out of the oven before we open the doors.' },
  { icon: '💪', title: 'Healthy Choices', text: 'Protein bars, energy balls, granola parfaits and sugar-free cookies for every routine.' },
  { icon: '🤝', title: 'A Place to Stay', text: 'Quiet corners, warm light and fast Wi-Fi for studying, working or catching up.' },
]

const journey = [
  { step: 'Sourced', text: 'Green beans picked from small farms.' },
  { step: 'Roasted', text: 'Roasted in small batches every week.' },
  { step: 'Ground', text: 'Ground fresh for each order.' },
  { step: 'Brewed', text: 'Pulled on our La Marzocco or poured over a V60.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Great coffee, friendly faces"
        text="Bean & Brew started with one espresso machine and a simple idea: a neighbourhood café that feels like home."
      />

      <section className="section">
        <div className="about-story">
          <h2>Our story</h2>
          <p>
            We wanted a place where the coffee is taken seriously but nobody else has to be. Today
            our baristas serve everything from a classic double espresso to an iced Spanish latte,
            next to a counter full of fresh bagels and homemade sweets.
          </p>
          <p>
            This website lets our guests browse the full menu, order ahead and follow their order
            live, so the only thing left to do is enjoy it.
          </p>
        </div>
      </section>

      <section className="section band">
        <div className="section-head"><h2>From bean to cup</h2></div>
        <ol className="journey">
          {journey.map((j) => (
            <li key={j.step}>
              <h3>{j.step}</h3>
              <p>{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="section-head"><h2>What we care about</h2></div>
        <div className="values">
          {values.map((v) => (
            <div key={v.title} className="value">
              <span className="value-icon">{v.icon}</span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="center">
          <Link to="/menu" className="btn">See what we serve</Link>
        </div>
      </section>
    </>
  )
}
