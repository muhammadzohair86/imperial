// Service names come from the original template's service list:
// Web Design, Software Development, Product Management, Graphic Design, Marketing.
export const services = [
  {
    slug: 'web-design',
    title: 'Web Design',
    icon: 'monitor',
    image: '/images/portfolio/app-1.jpg',
    imageAlt: 'A phone showing an app dashboard next to a desktop computer',
    short: 'Websites that explain what you do clearly and make it easy for visitors to get in touch.',
    intro:
      'We design and build websites that present your business clearly on every screen size. Each page is planned around what your visitors want to know and what you want them to do next.',
    need: 'A website that is hard to navigate, slow on a phone or vague about what you offer sends visitors elsewhere. Good web design removes that friction.',
    scope: [
      'Sitemap and page structure',
      'Responsive page design for desktop, tablet and mobile',
      'Front-end development in HTML, CSS and JavaScript',
      'Accessibility checks and basic search engine setup',
    ],
    benefits: [
      'A clear message that visitors understand within seconds',
      'Layouts that work comfortably on phones and larger screens',
      'A consistent look that matches your brand',
    ],
    deliverables: ['Approved page designs', 'A production-ready website', 'A simple style guide covering color, type and components'],
    steps: ['Map the pages and content', 'Design key pages and review them with you', 'Build, test and refine', 'Launch and hand over'],
    categories: ['app', 'product'],
    faqs: [
      { q: 'Do I need to provide the text and images?', a: 'You can provide them, or we can help shape the copy and image direction. We will agree on who does what during planning.' },
      { q: 'Will the website work on mobile devices?', a: 'Yes. Every design is built to be responsive and is tested on common screen sizes before launch.' },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    icon: 'code',
    image: '/images/portfolio/app-2.jpg',
    imageAlt: 'A hand holding a phone that shows a mobile payment app',
    short: 'Custom web and mobile applications built around the way your business actually works.',
    intro:
      'We build web and mobile applications that fit your workflow. From the first prototype to the finished release, we focus on software that is reliable, understandable and ready to grow.',
    need: 'Off-the-shelf tools do not always match how your team or customers work. Custom software lets you build exactly the features you need and leave out the rest.',
    scope: [
      'Requirements gathering and technical planning',
      'Web application and mobile app development',
      'Integration with the tools and services you already use',
      'Testing, deployment and documentation',
    ],
    benefits: [
      'Features shaped around your process instead of a generic template',
      'Code that is organized so it can be maintained and extended',
      'Regular working releases you can review as we go',
    ],
    deliverables: ['A working application', 'Source code and setup documentation', 'A deployment and handover session'],
    steps: ['Define requirements', 'Prototype the key flows', 'Develop and test in stages', 'Release and document'],
    categories: ['app'],
    faqs: [
      { q: 'Can you build both web and mobile apps?', a: 'Yes. We will recommend the approach that suits your users and budget, whether that is a web app, a mobile app or both.' },
      { q: 'Do I own the code?', a: 'Ownership terms are agreed in writing before the project starts, so you know exactly what you are getting.' },
    ],
  },
  {
    slug: 'product-management',
    title: 'Product Management',
    icon: 'clipboard',
    image: '/images/portfolio/product-2.jpg',
    imageAlt: 'A neatly arranged flat lay of tools and accessories on a dark surface',
    short: 'Planning and coordination that keeps a digital product on scope, on schedule and aimed at real user needs.',
    intro:
      'We help you decide what to build, in what order and why. Our product management service turns ideas and feedback into a clear roadmap that your team can deliver.',
    need: 'Projects drift when priorities are unclear, requirements keep changing or nobody owns the full picture. A product manager keeps the work focused on what matters most.',
    scope: [
      'User needs and requirements discovery',
      'Roadmap and feature prioritization',
      'Backlog management and sprint planning',
      'Stakeholder communication and release planning',
    ],
    benefits: [
      'One clear list of priorities that everyone agrees on',
      'Fewer surprises because scope and trade-offs are visible',
      'Decisions based on user needs, not guesses',
    ],
    deliverables: ['A product roadmap', 'A prioritized backlog with clear requirements', 'A release plan'],
    steps: ['Gather goals and constraints', 'Prioritize and plan the roadmap', 'Coordinate delivery', 'Review and adjust after release'],
    categories: ['product', 'app'],
    faqs: [
      { q: 'Can you manage a product that another team is building?', a: 'Yes. We can work alongside your existing developers and designers to provide direction and keep delivery organized.' },
      { q: 'Is this only for new products?', a: 'No. It is equally useful for improving a product that is already live and needs a clearer plan.' },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: 'pen',
    image: '/images/portfolio/branding-2.jpg',
    imageAlt: 'Branded stationery, cosmetic jars and a bottle arranged on a warm background',
    short: 'Brand identities, packaging and print and digital layouts that look consistent and professional.',
    intro:
      'We create visual identities and design work that make your business easy to recognize. From a logo to a full set of packaging or a printed book, every piece follows the same visual language.',
    need: 'Inconsistent or dated visuals make a business harder to trust and remember. A considered identity makes every touchpoint feel connected.',
    scope: [
      'Logo and visual identity',
      'Packaging design',
      'Book, editorial and other print layouts',
      'Social media and digital graphics',
    ],
    benefits: [
      'A recognizable look across print and digital',
      'Packaging and print that stand out on a shelf or a screen',
      'Files prepared for printing and for the web',
    ],
    deliverables: ['Logo and identity files', 'Brand guidelines', 'Print-ready and web-ready artwork'],
    steps: ['Understand the brand and audience', 'Explore design directions', 'Refine the chosen direction', 'Prepare and deliver final files'],
    categories: ['branding', 'books'],
    faqs: [
      { q: 'Can you design packaging as well as a logo?', a: 'Yes. We can design a logo on its own or carry the identity through to packaging, print and digital graphics.' },
      { q: 'Will I receive print-ready files?', a: 'Yes. Final artwork is prepared in the formats your printer or platform needs.' },
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    icon: 'megaphone',
    image: '/images/portfolio/branding-3.jpg',
    imageAlt: 'Colorful product packaging for a snack brand on a dark background',
    short: 'Campaigns and creative ads that reach the right audience and give them a clear next step.',
    intro:
      'We plan and produce marketing that supports your goals. Our creative ads and campaigns pair a clear message with design that fits your brand.',
    need: 'Marketing works best when every ad, page and message points toward one goal. Without a plan, effort is spread thin and hard to measure.',
    scope: [
      'Campaign strategy and messaging',
      'Creative ad design for digital channels',
      'Landing pages that connect ads to a clear action',
      'Reporting on what is working',
    ],
    benefits: [
      'Messaging that stays consistent across every channel',
      'Ads designed to match your brand and your product',
      'Simple reports you can use to decide what to do next',
    ],
    deliverables: ['A campaign plan', 'Ad creative in the formats you need', 'Campaign reporting'],
    steps: ['Set the goal and audience', 'Plan the message and channels', 'Produce and launch creative', 'Review results and improve'],
    categories: ['branding', 'product'],
    faqs: [
      { q: 'Do you guarantee marketing results?', a: 'No agency can honestly guarantee results. We set clear goals, track the right measures and share what we learn so each campaign improves.' },
      { q: 'Can you design the ads and the landing page?', a: 'Yes. We can handle the creative and the page it leads to, so the experience feels connected from the first click.' },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
