// All site content lives here. Edit this file to update the portfolio;
// components only read from it.

const LINKEDIN = 'https://www.linkedin.com/in/andika-kristanto-965a2912b/'
const GITHUB = 'https://github.com/AndikaKristanto7'
const EMAIL = 'andikakristanto789@gmail.com'

export const profile = {
  name: 'Andika Kristanto',
  initials: 'AK',
  role: 'Software Engineer · Fullstack (Backend-focused)',
  tagline:
    'I build and scale multi-tenant web platforms on AWS: secure APIs, fine-grained access control, and code I can trust to ship.',
  location: 'Bogor, Jawa Barat, Indonesia',
  email: EMAIL,
  links: {
    github: GITHUB,
    linkedin: LINKEDIN,
  },
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export const about =
  "Software Engineer with 9+ years of experience building and scaling web applications across fintech and agritech, currently specializing in backend development of multi-tenant platforms on AWS. Skilled in secure API design, role-based access control, and cloud cost awareness, with a strong focus on reliability and high automated test coverage. I like getting to the root of a problem before writing code, whether it's a production incident or a workflow that feels clunky to users. I work closely with product and business stakeholders, and use AI-assisted development to ship faster without compromising quality."

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['JavaScript', 'PHP', 'Kotlin', 'HTML5', 'CSS3', 'Vue.js', 'React', 'Laravel', 'Lumen', 'Express.js', 'Node.js', 'Spring Boot'],
  },
  {
    title: 'Databases & Tools',
    items: ['MySQL', 'PostgreSQL', 'Git', 'RESTful APIs', 'Docker', 'AWS', 'CI/CD', 'Agile (Scrum)'],
  },
  {
    title: 'Practices',
    items: [
      'Multi-tenant Architecture',
      'Layered Architecture',
      'Role-Based Access Control',
      'Application Security (OWASP)',
      'Unit Testing',
      'AI-Assisted Development (Claude Code)',
    ],
  },
]

// `known` = skills carried from earlier chapters, `new` = picked up in this chapter.
const BASE = ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript', 'MySQL']

export const journey = {
  chapters: [
    {
      year: '2016',
      railYear: '2016',
      title: 'Where it started',
      where: 'Web Developer · P2P lending platform (fintech)',
      story:
        "My story starts at one of Indonesia's leading peer-to-peer lending platforms. I was revamping user dashboards, jumping on production issues when things broke, and sitting down with stakeholders to work out what they actually needed before writing a line of code.",
      known: [],
      new: BASE,
    },
    {
      year: '2017 – 2021',
      railYear: '2017',
      title: 'Building things from scratch',
      where: 'Software Engineer · P2P lending platform (fintech)',
      story:
        'This is where I learned to build whole products. I helped create a supply chain finance platform from the ground up, from anchor management to vendor loan applications, and took a mutual fund integration all the way from the UI to the third-party API. Product, design, QA and I worked as one team, sprint after sprint.',
      known: BASE,
      new: [],
    },
    {
      year: '2021 – 2023',
      railYear: '2021',
      title: 'Moving to the Business Tribe',
      where: 'Business Fullstack Engineer · P2P lending platform (fintech)',
      story:
        "I joined the Business Tribe, which owned the borrower side of the platform, from registration to loan listing. I shipped a feature that brought in new revenue, reviewed my teammates' code, and wrote documentation for the team.",
      known: BASE,
      new: ['Vue.js', 'Kotlin', 'Spring Boot'],
    },
    {
      year: 'Nov 2023 – May 2024',
      railYear: '2023',
      title: 'A career break, back to school',
      where: 'Fullstack Web Development Bootcamp · Binar Academy',
      story:
        'After seven years in fintech, I took a career break and joined the Binar Academy bootcamp. For six months I built production-ready projects with Vue.js, React and Express.js, and designed RESTful APIs the way the industry does it today.',
      known: ['Vue.js'],
      new: ['React', 'Express.js'],
    },
    {
      year: 'Aug 2024 – Jan 2025',
      railYear: '2024',
      title: 'Going solo',
      where: 'Freelance Programmer',
      story:
        'After finishing the bootcamp, I went freelance, and every project was mine end to end. One week it was an OTP two-factor login, the next it was setting up UAT environments with DevOps, building an on-premise server from bare hardware, or launching a WordPress site for a client.',
      known: [],
      new: ['WordPress'],
    },
    {
      year: '2025 – now',
      railYear: '2025',
      title: 'Software for farms',
      where: 'Fullstack Programmer · Software house (agritech client)',
      story:
        "Today I work at a software house, fully dedicated to one agritech client as the main backend engineer of their farm management platform: livestock, breeding, milk production, the works. I led the move from microservices back to a simpler monolith and reorganized it into clean layers (controllers, services, repositories) so every feature has an obvious home. Along the way I rebuilt login on AWS Cognito with permissions down to individual buttons, made sure every tenant's data stays theirs, and keep the APIs locked down. When a workflow felt clunky, I pitched a simpler one to the PM and reshaped the APIs to match. Since September 2026 I have worked with Claude Code daily, with our conventions written down so it builds things the way the team does.",
      known: ['PHP', 'MySQL'],
      new: ['Lumen', 'AWS', 'Docker', 'Layered Architecture'],
      current: true,
    },
  ],
}

export const contact = {
  title: 'Contact',
  lead: 'Open to freelance projects.',
}
