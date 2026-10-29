import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import PageHero from '../components/PageHero.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import CTASection from '../components/CTASection.jsx'
import { processSteps } from '../data/process.js'
import { services } from '../data/services.js'

const principles = [
  { title: 'Start with the goal', text: 'Every project begins with what you want to achieve and who you want to reach. Design and technology follow from that.' },
  { title: 'Keep it clear', text: 'We prefer plain language, simple layouts and straightforward plans, so your visitors and your team always know what to do next.' },
  { title: 'Work in the open', text: 'We share work in progress and explain our decisions, so there are no surprises at launch.' },
]

export default function About() {
  usePageMeta('About', 'Learn about Imperial Studios, a creative digital studio offering web design, software development, product management, graphic design and marketing.')

  return (
    <>
      <PageHero
        title="A creative studio for web, software and brand"
        intro="Imperial Studios helps businesses look clear, work well and reach the right audience online."
        crumbs={[{ label: 'About' }]}
      />

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="prose-copy text-lg lg:col-span-6">
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">What we do</h2>
            <p>
              We are a creative digital studio. Our work covers websites and apps, brand identities and packaging, product planning and marketing campaigns.
            </p>
            <p>
              Bringing these disciplines together means your project is planned, designed and built with a single, consistent idea of what it should achieve.
            </p>
            <p>
              We work with businesses that want a clear online presence, a useful digital product or a stronger brand.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/images/about.jpg"
              alt="A team of colleagues discussing a project together in an open office"
              loading="lazy"
              width="900"
              height="600"
              className="aspect-[4/3] w-full rounded object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-chalk">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">How we approach our work</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-imperial pl-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">Our process</h2>
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-chalk pt-16">
        <div className="container-page">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Services</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="btn btn-outline btn-sm h-10 normal-case">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  )
}
