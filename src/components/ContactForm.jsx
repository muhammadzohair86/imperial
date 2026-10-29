import { useRef, useState } from 'react'
import { CircleAlert, CircleCheck } from 'lucide-react'
import { services } from '../data/services.js'
import { site } from '../data/site.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

const empty = { name: '', email: '', phone: '', service: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your full name.'
  if (!v.email.trim()) e.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address, such as name@company.com.'
  if (v.phone.trim() && !/^[+()\d\s.-]{7,20}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number, or leave this field empty.'
  if (!v.service) e.service = 'Choose the service you are interested in.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject of at least 3 characters.'
  if (v.message.trim().length < 20) e.message = 'Tell us a little more. Please write at least 20 characters.'
  return e
}

function Field({ id, label, required, error, children, hint }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? (
          <span className="text-error" aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="field-error">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | draft | failed
  const [mailto, setMailto] = useState('')
  const statusRef = useRef(null)

  const set = (name) => (e) => {
    const next = { ...values, [name]: e.target.value }
    setValues(next)
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }))
  }
  const blur = (name) => () => setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }))

  const inputProps = (id) => ({
    id,
    value: values[id],
    onChange: set(id),
    onBlur: blur(id),
    'aria-invalid': errors[id] ? 'true' : 'false',
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
  })
  const cls = (id) => `input input-bordered w-full bg-white ${errors[id] ? 'input-error' : ''}`

  const focusStatus = () => setTimeout(() => statusRef.current?.focus(), 50)

  async function onSubmit(ev) {
    ev.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstKey = Object.keys(found)[0]
    if (firstKey) {
      document.getElementById(firstKey)?.focus()
      return
    }

    const serviceTitle = services.find((s) => s.slug === values.service)?.title ?? values.service
    if (ENDPOINT) {
      setStatus('sending')
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, service: serviceTitle }),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus('sent')
        setValues(empty)
      } catch {
        setStatus('failed')
      }
      focusStatus()
      return
    }

    // No backend configured: open a prepared email draft instead of pretending to send.
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
      `Service: ${serviceTitle}`,
      '',
      values.message.trim(),
    ]
      .filter((line) => line !== null)
      .join('\n')
    const href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    setMailto(href)
    setStatus('draft')
    focusStatus()
    window.location.href = href
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <p className="text-sm text-muted">
        Fields marked <span className="text-error">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input type="text" autoComplete="name" placeholder="Your full name" className={cls('name')} {...inputProps('name')} />
        </Field>
        <Field id="email" label="Email address" required error={errors.email}>
          <input type="email" autoComplete="email" placeholder="name@company.com" className={cls('email')} {...inputProps('email')} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Phone number" error={errors.phone}>
          <input type="tel" autoComplete="tel" placeholder="+1 555 000 0000" className={cls('phone')} {...inputProps('phone')} />
        </Field>
        <Field id="service" label="Service of interest" required error={errors.service}>
          <select className={`select select-bordered w-full bg-white ${errors.service ? 'select-error' : ''}`} {...inputProps('service')}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </Field>
      </div>

      <Field id="subject" label="Subject" required error={errors.subject}>
        <input type="text" placeholder="What is your project about?" className={cls('subject')} {...inputProps('subject')} />
      </Field>

      <Field id="message" label="Project details" required error={errors.message} hint="Goals, timeline and anything else that helps us understand the project.">
        <textarea rows={6} placeholder="Tell us about your project" className={`textarea textarea-bordered w-full bg-white ${errors.message ? 'textarea-error' : ''}`} {...inputProps('message')} />
      </Field>

      <button type="submit" className="btn btn-primary normal-case" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <span className="loading loading-spinner loading-sm" aria-hidden="true" /> Sending
          </>
        ) : (
          'Send message'
        )}
      </button>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === 'sent' && (
          <div role="status" className="alert alert-success items-start text-white">
            <CircleCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Thank you. Your message has been sent. We will reply to the email address you provided.</span>
          </div>
        )}
        {status === 'draft' && (
          <div role="status" className="alert items-start border border-line bg-imperial-tint text-ink">
            <CircleCheck className="h-5 w-5 shrink-0 text-imperial" aria-hidden="true" />
            <span>
              Your email app should open with your message ready to send. This demo site does not store or send messages itself, so nothing has been sent yet.{' '}
              <a href={mailto} className="font-semibold text-imperial underline">
                Open the email draft again
              </a>
              .
            </span>
          </div>
        )}
        {status === 'failed' && (
          <div role="alert" className="alert alert-error items-start text-white">
            <CircleAlert className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>
              Your message could not be sent. Check your connection and try again, or email us directly at{' '}
              <a href={`mailto:${site.email}`} className="font-semibold underline">
                {site.email}
              </a>
              .
            </span>
          </div>
        )}
      </div>
    </form>
  )
}
