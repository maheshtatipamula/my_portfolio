import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const { title, description, technologies, github, demo, image } = project

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="project-card"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
            <div className="flex space-x-4">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FiGithub />
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>
          <p className="text-textSecondary mb-4">{description}</p>
        </div>
        
        {image && (
          <div className="mb-4 overflow-hidden rounded">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover object-top hover:object-bottom transition-all duration-3000 ease-in-out"
            />
          </div>
        )}
        
        <div className="mt-auto">
          <ul className="flex flex-wrap gap-2 text-xs font-mono text-textSecondary">
            {technologies.map((tech, index) => (
              <li key={index} className="bg-primary/50 px-2 py-1 rounded border border-textSecondary/20">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard