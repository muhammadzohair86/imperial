import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import PageHero from '../components/PageHero.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import FaqList from '../components/FaqList.jsx'
import CTASection from '../components/CTASection.jsx'
import NotFound from './NotFound.jsx'
import { getService, services } from '../data/services.js'
import { projects } from '../data/projects.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  usePageMeta(service?.title, service ? `${service.short} ${service.intro.split('. ')[0]}.` : undefined)

  if (!service) return <NotFound />

  const related = projects.filter((p) => service.categories.includes(p.category)).slice(0, 3)

  return (
    <>
      <PageHero
        title={service.title}
        intro={service.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-14 lg:col-span-8">
            <img
              src={service.image}
              alt={service.imageAlt}
              width="900"
              height="675"
              className="aspect-[16/10] w-full rounded object-cover"
            />

            <div>
              <h2 className="text-3xl font-bold">Overview</h2>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">{service.intro}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">The problem we solve</h2>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">{service.need}</p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold">What is included</h2>
                <ul className="mt-4 space-y-3">
                  {service.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-imperial" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">What you receive</h2>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-imperial" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Benefits</h2>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="border-l-2 border-imperial pl-4 leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">How it works</h2>
              <ol className="mt-5 space-y-4">
                {service.steps.map((step, i) => (
                  <li key={step} className="flex items-baseline gap-4">
                    <span className="font-display text-2xl font-bold text-imperial" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className="text-lg">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold">Questions about {service.title.toLowerCase()}</h2>
              <FaqList items={service.faqs} />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-8 lg:sticky lg:top-28">
              <nav aria-label="All services">
                <h2 className="text-xl font-bold">All services</h2>
                <ul className="mt-4 border-y border-line">
                  {services.map((s) => (
                    <li key={s.slug} className="border-b border-line last:border-b-0">
                      <Link
                        to={`/services/${s.slug}`}
                        aria-current={s.slug === service.slug ? 'page' : undefined}
                        className={`flex items-center gap-3 py-3.5 font-medium transition-colors ${
                          s.slug === service.slug ? 'text-imperial' : 'hover:text-imperial'
                        }`}
                      >
                        <ServiceIcon name={s.icon} className="h-5 w-5" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="on-blue rounded bg-imperial p-6 text-white">
                <h2 className="text-xl font-bold text-white">Interested in {service.title.toLowerCase()}?</h2>
                <p className="mt-2 leading-relaxed text-white/85">Tell us about your project and we will get back to you.</p>
                <Link to="/contact" className="btn mt-5 w-full border-0 bg-white normal-case text-imperial hover:bg-imperial-tint">
                  Request a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-chalk">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="text-3xl font-bold">Related sample work</h2>
              <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-imperial hover:underline">
                View all work <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
