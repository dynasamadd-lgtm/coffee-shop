export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">Bean &amp; Brew</p>
        <p>Specialty coffee and fresh bakes, open every day from 7:00 AM.</p>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Bean &amp; Brew · CSCI426 student project built with React</p>
    </footer>
  )
}
