export default function Wordmark({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
        <rect width="64" height="64" rx="10" fill={light ? '#FFFFFF' : '#2A3CC7'} />
        <path d="M20 16h24v7h-8.5v18H44v7H20v-7h8.5V23H20z" fill={light ? '#2A3CC7' : '#FFFFFF'} />
      </svg>
      <span className={`font-display text-xl font-bold leading-none ${light ? 'text-white' : 'text-ink'}`}>
        Imperial <span className="font-medium opacity-70">Studios</span>
      </span>
    </span>
  )
}
