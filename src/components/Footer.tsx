import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

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
    <footer className="w-full bg-[#23272F] py-4 sm:py-6 text-cyan-100/80 px-[20px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8">
        <Logo size={28} textSize="text-lg" />

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
      <hr className="border-t border-cyan-900/40 my-4" />
      <div className="flex justify-center pb-2">
        <span className="text-xs text-cyan-300">
          © 2025 ScreenVault. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
