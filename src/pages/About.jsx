import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { skillsData } from "../data/skills";

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading number="01" title="About Me" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="space-y-4 text-textSecondary">
                <p>
                  Hello! I'm a frontend engineer with a passion for creating
                  beautiful, functional, and user-centered digital experiences.
                  My journey in web development began during college when I
                  started building small websites for friends and local
                  businesses.
                </p>

                <p>
                  After graduating with a degree in Computer Science, I joined a
                  startup where I've spent the last year honing my skills in
                  modern frontend technologies. Working in a fast-paced
                  environment has taught me to write clean, maintainable code
                  and to collaborate effectively with designers, backend
                  developers, and stakeholders.
                </p>

                <p>
                  I'm particularly interested in the intersection of code and
                  design, and I strive to create interfaces that are not only
                  visually appealing but also intuitive and accessible to all
                  users.
                </p>

                <p>
                  Beyond frontend development, I'm actively expanding my
                  knowledge in AI/ML, computer vision, generative AI, and data
                  science. I'm passionate about leveraging these cutting-edge
                  technologies to create more intelligent and responsive web
                  applications. I've completed several online courses and
                  personal projects in these areas and am aspiring to work at
                  the intersection of frontend development and AI in my future
                  roles.
                </p>

                <p>
                  When I'm not coding, you can find me exploring hiking trails,
                  experimenting with new recipes, or attending local tech
                  meetups.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center"
                >
                  <FiDownload className="mr-2" /> Download Resume
                </a>
                <Link to="/resume" className="btn">
                  View Resume
                </Link>
              </div>
            </div>

            <div>
              <div className="sticky top-32">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-secondary/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-primary/90 p-6 rounded-lg border border-secondary/50">
                    <h3 className="text-xl font-semibold mb-4 text-secondary">
                      Skills & Technologies
                    </h3>

                    <div className="space-y-4">
                      {skillsData?.map((category, index) => {
                        return (
                          <div key={index}>
                            <h4 className="font-medium mb-2 text-textPrimary">
                              {category.category}
                            </h4>
                            <ul className="grid grid-cols-2 gap-2">
                              {category.skills.map((skill, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="text-secondary mr-2">▹</span>
                                  <span className="text-textSecondary text-sm">
                                    {skill}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <SectionHeading number="02" title="Experience" />

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-secondary font-mono">2023 — Present</div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-textPrimary">
                    Frontend Engineer
                  </h3>
                  <h4 className="text-secondary mb-2">DataFlare.ai</h4>
                  <ul className="space-y-2 text-textSecondary">
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Built a scalable frontend from scratch, ensuring a
                        modular and reusable component architecture using
                        React.js
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Developed a config-driven UI, allowing dynamic content
                        generation based on backend configurations for
                        flexibility and scalability.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Implemented advanced caching strategies (memoization,
                        lazy loading) to optimize performance and reduce
                        redundant API calls.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Engineered a clean, maintainable, and scalable codebase,
                        following best practices for reusability and
                        maintainability.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Integrated APIs efficiently with optimized data
                        fetching, reducing response time by 20% and improving
                        system performance by 15%.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-secondary font-mono">2022 — 2023</div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-textPrimary">
                    AI/Machine Learning Intern
                  </h3>
                  <h4 className="text-secondary mb-2">YBI Foundation</h4>
                  <ul className="space-y-2 text-textSecondary">
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Designed and trained machine learning models using
                        Python, enhancing predictive accuracy for real-world
                        datasets
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Collaborated with data scientists to implement AI
                        solutions, improving algorithm efficiency and processing
                        speed.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-secondary mr-2">▹</span>
                      <span>
                        Analyzed and visualized data trends, supporting
                        strategic insights for business applications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <SectionHeading number="03" title="Education" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-secondary font-mono">2019 — 2023</div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-textPrimary">
                  Bachelor of Science in Communications
                </h3>
                <h4 className="text-secondary mb-2">
                  Methodist Engineering College
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

// <p className="text-textSecondary">
// Relevant coursework: Data Structures & Algorithms, Web
// Development, User Interface Design, Database Systems, Software
// Engineering, Introduction to Machine Learning, Computer Vision
// </p>
