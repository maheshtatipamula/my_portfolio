import { motion } from 'framer-motion'

const SectionHeading = ({ number, title }) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="section-heading"
    >
      <span className="text-secondary font-mono">{number}.</span> {title}
    </motion.h2>
  )
}

export default SectionHeading