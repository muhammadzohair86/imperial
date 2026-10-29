import { Link } from 'react-router-dom'

export default function CTASection({
  title = 'Tell us about your project',
  text = 'Share what you need and we will get back to you to talk through goals, scope and next steps.',
}) {
  return (
    <section className="on-blue relative isolate overflow-hidden bg-imperial text-white">
      <img
        src="/images/skyline.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15 mix-blend-luminosity"
      />
      <div className="container-page flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn border-0 bg-white normal-case text-imperial hover:bg-imperial-tint">
            Get in touch
          </Link>
          <Link
            to="/services"
            className="btn btn-outline border-white normal-case text-white hover:border-white hover:bg-white hover:text-imperial"
          >
            Explore our services
          </Link>
        </div>
      </div>
    </section>
  )
}
