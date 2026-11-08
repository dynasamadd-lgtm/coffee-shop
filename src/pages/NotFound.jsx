import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title="This page spilled its coffee" text="The page you are looking for does not exist.">
      <Link to="/" className="btn">Go home</Link>
    </PageHeader>
  )
}
