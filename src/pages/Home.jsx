import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

const Home = () => {
  const startMonth = 3;
  const startYear = 2024;

  const calculateExperience = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    if (months < 0) {
      years--;
      months += 12;
    }

    return years > 0
      ? `${years} year${years > 1 ? "s" : ""} ${
          months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""
        }`
      : `${months} month${months > 1 ? "s" : ""}`;
  };

  const experienceDuration = calculateExperience();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-secondary font-mono mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Mahesh</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-textSecondary mb-6">
              I build things for the web.
            </h2>
            <p className="text-textSecondary text-lg max-w-xl mb-8">
              I'm a frontend engineer with {experienceDuration} of experience
              specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered
              products while exploring AI/ML and data science.
            </p>
            <Link to="/projects" className="btn inline-flex items-center">
              View My Work <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading number="01" title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn inline-flex items-center">
              View All Projects <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-primary/30">
        <div className="container mx-auto px-6">
          <SectionHeading number="02" title="About Me" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-textSecondary mb-4">
                Hello! I'm a passionate frontend engineer with a{" "}
                {experienceDuration} of professional experience. My journey in
                web development started with a curiosity about how websites
                work, which quickly evolved into a deep passion for creating
                intuitive and engaging user experiences.
              </p>
              <p className="text-textSecondary mb-6">
                I specialize in JavaScript and modern frameworks like React. I'm
                also expanding my knowledge in AI/ML, computer vision,
                generative AI, and data science, aspiring to work at the
                intersection of frontend development and artificial
                intelligence.
              </p>
              <Link to="/about" className="btn">
                More About Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/50 p-6 rounded-lg border border-textSecondary/20"
            >
              <h3 className="text-xl font-semibold mb-4">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "Python",
                  "Machine Learning",
                  "Deep Learning",
                  "Computer Vision",
                  "Generative AI",
                  "Data Science",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-secondary mr-2">▹</span>
                    <span className="text-textSecondary text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* Contact CTA */
}
//   <section className="py-32">
//   <div className="container mx-auto px-6 text-center">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <p className="text-secondary font-mono mb-4">03. What's Next?</p>
//       <h2 className="text-4xl md:text-5xl font-bold mb-6">
//         Get In Touch
//       </h2>
//       <p className="text-textSecondary max-w-md mx-auto mb-8">
//         I'm currently looking for new opportunities. Whether you have a
//         question or just want to say hi, I'll do my best to get back to
//         you!
//       </p>
//       <Link to="/contact" className="btn">
//         Say Hello
//       </Link>
//     </motion.div>
//   </div>
// </section>
