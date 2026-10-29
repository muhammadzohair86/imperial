import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const base = useId()

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const buttonId = `${base}-btn-${i}`
        const panelId = `${base}-panel-${i}`
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold transition-colors hover:text-imperial"
              >
                {item.q}
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-imperial" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-imperial" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="max-w-3xl pb-6 leading-relaxed text-muted">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
