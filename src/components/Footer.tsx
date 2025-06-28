import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pratik-r1104/",
    icon: <FaLinkedinIn />,
  },
  { href: "https://github.com/prateekraiger", icon: <FaGithub /> },
  { href: "https://x.com/mrpratik753", icon: <FaTwitterSquare /> },
  { href: "https://instagram.com/pratik.raiger", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#23272F] py-4 sm:py-6 text-cyan-100/80">
      <div className="w-full flex flex-col items-center justify-between gap-4 px-0 sm:flex-row">
        <p className="text-center text-xs sm:text-sm font-light md:text-left transition-colors duration-500 ease-in-out hover:text-cyan-400">
          © {new Date().getFullYear()} ScreenVault. All rights reserved
        </p>

        <div className="flex justify-center gap-2 sm:gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-100/80 hover:text-cyan-400 transition-colors duration-500 ease-in-out text-base sm:text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <Link
          to="/privacy"
          className="text-center text-xs sm:text-sm font-light hover:underline md:text-right hover:text-cyan-400 transition-colors duration-500 ease-in-out"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
