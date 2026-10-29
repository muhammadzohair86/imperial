import { useEffect } from 'react'

const SITE = 'Imperial Studios'

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Web Design, Software, Branding and Marketing`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    if (description) tag.setAttribute('content', description)
  }, [title, description])
}
