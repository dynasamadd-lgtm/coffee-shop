import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-logo">Bean &amp; Brew</p>
          <p>Specialty coffee and fresh bakes, open every day from 7:00 AM.</p>
        </div>
        <div className="footer-links">
          <Link to="/menu">Menu</Link>
          <Link to="/services">Services</Link>
          <Link to="/track">Track Order</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Bean &amp; Brew · CSCI426 student project built with React</p>
    </footer>
  )
}
