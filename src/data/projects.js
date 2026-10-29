// Sample projects built from the template's portfolio images. Replace these with real work.
export const categories = [
  { id: 'app', label: 'Apps' },
  { id: 'product', label: 'Products' },
  { id: 'branding', label: 'Branding' },
  { id: 'books', label: 'Print' },
]

export const categoryInfo = {
  app: {
    services: ['web-design', 'software-development'],
    brief: 'A mobile app concept that needed a clear interface and an easy first-time experience.',
    approach: ['Mapped the main user journeys', 'Designed screens for the key tasks', 'Prepared the interface for development'],
  },
  product: {
    services: ['product-management', 'marketing'],
    brief: 'Product imagery and presentation designed to show an item clearly and make it easy to choose.',
    approach: ['Defined the product story and key details', 'Directed the composition and styling', 'Prepared images for web and ads'],
  },
  branding: {
    services: ['graphic-design', 'marketing'],
    brief: 'A brand and packaging concept designed to be recognized quickly on a shelf and online.',
    approach: ['Explored visual directions', 'Developed the identity and packaging system', 'Delivered files ready for production'],
  },
  books: {
    services: ['graphic-design'],
    brief: 'A book cover and layout concept designed to attract readers and stay readable.',
    approach: ['Studied the audience and the genre', 'Designed the cover and typography', 'Prepared print-ready artwork'],
  },
}

export const projects = [
  { slug: 'mobile-dashboard-app', title: 'Mobile dashboard app', category: 'app', image: '/images/portfolio/app-1.jpg', alt: 'A hand holding a phone with a data dashboard in front of a desktop computer', summary: 'A dashboard interface that puts the most important numbers first and keeps everything else one tap away.' },
  { slug: 'mobile-wallet-app', title: 'Mobile wallet app', category: 'app', image: '/images/portfolio/app-2.jpg', alt: 'A person holding a phone showing a mobile payment app', summary: 'A payment app concept with a short, friendly onboarding flow and a clear home screen.' },
  { slug: 'app-onboarding-screens', title: 'App onboarding screens', category: 'app', image: '/images/portfolio/app-3.jpg', alt: 'A phone on a desk showing a teal app welcome screen', summary: 'Welcome and sign-up screens designed to get new users to their first action quickly.' },
  { slug: 'smartwatch-product-imagery', title: 'Smartwatch product imagery', category: 'product', image: '/images/portfolio/product-1.jpg', alt: 'A smartwatch with a red woven strap on a white background', summary: 'Clean product imagery that shows the watch design and strap detail without distraction.' },
  { slug: 'everyday-carry-flat-lay', title: 'Everyday carry flat lay', category: 'product', image: '/images/portfolio/product-2.jpg', alt: 'A camera, watch, flashlight and pocket knife laid out on a dark surface', summary: 'A flat lay composition that presents a set of tools as one coordinated collection.' },
  { slug: 'wall-lamp-product-shot', title: 'Wall lamp product shot', category: 'product', image: '/images/portfolio/product-3.jpg', alt: 'A yellow wall lamp against a white wall', summary: 'A minimal product shot that lets the color and shape of the lamp carry the image.' },
  { slug: 'skincare-packaging', title: 'Skincare packaging', category: 'branding', image: '/images/portfolio/branding-1.jpg', alt: 'Black skincare tubes with gold caps on a dark background', summary: 'A restrained packaging concept using dark tones and metallic accents for a premium feel.' },
  { slug: 'natural-cosmetics-identity', title: 'Natural cosmetics identity', category: 'branding', image: '/images/portfolio/branding-2.jpg', alt: 'Business cards, a cosmetic jar and a dropper bottle on a warm background', summary: 'A visual identity carried across cards, jars and bottles in a soft, natural palette.' },
  { slug: 'supplement-packaging', title: 'Supplement packaging', category: 'branding', image: '/images/portfolio/branding-3.jpg', alt: 'Colorful snack pouches and a gift box on a dark background', summary: 'Bright, readable packaging designed to stand out and communicate the product at a glance.' },
  { slug: 'teal-book-cover', title: 'Teal book cover', category: 'books', image: '/images/portfolio/books-1.jpg', alt: 'A hardcover book with a teal and white cover on a wooden table', summary: 'A cover design built on bold shapes and a limited palette for strong shelf presence.' },
  { slug: 'editorial-cover-design', title: 'Editorial cover design', category: 'books', image: '/images/portfolio/books-2.jpg', alt: 'A pink book cover with bold black lettering next to glasses and lipstick', summary: 'A typographic cover that relies on scale and color rather than illustration.' },
  { slug: 'illustrated-hardcover', title: 'Illustrated hardcover', category: 'books', image: '/images/portfolio/books-3.jpg', alt: 'A blue illustrated hardcover book resting on a soft fabric surface', summary: 'An illustrated hardcover design with a warm, approachable look.' },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
export const categoryLabel = (id) => categories.find((c) => c.id === id)?.label ?? id
