import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { allProjects } from '../data/projects'

const Projects = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading number="01" title="All Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects