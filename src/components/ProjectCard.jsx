import { Link } from 'react-router-dom'
import { categoryLabel } from '../data/projects.js'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded bg-chalk">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          width="900"
          height="675"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold transition-colors group-hover:text-imperial">{project.title}</h3>
      <p className="mt-1 text-sm text-muted">{categoryLabel(project.category)}</p>
    </Link>
  )
}
