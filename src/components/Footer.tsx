import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPlayCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#23272F]/80 backdrop-blur-md border-t border-cyan-900/40 mt-12">
      <div className="w-full px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-center md:text-left justify-center md:justify-start w-full md:w-auto">
          <FaPlayCircle className="w-6 h-6 text-cyan-400 drop-shadow" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent select-none">
            ScreenVault
          </span>
        </div>

        <div className="flex items-center gap-6 justify-center w-full md:w-auto">
          <a
            href="https://github.com/prateekraiger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200/80 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/mrpratik753"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200/80 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-r1104/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200/80 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/pratik.raiger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200/80 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center md:text-right w-full md:w-auto">
          <Link
            to="/privacy"
            className="text-sm text-cyan-200/80 hover:text-cyan-400 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
