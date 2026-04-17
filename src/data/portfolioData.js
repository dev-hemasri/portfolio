// ─────────────────────────────────────────────────────────────
// PORTFOLIO DATA — edit this file to update all site content
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Hemasri',
  title: 'Senior Frontend Developer',
  tagline: 'Angular Specialist · TypeScript · RxJS · React (Upskilling)',
  summary:
    '6+ years building scalable Angular applications for government and enterprise clients. ' +
    'Delivered portals serving 200+ daily users with 30% performance improvements. ' +
    'Currently expanding into React and modern JavaScript ecosystem.',
  email: 'srihemasurya@gmail.com',
  phone: '+91 9952688512',
  location: 'Salem, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/hemasriofficial',
  github: 'https://github.com/dev-hemasri',
  portfolio: 'https://hemasri-dev.netlify.app',
  resumeUrl: '#', // replace with actual resume PDF link
}

export const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '200+', label: 'Daily Active Users' },
  { value: '30%', label: 'Performance Gains' },
]

export const skills = [
  {
    category: 'Core Languages',
    icon: '{ }',
    iconClass: 'devicon-javascript-plain colored',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'JSON'],
  },
  {
    category: 'Angular Ecosystem',
    icon: 'A',
    iconClass: 'devicon-angularjs-plain colored',
    items: ['Angular 14–17', 'Angular CLI', 'Angular Router', 'Angular Material', 'Reactive Forms', 'HTTP Interceptors', 'Dependency Injection', 'Angular Pipes', 'Feature Modules'],
  },
  {
    category: 'State & Async',
    icon: '~',
    iconClass: 'devicon-rxjs-plain',
    items: ['RxJS', 'NgRx', 'Observables', 'BehaviorSubject', 'Async Pipe', 'switchMap / catchError'],
  },
  {
    category: 'UI & Styling',
    icon: '✦',
    iconClass: 'devicon-bootstrap-plain colored',
    items: ['Bootstrap 5', 'Tailwind CSS', 'Angular Material', 'WCAG 2.1', 'Responsive Design', 'CSS Grid / Flexbox', 'jQuery'],
  },
  {
    category: 'API & Data',
    icon: '⇄',
    iconClass: 'devicon-nodejs-plain colored',
    items: ['RESTful APIs', 'HTTPClient', 'AJAX', 'JSON Parsing', 'GraphQL (basics)', 'Async/Await', 'Axios'],
  },
  {
    category: 'React (Upskilling)',
    icon: '⚛',
    iconClass: 'devicon-react-original colored',
    items: ['React 18', 'React Hooks', 'useState / useEffect', 'useContext', 'React Router v6', 'Component Architecture'],
  },
  {
    category: 'Testing & QA',
    icon: '✓',
    iconClass: 'devicon-jest-plain colored',
    items: ['Jasmine', 'Karma', 'Postman', 'Chrome DevTools', 'Cross-Browser Testing', 'Jest (learning)', 'Cypress (learning)'],
  },
  {
    category: 'DevOps & Tools',
    icon: '⚙',
    iconClass: 'devicon-git-plain colored',
    items: ['Git', 'GitHub', 'CI/CD Pipelines', 'Webpack', 'npm', 'Jira', 'VS Code', 'Agile / Scrum'],
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
    role: 'Senior Frontend Developer (Remote)',
    company: 'K Labs Technology & Solutions Pvt Ltd',
    location: 'Chennai, India',
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
    company: 'Box of Tech (~20-person startup)',
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
    title: 'ADTW — SC/ST Case Management Portal',
    description:
      'Government SPA used by 200+ district officers to process compensation cases. Role-based dashboards, dynamic filtering, real-time status tracking.',
    tags: ['Angular 15', 'NgRx', 'RxJS', 'ApexCharts', 'REST API'],
    image: null,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Agaram Portal — Officer Dashboard',
    description:
      'Admin SPA managing leave, transfers and reimbursements for ~500 TN state officers. Dynamic filtering reduced manual query time by 40%.',
    tags: ['Angular 14', 'RxJS', 'Bootstrap 5', 'REST API'],
    image: null,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'TN Champions — Athlete Grant Platform',
    description:
      'Responsive SPA for Tamil Nadu sportspersons to submit grant applications and track approval status with WCAG-compliant design.',
    tags: ['Angular 16', 'Angular Material', 'Tailwind CSS', 'Reactive Forms'],
    image: null,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'SHG Women Initiative Portal',
    description:
      'Mobile-first welfare platform serving 300+ rural women. WCAG-compliant, PHP/MySQL backend with AJAX/jQuery dynamic content.',
    tags: ['HTML5', 'CSS3', 'jQuery', 'PHP', 'MySQL', 'AJAX'],
    image: null,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    liveUrl: '#',
    githubUrl: '#',
  },
]
