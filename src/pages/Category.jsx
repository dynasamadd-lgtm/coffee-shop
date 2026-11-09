import { Link, NavLink, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import MenuSection from '../components/MenuSection.jsx'
import Extras from '../components/Extras.jsx'
import { categories, getCategory, getSections } from '../data/menu.js'

// Dynamic page: the same component renders /menu/drinks, /menu/food, /menu/sweets ...
export default function Category() {
  const { categoryId } = useParams()
  const category = getCategory(categoryId)

  if (!category) {
    return (
      <PageHeader title="Category not found" text={`There is no menu category called “${categoryId}”.`}>
        <Link to="/menu/drinks" className="btn">Back to menu</Link>
      </PageHeader>
    )
  }

  return (
    <>
      <PageHeader eyebrow="Our Menu" title={category.label} text={category.blurb}>
        <nav className="category-tabs" aria-label="Menu categories">
          {categories.map((c) => (
            <NavLink key={c.id} to={`/menu/${c.id}`} className="chip">
              {c.icon} {c.label}
            </NavLink>
          ))}
        </nav>
      </PageHeader>

      <section className="section">
        <div className="menu-board">
          {getSections(category).map((s) => <MenuSection key={s.id} section={s} />)}
          {category.id === 'drinks' && <Extras />}
        </div>
      </section>
    </>
  )
}
