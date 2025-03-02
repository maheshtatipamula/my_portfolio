import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FiDownload } from "react-icons/fi";
import { skillsData } from "../data/skills";
import { allProjects, featuredProjects } from "../data/projects";

const Resume = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <SectionHeading number="01" title="Resume" />
            <a
              href="/Mahesh_Thatipamula.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center"
            >
              <FiDownload className="mr-2" /> Download PDF
            </a>
          </div>

          <div className="bg-primary/30 p-8 rounded-lg border border-textSecondary/20 mb-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-textPrimary mb-2">
                Mahesh
              </h1>
              <p className="text-secondary">Frontend Engineer</p>
              <div className="flex justify-center gap-4 mt-2 text-textSecondary">
                <span>mahesh.tatipamula43@gmail.com</span>
                <span>•</span>
                <span>Hyderabad</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-textSecondary/20 pb-2">
                Summary
              </h2>
              <p className="text-textSecondary">
                Aspiring AI Engineer & Frontend Developer with expertise in
                Generative AI, Machine Learning, and Deep Learning. Passionate
                about building intelligent, AI-driven web applications that
                enhance user experiences and solve real-world problems
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-textSecondary/20 pb-2">
                Experience
              </h2>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium text-textPrimary">
                    Frontend Engineer
                  </h3>
                  <span className="text-textSecondary text-sm">
                    2023 — Present
                  </span>
                </div>
                <h4 className="text-secondary mb-2">TechStartup Inc.</h4>
                <ul className="list-disc list-inside space-y-1 text-textSecondary">
                  <li>
                    Built a scalable frontend from scratch, ensuring a modular
                    and reusable component architecture using React.js
                  </li>
                  <li>
                    Developed a config-driven UI, allowing dynamic content
                    generation based on backend configurations for flexibility
                    and scalability.
                  </li>
                  <li>
                    Implemented advanced caching strategies (memoization, lazy
                    loading) to optimize performance and reduce redundant API
                    calls.
                  </li>
                  <li>
                    Engineered a clean, maintainable, and scalable codebase,
                    following best practices for reusability and
                    maintainability.
                  </li>
                  <li>
                    Integrated APIs efficiently with optimized data fetching,
                    reducing response time by 20% and improving system
                    performance by 15%.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium text-textPrimary">
                    AI/Machine Learning Intern
                  </h3>
                  <span className="text-textSecondary text-sm">
                    2022 — 2023
                  </span>
                </div>
                <h4 className="text-secondary mb-2">YBI Foundation</h4>
                <ul className="list-disc list-inside space-y-1 text-textSecondary">
                  <li>
                    Designed and trained machine learning models using Python,
                    enhancing predictive accuracy for real-world datasets
                  </li>
                  <li>
                    Collaborated with data scientists to implement AI solutions,
                    improving algorithm efficiency and processing speed.
                  </li>
                  <li>
                    Analyzed and visualized data trends, supporting strategic
                    insights for business applications
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-textSecondary/20 pb-2">
                Education
              </h2>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium text-textPrimary">
                    Bachelor of Science in Communications
                  </h3>
                  <span className="text-textSecondary text-sm">
                    2019 — 2023
                  </span>
                </div>
                <h4 className="text-secondary mb-2">
                  Methodist Engineering College
                </h4>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-textSecondary/20 pb-2">
                Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData?.map((category, index) => {
                  return (
                    <div key={index}>
                      <h3 className="font-medium mb-2 text-textPrimary">
                        {category.category}
                      </h3>
                      <p className="text-textSecondary">
                        {category.skills.join(", ")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4 border-b border-textSecondary/20 pb-2">
                Projects
              </h2>

              <div className="space-y-4">
                {featuredProjects.map((project) => {
                  const { title, description, technologies } = project;

                  return (
                    <div key={project.id}>
                      <h3 className="text-lg font-medium text-textPrimary">
                        {title}
                      </h3>
                      <p className="text-textSecondary mb-1">{description}</p>
                      <p className="text-secondary text-sm">
                        Technologies: {technologies}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;

// <p className="text-textSecondary">
// Relevant coursework: Data Structures & Algorithms, Web
// Development, User Interface Design, Database Systems, Software
// Engineering, Introduction to Machine Learning, Computer Vision
// </p>
