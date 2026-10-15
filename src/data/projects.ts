import type { Project } from '../types'
import projectImage1 from '../assets/escape-room.png'
import projectImage2 from '../assets/into-orbit.png'
import projectImage3 from '../assets/budget-app.png'
import projectImage4 from '../assets/portfolio.png'
import projectImage5 from '../assets/bookclub-api.png'
import projectImage6 from '../assets/implementation-design.png'

export const projects: Project[] = [
  {
    id: 'escape-room',
    title: 'Escape Room',
    description: 'An interactive puzzle concept with clues, memory challenges and a timer.',
    image: projectImage1,
    tags: ['React', 'JavaScript', 'CSS'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Escaperoom',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-natural-stunner-squad/',
  },
  {
    id: 'into-orbit',
    title: 'Into Orbit',
    description: 'A school project in graphic design and moodboard creation.',
    image: projectImage2,
    tags: ['UX / UI'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Into-Orbit',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-moodboard/',
  },
  {
    id: 'budget-app',
    title: 'Budget App',
    description: 'An app concept for keeping track of income, expenses and savings.',
    image: projectImage3,
    tags: ['React', 'TypeScript'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Budget-app',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-mariabhai/',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'My personal portfolio built with React, TypeScript and Vite, with project filtering and a responsive layout.',
    image: projectImage4,
    tags: ['React', 'TypeScript', 'UX / UI'],
    isConcept: false,
  },
  {
    id: 'bookclub-api',
    title: 'Bookclub API',
    description: 'A school group project focused on building an API for a book club.',
    image: projectImage5,
    tags: ['API'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Bookclub-API',
    liveUrl: 'https://gruppuppgift2-api.vercel.app',
  },
  {
    id: 'implementation-design',
    title: 'Implementation av design',
    description: 'A school project focused on implementing a provided design with HTML and CSS.',
    image: projectImage6,
    tags: ['HTML', 'CSS'],
    isConcept: false,
    repoUrl: 'https://github.com/mariabhai/Implementation-av-design',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-html-css-inl-2-design-mariabhai/',
  },
]
