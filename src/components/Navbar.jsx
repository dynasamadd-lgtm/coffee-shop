import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu/drinks', label: 'Menu', match: '/menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ dark, toggleDark }) {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const { pathname } = useLocation()

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        Bean <span>&amp;</span> Brew
      </Link>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={l.match && pathname.startsWith(l.match) ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-btn" onClick={toggleDark} aria-label="Switch light or dark mode">
          {dark ? '☀️' : '🌙'}
        </button>
        <Link to="/cart" className="cart-link" aria-label={`Cart, ${count} items`} onClick={() => setOpen(false)}>
          🛒{count > 0 && <span className="badge">{count}</span>}
        </Link>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
