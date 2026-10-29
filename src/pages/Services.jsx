import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import PageHero from '../components/PageHero.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CTASection from '../components/CTASection.jsx'
import FaqList from '../components/FaqList.jsx'
import { services } from '../data/services.js'
import { generalFaqs } from '../data/faqs.js'

export default function Services() {
  usePageMeta('Services', 'Web design, software development, product management, graphic design and marketing services from Imperial Studios. Explore each service and get in touch.')

  return (
    <>
      <PageHero
        title="Services"
        intro="Five services that cover design, development, planning and promotion. Hire us for one, or combine several in a single project."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section-pad">
        <div className="container-page space-y-16 lg:space-y-24">
          {services.map((s, i) => (
            <article key={s.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  width="900"
                  height="675"
                  className="aspect-[4/3] w-full rounded object-cover"
                />
              </div>
              <div className="lg:col-span-7">
                <span className="flex h-11 w-11 items-center justify-center rounded bg-imperial-tint text-imperial">
                  <ServiceIcon name={s.icon} />
                </span>
                <h2 className="mt-4 text-3xl font-bold">{s.title}</h2>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{s.short}</p>
                <ul className="mt-5 space-y-2">
                  {s.scope.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-imperial" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${s.slug}`} className="btn btn-primary mt-7 normal-case">
                  About {s.title.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-chalk">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Common questions</h2>
            <p className="mt-4 leading-relaxed text-muted">Not finding your answer? Send us a message and we will help.</p>
            <Link to="/contact" className="btn btn-outline mt-6 normal-case">
              Contact us
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={generalFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
