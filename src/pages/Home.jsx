import { Link } from 'react-router-dom'
import { categories, countItems } from '../data/menu.js'

const cafePhoto = `${import.meta.env.BASE_URL}images/cafe.jpg`

const favourites = [
  { name: 'Spanish Latte', note: 'Our most ordered hot drink', price: 'from $5.00' },
  { name: 'Iced Matcha Latte', note: 'Ceremonial matcha over ice', price: 'from $5.50' },
  { name: 'Halloumi Pesto Bagel', note: 'Toasted, with fresh pesto', price: '$7.50' },
  { name: 'Oriental Pistachio Cheesecake', note: 'Baked in-house', price: '$7.00' },
]

const steps = [
  { title: 'Choose', text: 'Browse the menu and tap a price to add it to your cart.' },
  { title: 'Order', text: 'Pick takeaway or dine-in and place your order in seconds.' },
  { title: 'Track', text: 'Follow your order live, from the espresso machine to your hands.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Specialty coffee · Fresh bakes</p>
          <h1>Start your day with the perfect cup</h1>
          <p>
            Espresso pulled on our La Marzocco, bagels and croissants baked every morning, and a
            calm corner to slow down. Order ahead and skip the line.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn">Order Now</Link>
            <Link to="/about" className="btn btn-outline">Our Story</Link>
          </div>
          <dl className="hero-facts">
            <div><dt>Open daily</dt><dd>From 7 AM</dd></div>
            <div><dt>Menu</dt><dd>120+ items</dd></div>
            <div><dt>Pickup</dt><dd>~5 min</dd></div>
          </dl>
        </div>
        <div className="hero-photo">
          <img src={cafePhoto} alt="Inside the Bean & Brew coffee bar" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Explore the menu</h2>
          <Link to="/menu" className="text-link">Full menu →</Link>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c.id} to={`/menu/${c.id}`} className="category-card">
              <span className="category-icon">{c.icon}</span>
              <h3>{c.label}</h3>
              <p>{c.blurb}</p>
              <span className="category-count">{countItems(c)} items</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="section-head">
          <h2>House favourites</h2>
        </div>
        <ul className="favourites">
          {favourites.map((f) => (
            <li key={f.name}>
              <div>
                <strong>{f.name}</strong>
                <span>{f.note}</span>
              </div>
              <span className="fav-price">{f.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>How ordering works</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
