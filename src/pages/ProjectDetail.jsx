import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import PageHero from '../components/PageHero.jsx'
import CTASection from '../components/CTASection.jsx'
import NotFound from './NotFound.jsx'
import { categoryInfo, categoryLabel, getProject, projects } from '../data/projects.js'
import { getService } from '../data/services.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  usePageMeta(project?.title, project?.summary)

  if (!project) return <NotFound />

  const info = categoryInfo[project.category]
  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <PageHero
        title={project.title}
        intro={project.summary}
        crumbs={[{ label: 'Portfolio', to: '/portfolio' }, { label: project.title }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-12 lg:col-span-8">
            <img src={project.image} alt={project.alt} width="900" height="675" className="w-full rounded object-cover" />
            <div>
              <h2 className="text-2xl font-bold">Project brief</h2>
              <p className="mt-3 max-w-prose text-lg leading-relaxed text-muted">{info.brief}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Our approach</h2>
              <ul className="mt-4 space-y-3">
                {info.approach.map((step) => (
                  <li key={step} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-imperial" aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded border border-line bg-chalk p-6 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold">Project information</h2>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-muted">Category</dt>
                  <dd>{categoryLabel(project.category)}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-muted">Project type</dt>
                  <dd>Sample project for demonstration</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-muted">Related services</dt>
                  <dd>
                    <ul className="mt-1 space-y-1">
                      {info.services.map((s) => (
                        <li key={s}>
                          <Link to={`/services/${s}`} className="font-medium text-imperial hover:underline">
                            {getService(s)?.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <Link to="/contact" className="btn btn-primary mt-6 w-full normal-case">
                Start a similar project
              </Link>
            </div>
          </aside>
        </div>

        <div className="container-page mt-16 flex flex-col justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <Link to={`/portfolio/${prev.slug}`} className="inline-flex items-center gap-2 font-semibold text-imperial hover:underline">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" /> Previous: {prev.title}
          </Link>
          <Link to={`/portfolio/${next.slug}`} className="inline-flex items-center gap-2 font-semibold text-imperial hover:underline sm:justify-end">
            Next: {next.title} <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
