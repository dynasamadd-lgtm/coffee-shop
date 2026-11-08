// Title band used at the top of every inner page
export default function PageHeader({ eyebrow, title, text, children }) {
  return (
    <section className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {text && <p className="page-header-text">{text}</p>}
      {children}
    </section>
  )
}
