import type { Project } from '../types'
import projectImage1 from '../assets/escape-room-800.webp'
import projectImage1Small from '../assets/escape-room-400.webp'
import projectImage2 from '../assets/into-orbit-800.webp'
import projectImage2Small from '../assets/into-orbit-400.webp'
import projectImage3 from '../assets/budget-app-800.webp'
import projectImage3Small from '../assets/budget-app-400.webp'
import projectImage4 from '../assets/portfolio-800.webp'
import projectImage4Small from '../assets/portfolio-400.webp'
import projectImage5 from '../assets/bookclub-api-800.webp'
import projectImage5Small from '../assets/bookclub-api-400.webp'
import projectImage6 from '../assets/implementation-design-800.webp'
import projectImage6Small from '../assets/implementation-design-400.webp'

export const projects: Project[] = [
  {
    id: 'escape-room',
    title: 'Escape Room',
    description: 'Error 404 is a digital escape room built by four students at Medieinstitutet. Solve puzzles across four rooms inspired by verification codes, CAPTCHAs, popups and complicated passwords.',
    image: projectImage1,
    imageSmall: projectImage1Small,
    tags: ['HTML', 'CSS', 'TypeScript'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Escaperoom',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-natural-stunner-squad/',
  },
  {
    id: 'into-orbit',
    title: 'Into Orbit',
    description: 'A school group project implementing another group’s Figma design for a premium space travel brand. Features a responsive layout, custom typography and an interactive space map.',
    image: projectImage2,
    imageSmall: projectImage2Small,
    tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Vite', 'Figma'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Into-Orbit',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-moodboard/',
  },
  {
    id: 'budget-app',
    title: 'Budget App',
    description: 'A school project for tracking income and expenses by category. Add and delete entries, see your balance update automatically and keep your data saved in localStorage.',
    image: projectImage3,
    imageSmall: projectImage3Small,
    tags: ['TypeScript', 'Vite'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Budget-app',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-mariabhai/',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'My personal portfolio built with React, TypeScript and Vite, with project filtering and a responsive layout.',
    image: projectImage4,
    imageSmall: projectImage4Small,
    tags: ['React', 'TypeScript', 'UX / UI'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Portfolio',
    liveUrl: 'https://portfolio-test11-d185.vercel.app',
  },
  {
    id: 'bookclub-api',
    title: 'Bookclub API',
    description: 'A fullstack group project with a Book API for users, books and reviews, backed by MongoDB. Includes a Bootstrap client with public and password-protected pages.',
    image: projectImage5,
    imageSmall: projectImage5Small,
    tags: ['Express', 'TypeScript', 'Node.js', 'MongoDB', 'Bootstrap', 'API'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Bookclub-API',
    liveUrl: 'https://gruppuppgift2-api.vercel.app',
  },
  {
    id: 'implementation-design',
    title: 'Good Morning Club',
    description: 'A school project implementing a provided website design with semantic HTML, CSS media queries and labelled forms. Includes layouts for desktop, tablet and mobile.',
    image: projectImage6,
    imageSmall: projectImage6Small,
    tags: ['HTML', 'CSS'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Implementation-av-design',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-html-css-inl-2-design-mariabhai/',
  },
]
