import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Wordmark from './Wordmark.jsx'
import { nav, site } from '../data/site.js'
import { services } from '../data/services.js'

const linkClass = 'text-white/80 transition-colors hover:text-white hover:underline underline-offset-4'

export default function Footer() {
  return (
    <footer className="on-blue bg-ink text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="Imperial Studios home">
            <Wordmark light />
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed text-white/75">
            A digital studio for web design, software development, product management, graphic design and marketing.
          </p>
        </div>

        <nav aria-label="Footer pages" className="lg:col-span-2">
          <h2 className="font-display text-base font-semibold text-white">Pages</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services" className="lg:col-span-3">
          <h2 className="font-display text-base font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-base font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <address className="not-italic">
                {site.address[0]}
                <br />
                {site.address[1]}
              </address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <a className={linkClass} href={`tel:${site.phone.replace(/\s/g, '')}`}>
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <a className={linkClass} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Imperial Studios. All rights reserved.</p>
          <p>{site.credit}</p>
        </div>
      </div>
    </footer>
  )
}
