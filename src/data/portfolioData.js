// ─────────────────────────────────────────────────────────────
// PORTFOLIO DATA — edit this file to update all site content
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Hemasri',
  title: 'Senior Frontend Developer',
  summary:
  'Frontend Developer with 6+ years of experience building scalable, high-performance web applications using Angular and modern JavaScript frameworks including React. ' +
  'Delivered enterprise and government solutions serving 200+ daily users, achieving up to 30% performance improvements. ' +
  'Strong in component architecture, API integration, and performance optimization, with a growing focus on React and modern frontend ecosystems.',
  email: 'srihemasurya@gmail.com',
  phone: '+91 9952688512',
  location: 'Salem, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/hemasriofficial',
  github: 'https://github.com/dev-hemasri',
  portfolio: 'https://hemasri-dev.netlify.app',
  resumeUrl: '/hemasri_frontend.pdf',
}

export const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '200+', label: 'Daily Active Users' },
  // { value: '30%', label: 'Performance Gains' },
]

export const skills = [
  {
    category: 'Core Languages',
    iconClass: 'devicon-javascript-plain colored',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Angular Ecosystem',
    iconClass: 'devicon-angularjs-plain colored',
    items: ['Angular 2+', 'Angular CLI', 'Routing & Modules', 'Reactive Forms', 'Angular Material', 'HTTP Interceptors'],
  },
  {
    category: 'State & Async',
    iconClass: 'devicon-rxjs-plain',
    items: ['RxJS', 'NgRx', 'Observables', 'BehaviorSubject', 'Async Pipe'],
  },
  {
    category: 'UI & Styling',
    iconClass: 'devicon-bootstrap-plain colored',
    items: ['Bootstrap 5', 'Tailwind CSS', 'Responsive Design', 'CSS Grid / Flexbox', 'Accessibility (WCAG)'],
  },
  {
    category: 'API & Data',
    iconClass: 'devicon-nodejs-plain colored',
    items: ['REST APIs', 'HTTPClient', 'Async/Await', 'JSON Handling', 'GraphQL (Basics)'],
  },
  {
    category: 'Backend',
    iconClass: 'devicon-php-plain colored',
    items: ['PHP', 'MySQL'],
  },
  {
    category: 'React',
    iconClass: 'devicon-react-original colored',
    items: ['React 18+', 'Hooks', 'Redux', 'Context API', 'React Router', 'Component Architecture'],
  },
  {
    category: 'Testing & QA',
    iconClass: 'devicon-jest-plain colored',
    items: ['Jasmine', 'Karma', 'Unit Testing', 'Postman', 'Chrome DevTools'],
  },
  {
    category: 'Tools & Workflow',
    iconClass: 'devicon-git-plain colored',
    items: ['Git', 'GitHub', 'CI/CD', 'Webpack', 'Jira', 'Agile/Scrum'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Freelance Frontend Developer & React Upskilling',
    company: 'Self-Employed',
    location: 'Remote, India',
    period: 'Jan 2026 – Present',
    type: 'current',
    achievements: [
      'Deepening React expertise through structured learning: Hooks, Context API, React Router v6, and REST API integration with JSON data handling.',
      'Building React portfolio projects for deployment on Netlify and Vercel — applying Angular architecture patterns to learn React component design.',
      'Expanding testing skills with Jest and Cypress E2E testing to complement existing Jasmine/Karma proficiency.',
      'Exploring Next.js (SSR/SSG, App Router) and modern performance patterns like code splitting and lazy loading.',
    ],
  },
  {
    id: 2,
    role: 'Senior Frontend Developer',
    company: 'K Labs Technology & Solutions Pvt Ltd',
    location: 'Remote, India',
    period: 'May 2023 – Dec 2025',
    type: 'full-time',
    achievements: [
      'Led frontend architecture of 3 government-scale Angular SPAs — used by 200+ district officers daily — including component libraries, reactive forms, HTTP interceptors, and RBAC systems.',
      'Achieved 30% bundle size reduction and 25% faster page load via lazy loading, OnPush change detection, tree shaking, and Angular Router preloading strategies.',
      'Engineered REST API integration layer using HTTPClient, RxJS operators (switchMap, catchError, debounceTime, retry) and JSON response handling — improving API reliability by 30%.',
      'Designed scalable feature-based modular architecture reducing cross-team merge conflicts by 35% and accelerating feature delivery cycles.',
      'Mentored 2 junior developers through code reviews and technical documentation — reducing PR rework cycles by 25%.',
      'Shipped 6 production releases with zero critical regressions using Git branching and Postman API validation in an Agile/Scrum environment.',
    ],
  },
  {
    id: 3,
    role: 'Junior Frontend Developer',
    company: 'Box of Tech ',
    location: 'Salem, India',
    period: 'Mar 2022 – Apr 2023',
    type: 'full-time',
    achievements: [
      'Developed 5+ Angular feature modules with REST API integration and reusable components — reducing duplicate UI code by 30%.',
      'Improved cross-browser compatibility across Chrome, Firefox, Edge, and Safari — cutting UI defect reports by 20%.',
      'Implemented WCAG 2.1 accessibility standards including ARIA labels, keyboard navigation, and semantic HTML5.',
      'Used RxJS Observables and AJAX patterns for async data handling, enabling real-time reactive UI updates.',
    ],
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'Best Webmasterz',
    location: 'Salem, India',
    period: 'Aug 2019 – Mar 2022',
    type: 'full-time',
    achievements: [
      'Developed 10+ responsive web apps using HTML5, CSS3, JavaScript (ES6+), jQuery, Bootstrap, and DOM manipulation.',
      'Built a PHP/MySQL e-commerce website with product catalog, shopping cart, and order management for 500+ product listings.',
      'Integrated PHP/MySQL backends with JavaScript/jQuery frontends using AJAX and JSON data exchange.',
      'Improved Google Lighthouse scores by 15+ points per project through image optimization and CSS refactoring.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Adi Dravidar and Tribal Welfare Department',
    org: 'Tamil Nadu Government',
    description: 'Government case management system used by district officers to process SC/ST atrocity compensation applications. Built interactive dashboards, role-based workflows, and dynamic reporting modules for efficient case tracking.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'RESTful APIs', 'ApexCharts'],
    slides: [
      { image: 'assets/img/adtw/img1.png', badge: 'Landing Page' },
      { image: 'assets/img/adtw/img2.png', badge: 'Login' },
    ],
    accentColor: '#7F77DD',
    liveUrl: 'https://tnadwpoa.tn.gov.in/',
  },
  {
    id: 2,
    name: 'Sports Development Authority of Tamil Nadu',
    org: 'TN Sports Dept.',
    description: 'Responsive UI for athlete grant application workflows, enabling efficient processing and tracking. Scalable dashboard using Angular Material and Tailwind CSS, improving usability and overall experience.',
    tags: ['Angular', 'TypeScript', 'Angular Material', 'Tailwind CSS'],
    slides: [
      { image: 'assets/img/sdat/img1.png', badge: 'Landing Page' },
      { image: 'assets/img/sdat/img2.png', badge: 'About' },
      { image: 'assets/img/sdat/img3.png', badge: 'Initiative' },
    ],
    accentColor: '#378ADD',
    liveUrl: 'https://tnchampions.sdat.in/',
  },
  {
    id: 3,
    name: 'Agaram Portal',
    org: 'Tamil Nadu Government',
    description: 'Government administrative dashboard for officer service management. Developed workflows for leave, transfers, and reimbursements with dynamic filtering and reporting modules.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap', 'RESTful APIs'],
    slides: [
      { image: 'assets/img/agaram/img1.png', badge: 'Landing Page' },
      { image: 'assets/img/agaram/img2.png', badge: 'About' },
      { image: 'assets/img/agaram/img3.png', badge: 'Reports' },
    ],
    accentColor: '#D4537E',
    liveUrl: null,
  },
  {
    id: 4,
    name: 'SHG Women Initiative Portal',
    org: 'Rural Welfare Initiative',
    description: 'Mobile-first welfare platform for 300+ rural women to access scheme information and manage service requests. Implemented accessible UI and dynamic content integration improving user engagement.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    slides: [
      { image: 'assets/img/shg/img1.png', badge: 'Login' },
    ],
    accentColor: '#1D9E75',
    liveUrl: 'https://shgblp.mathikalam.org/',
  },
  {
    id: 5,
    name: 'MB Incorporated',
    org: 'E-commerce · Private Client',
    description: 'Full-stack e-commerce website for a private business. Includes product catalog, inquiry forms, and dynamic inventory views built with a PHP/MySQL backend and responsive frontend.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
    slides: [
      { image: 'assets/img/mb-incorporate/img1.png', badge: 'Landing Page' },
      { image: 'assets/img/mb-incorporate/img2.png', badge: 'Product Catalog' },
    ],
    accentColor: '#EF9F27',
    liveUrl: 'https://mbincorporated.com/',
  },
  {
    id: 6,
    name: 'VS Selva Maligai Jewelry',
    org: 'Retail · Private Client',
    description: 'Responsive jewelry retail website with product showcase, category filtering, and contact workflow. Designed for mobile-first browsing with a clean, elegant UI suited to the brand.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
    slides: [
      { image: 'assets/img/vs-selva/img1.png', badge: 'Landing Page' },
      { image: 'assets/img/vs-selva/img2.png', badge: 'Product Catalog' },
    ],
    accentColor: '#BA7517',
    liveUrl: 'https://www.vsselvamaligaijewelry.com/',
  },
]
