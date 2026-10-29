import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark.jsx'
import { nav } from '../data/site.js'

const desktopLink = ({ isActive }) =>
  `border-b-2 py-1 text-[0.95rem] font-medium transition-colors ${
    isActive ? 'border-imperial text-imperial' : 'border-transparent text-ink hover:text-imperial'
  }`

const mobileLink = ({ isActive }) =>
  `block border-b border-line py-3.5 text-lg font-medium ${isActive ? 'text-imperial' : 'text-ink'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-[4.5rem] items-center justify-between">
        <Link to="/" aria-label="Imperial Studios home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary btn-sm h-10 px-5 normal-case">
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="btn btn-ghost btn-square lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <div className="container-page pb-6 pt-2">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={mobileLink}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary mt-5 w-full normal-case">
              Start a project
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
