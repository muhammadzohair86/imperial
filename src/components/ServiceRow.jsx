import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceIcon from './ServiceIcon.jsx'

export default function ServiceRow({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group grid items-center gap-3 border-t border-line px-2 py-7 transition-colors hover:bg-chalk md:grid-cols-12 md:gap-6 md:px-4"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded bg-imperial-tint text-imperial md:col-span-1">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="text-2xl font-semibold transition-colors group-hover:text-imperial md:col-span-4">{service.title}</h3>
      <p className="leading-relaxed text-muted md:col-span-6">{service.short}</p>
      <span className="flex items-center gap-2 font-semibold text-imperial md:col-span-1 md:justify-self-end">
        <span className="md:sr-only">Learn more</span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}
