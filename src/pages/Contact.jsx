import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FaqList from '../components/FaqList.jsx'
import { generalFaqs } from '../data/faqs.js'
import { site } from '../data/site.js'

export default function Contact() {
  usePageMeta('Contact', 'Contact Imperial Studios to discuss web design, software development, product management, graphic design or marketing for your project.')

  const item = 'flex gap-4'
  const icon = 'mt-1 h-5 w-5 shrink-0 text-imperial'

  return (
    <>
      <PageHero
        title="Contact us"
        intro="Tell us about your project and we will get back to you to talk through goals, scope and next steps."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold">Studio details</h2>
            <ul className="mt-6 space-y-6">
              <li className={item}>
                <MapPin className={icon} aria-hidden="true" />
                <div>
                  <p className="font-semibold">Address</p>
                  <address className="not-italic text-muted">
                    {site.address[0]}
                    <br />
                    {site.address[1]}
                  </address>
                </div>
              </li>
              <li className={item}>
                <Phone className={icon} aria-hidden="true" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a className="text-muted hover:text-imperial hover:underline" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className={item}>
                <Mail className={icon} aria-hidden="true" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a className="text-muted hover:text-imperial hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </li>
              <li className={item}>
                <Clock className={icon} aria-hidden="true" />
                <div>
                  <p className="font-semibold">Opening hours</p>
                  {site.hours.map((h) => (
                    <p key={h.days} className="text-muted">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
            <img
              src="/images/services-support.jpg"
              alt="A customer support specialist wearing a headset and working on a laptop"
              loading="lazy"
              width="1000"
              height="633"
              className="mt-10 hidden aspect-[4/3] w-full rounded object-cover lg:block"
            />
          </div>

          <div className="lg:col-span-8">
            <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-pad bg-chalk">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:col-span-4">Before you write</h2>
          <div className="lg:col-span-8">
            <FaqList items={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  )
}
