import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

const SIZES = ['S', 'M', 'L']
const fmt = (n) => n.toFixed(2)

// One menu section (e.g. "Hot"). Prices are buttons that add the item to the cart.
export default function MenuSection({ section }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(null)

  const add = (name, size, price) => {
    addToCart(name, size, price)
    const key = name + size
    setAdded(key)
    setTimeout(() => setAdded((k) => (k === key ? null : k)), 900)
  }

  const priceButton = (item, size, price) => {
    if (price == null) return <span key={size} className="price none">–</span>
    const done = added === item.name + size
    return (
      <button
        key={size}
        className={done ? 'price-btn added' : 'price-btn'}
        onClick={() => add(item.name, size, price)}
        aria-label={`Add ${item.name}${size ? ` size ${size}` : ''} for $${fmt(price)}`}
      >
        {done ? '✓' : fmt(price)}
      </button>
    )
  }

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
          {section.sized
            ? item.prices.map((p, i) => priceButton(item, SIZES[i], p))
            : priceButton(item, null, item.price)}
        </div>
      ))}

      {section.note && <p className="menu-note">{section.note}</p>}
    </div>
  )
}
