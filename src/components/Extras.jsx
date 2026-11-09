import { extras } from '../data/menu.js'

const fmt = (n) => n.toFixed(2)

export default function Extras() {
  return (
    <div className="menu-section extras">
      <h3 className="menu-title">Add-ons</h3>
      <p className="extras-hint">Ask your barista to add any of these to your drink.</p>

      <h4>Milk</h4>
      {extras.milk.map((m) => (
        <div key={m.name} className="menu-row single">
          <span className="item-name">{m.name}</span>
          <span className="price">{m.price == null ? 'Free' : fmt(m.price)}</span>
        </div>
      ))}

      <h4>Add Ingredients</h4>
      {extras.ingredients.map((m) => (
        <div key={m.name} className="menu-row single">
          <span className="item-name">{m.name}</span>
          <span className="price">{fmt(m.price)}</span>
        </div>
      ))}

      <h4>
        Syrup Flavor <small>({fmt(extras.syrupPrice)} per pump)</small>
      </h4>
      <div className="syrups">
        {extras.syrups.map((s) => (
          <span key={s} className="syrup">{s}</span>
        ))}
      </div>
    </div>
  )
}
