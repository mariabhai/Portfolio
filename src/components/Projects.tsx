import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All')

  const tags = ['All', 'React', 'JavaScript', 'TypeScript', 'UX / UI', 'API', 'HTML', 'CSS', 'Figma', 'Express', 'MongoDB']

  // Derive the list from the selected tag instead of storing extra state.
  const filteredProjects = projects.filter((project) => (
    selectedTag === 'All' || project.tags.includes(selectedTag)
  ))

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects-header">
        <h2 id="projects-title" className="section-label">03 WORK</h2>
        <div className="project-filters" role="group" aria-label="Filter projects by technology">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={selectedTag === tag ? 'filter-button active' : 'filter-button'}
              aria-pressed={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && <p>No projects match this technology yet.</p>}
    </section>
  )
}

export default Projects
