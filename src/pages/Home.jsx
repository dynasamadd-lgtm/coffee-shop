import { Link } from 'react-router-dom'

const cafePhoto = `${import.meta.env.BASE_URL}images/cafe.jpg`

const favourites = [
  { name: 'Spanish Latte', note: 'Our most ordered hot drink', price: 'from $5.00' },
  { name: 'Iced Matcha Latte', note: 'Ceremonial matcha over ice', price: 'from $5.50' },
  { name: 'Halloumi Pesto Bagel', note: 'Toasted, with fresh pesto', price: '$7.50' },
  { name: 'Oriental Pistachio Cheesecake', note: 'Baked in-house', price: '$7.00' },
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
            <Link to="/menu/drinks" className="btn">Order Now</Link>
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
    </>
  )
}
