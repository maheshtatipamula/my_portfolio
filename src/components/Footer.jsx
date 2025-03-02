import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-textSecondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-textSecondary text-sm">
              Designed & Built by <span className="text-secondary">Mahesh</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex space-x-6">
              <a
                href="https://github.com/maheshtatipamula"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mahesh-thatipamula-87900922a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:mahesh.tatipamula43.email@example.com"
                className="social-icon"
              >
                <FiMail />
              </a>
            </div>

            <div className="flex space-x-4 text-sm text-textSecondary">
              <a
                href="/Mahesh_Thatipamula_AI_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <a
// href="https://twitter.com/yourusername"
// target="_blank"
// rel="noopener noreferrer"
// className="social-icon"
// >
// <FiTwitter />
// </a>

// <Link
// to="/resume"
// className="hover:text-secondary transition-colors"
// >

// </Link>
