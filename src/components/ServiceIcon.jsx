import { ClipboardList, Code, Megaphone, Monitor, PenTool } from 'lucide-react'

const icons = {
  monitor: Monitor,
  code: Code,
  clipboard: ClipboardList,
  pen: PenTool,
  megaphone: Megaphone,
}

export default function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const Icon = icons[name] ?? Monitor
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />
}
