import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import MenuSection from '../components/MenuSection.jsx'
import { menu, categories, countItems } from '../data/menu.js'

export default function Menu() {
  const [search, setSearch] = useState('')
  const query = search.trim().toLowerCase()

  // Search across every section of the menu
  const results = query
    ? menu
        .map((s) => ({ ...s, items: s.items.filter((i) => i.name.toLowerCase().includes(query)) }))
        .filter((s) => s.items.length > 0)
    : []

  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        title="What are you craving?"
        text="Pick a category, or search for a drink or bite you already love."
      >
        <input
          id="menu-search"
          className="search"
          type="search"
          placeholder="Search e.g. latte, bagel, cheesecake"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </PageHeader>

      <section className="section">
        {query ? (
          <>
            <p className="result-count">
              {results.reduce((n, s) => n + s.items.length, 0)} results for “{search}”
            </p>
            {results.length > 0 ? (
              <div className="menu-board">
                {results.map((s) => <MenuSection key={s.id} section={s} />)}
              </div>
            ) : (
              <p className="empty">Nothing matches “{search}”. Try another word.</p>
            )}
          </>
        ) : (
          <div className="category-grid">
            {categories.map((c) => (
              <Link key={c.id} to={`/menu/${c.id}`} className="category-card">
                <span className="category-icon">{c.icon}</span>
                <h3>{c.label}</h3>
                <p>{c.blurb}</p>
                <span className="category-count">{countItems(c)} items →</span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
