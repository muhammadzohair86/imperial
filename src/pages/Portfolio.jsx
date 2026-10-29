import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { categories, projects } from '../data/projects.js'

export default function Portfolio() {
  usePageMeta('Portfolio', 'Sample work from Imperial Studios across mobile apps, product imagery, branding and packaging, and print and book design.')
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const tabs = [{ id: 'all', label: 'All' }, ...categories]

  return (
    <>
      <PageHero
        title="Portfolio"
        intro="A selection of sample projects across apps, products, branding and print."
        crumbs={[{ label: 'Portfolio' }]}
      />

      <section className="section-pad">
        <div className="container-page">
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={filter === t.id}
                onClick={() => setFilter(t.id)}
                className={`btn btn-sm h-10 px-5 normal-case ${filter === t.id ? 'btn-primary' : 'btn-outline'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a project in mind?" text="Tell us what you would like to create and we will talk through how we can help." />
    </>
  )
}
