import { useCart } from '../context/CartContext.jsx'

const SIZES = ['S', 'M', 'L']
const fmt = (n) => (n == null ? '–' : n.toFixed(2))

// One menu section (e.g. "Hot"). Tapping a price adds that item (and size) to the cart.
export default function MenuSection({ section }) {
  const { add } = useCart()
  const price = (name, size, p) =>
    p == null ? (
      <span key={size} className="price none">–</span>
    ) : (
      <button key={size} className="price" onClick={() => add(name, size, p)} aria-label={`Add ${name} ${size || ''}`}>
        {fmt(p)}
      </button>
    )

  return (
    <div className="menu-section">
      <h3 className="menu-title">
        {section.title}
        {section.subtitle && <small> ({section.subtitle})</small>}
      </h3>

      {section.sized && (
        <div className="menu-row menu-head">
          <span>Tap a price to add</span>
          {SIZES.map((s) => <span key={s}>{s}</span>)}
        </div>
      )}

      {section.items.map((item) => (
        <div key={item.name} className={section.sized ? 'menu-row' : 'menu-row single'}>
          <span className="item-name">
            {item.name}
            {item.tag && <em className="item-tag">{item.tag}</em>}
            {item.desc && <small className="item-desc">{item.desc}</small>}
          </span>
          {section.sized ? (
            item.prices.map((p, i) => price(item.name, SIZES[i], p))
          ) : (
            price(item.name, null, item.price)
          )}
        </div>
      ))}

      {section.note && <p className="menu-note">{section.note}</p>}
    </div>
  )
}
