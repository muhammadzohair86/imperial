import { Link } from 'react-router-dom'
import { ArrowRight, Handshake, Layers3, MessagesSquare, Wrench } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import ServiceRow from '../components/ServiceRow.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'
import { processSteps } from '../data/process.js'

const strengths = [
  { icon: Layers3, title: 'Design and build in one place', text: 'The people who design your project also help build it, so ideas are not lost between teams.' },
  { icon: Handshake, title: 'Solutions shaped around you', text: 'We start with your goals and audience instead of fitting you into a fixed package.' },
  { icon: MessagesSquare, title: 'Clear communication', text: 'You see progress as it happens and know what comes next at every stage.' },
  { icon: Wrench, title: 'Built to last', text: 'We organize our work so it can be maintained, updated and extended later.' },
]

export default function Home() {
  usePageMeta(
    null,
    'Imperial Studios creates functional websites, creative ads and mobile apps. Web design, software development, product management, graphic design and marketing.',
  )

  return (
    <>
      <section className="bg-chalk">
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="hero-in lg:col-span-6">
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
              We create functional websites, creative ads and mobile apps.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Imperial Studios brings web design, software development, product management, graphic design and marketing together, so your project moves from idea to launch with one team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn btn-primary normal-case">
                Explore our services
              </Link>
              <Link to="/contact" className="btn btn-outline normal-case">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/images/hero.jpg"
              alt="Black and white view looking up at the glass walls of an office tower"
              width="1400"
              height="933"
              fetchpriority="high"
              className="aspect-[4/3] w-full rounded object-cover lg:aspect-[5/6]"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <img
              src="/images/about.jpg"
              alt="Four colleagues talking together in a bright, modern office"
              loading="lazy"
              width="900"
              height="600"
              className="aspect-[4/3] w-full rounded object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">A studio that designs, builds and promotes</h2>
            <div className="prose-copy mt-6 text-lg">
              <p>
                Imperial Studios is a creative digital studio. We help businesses present themselves clearly online, build the software they need and reach the people they want to serve.
              </p>
              <p>
                Whether you need a new website, a mobile app, a brand identity or an advertising campaign, we plan the work with you and see it through to launch.
              </p>
            </div>
            <Link to="/about" className="mt-2 inline-flex items-center gap-2 font-semibold text-imperial hover:underline">
              More about the studio <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white pt-0 lg:pt-0">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">What we do</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">Five services that work on their own or together on a single project.</p>
          </div>
          <div className="mt-10 border-b border-line">
            {services.map((s) => (
              <ServiceRow key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-chalk">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">Why work with Imperial Studios</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5">
                <Icon className="mt-1 h-7 w-7 shrink-0 text-imperial" aria-hidden="true" strokeWidth={1.75} />
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">How a project works</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">A simple four-step process, from your first message to launch day.</p>
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-chalk">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Selected work</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">Sample projects that show the kind of work we do across apps, branding and print.</p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-imperial hover:underline">
              View all work <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[projects[0], projects[6], projects[9]].map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
