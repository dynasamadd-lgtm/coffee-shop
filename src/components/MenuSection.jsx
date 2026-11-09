const SIZES = ['S', 'M', 'L']
const fmt = (n) => (n == null ? '–' : n.toFixed(2))

// One menu section (e.g. "Hot"). Drinks show Small / Medium / Large prices.
export default function MenuSection({ section }) {
  return (
    <div className="menu-section">
      <h3 className="menu-title">
        {section.title}
        {section.subtitle && <small> ({section.subtitle})</small>}
      </h3>

      {section.sized && (
        <div className="menu-row menu-head">
          <span />
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
            item.prices.map((p, i) => (
              <span key={SIZES[i]} className={p == null ? 'price none' : 'price'}>{fmt(p)}</span>
            ))
          ) : (
            <span className="price">{fmt(item.price)}</span>
          )}
        </div>
      ))}

      {section.note && <p className="menu-note">{section.note}</p>}
    </div>
  )
}
