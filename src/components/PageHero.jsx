import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// crumbs: [{ label, to? }] ending with the current page (no `to`).
export default function PageHero({ title, intro, crumbs = [], children }) {
  return (
    <section className="border-b border-line bg-chalk">
      <div className="container-page py-12 lg:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <li>
              <Link to="/" className="hover:text-imperial hover:underline">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-imperial hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-ink">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
