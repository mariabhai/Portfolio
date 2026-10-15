import { motion, useReducedMotion } from 'motion/react'
import type { Project as ProjectData } from '../types'

type ProjectCardProps = {
  project: ProjectData
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="project-card"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
    >
      <img className="project-image" src={project.image} alt={project.isConcept ? `${project.title} concept preview` : `Screenshot of ${project.title}`} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-tags">{project.tags.join(' / ')}</p>
        {project.isConcept && <p className="project-status">FICTIONAL CONCEPT</p>}
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl}>VIEW PROJECT ↗</a>}
          {project.repoUrl && <a href={project.repoUrl}>GITHUB ↗</a>}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
