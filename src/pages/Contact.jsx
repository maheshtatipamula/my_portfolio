import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }
  
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading number="01" title="Get In Touch" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-textSecondary mb-6">
                I'm currently looking for new opportunities. Whether you have a question, a project idea, 
                or just want to say hi, feel free to reach out. I'll do my best to get back to you!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <FiMail className="text-secondary mr-3" />
                  <a href="mailto:your.email@example.com" className="text-textSecondary hover:text-secondary transition-colors">
                    your.email@example.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FiLinkedin className="text-secondary mr-3" />
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FiGithub className="text-secondary mr-3" />
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    github.com/yourusername
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FiTwitter className="text-secondary mr-3" />
                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    twitter.com/yourusername
                  </a>
                </div>
              </div>
              
              <div className="bg-primary/50 p-6 rounded-lg border border-textSecondary/20">
                <h3 className="text-xl font-semibold mb-4 text-textPrimary">Looking for freelance work?</h3>
                <p className="text-textSecondary mb-4">
                  I'm open to freelance opportunities. If you have a project that needs a frontend developer, 
                  let's discuss how I can help bring your ideas to life.
                </p>
                <a 
                  href="mailto:your.email@example.com?subject=Freelance%20Project%20Inquiry" 
                  className="btn"
                >
                  Discuss a Project
                </a>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-textPrimary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/30 border border-textSecondary/20 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-textPrimary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/30 border border-textSecondary/20 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-textPrimary mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/30 border border-textSecondary/20 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-textPrimary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-primary/30 border border-textSecondary/20 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn w-full py-3 flex justify-center items-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">
                    Your message has been sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact