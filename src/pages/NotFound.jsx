import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for could not be found.')
  return (
    <section className="section-pad">
      <div className="container-page max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">We could not find that page</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The link may be broken or the page may have moved. Try one of these pages instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-primary normal-case">Go to the home page</Link>
          <Link to="/services" className="btn btn-outline normal-case">View services</Link>
          <Link to="/contact" className="btn btn-outline normal-case">Contact us</Link>
        </div>
      </div>
    </section>
  )
}
