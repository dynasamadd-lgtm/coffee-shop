import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Great coffee, friendly faces" />

      <section className="section">
        <div className="about-story">
          <p>
            Bean &amp; Brew started with one espresso machine and a simple idea: a neighbourhood café
            that feels like home. We brew single-origin beans, bake our bagels and croissants every
            morning, and keep a quiet corner ready for anyone who needs a break.
          </p>
          <Link to="/menu/drinks" className="btn">See our menu</Link>
        </div>
      </section>
    </>
  )
}
