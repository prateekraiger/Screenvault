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
        <Logo size={40} textSize="text-2xl sm:text-3xl md:text-4xl" />

        <div className="flex flex-col items-center gap-1">
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
        </div>

        <span className="text-center text-xs sm:text-sm font-light md:text-right">
          Made by{" "}
          <a
            href="https://pratik-me.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-cyan-400 hover:text-blue-400 transition-colors underline"
          >
            Pratik
          </a>
        </span>
      </div>
      <hr className="border-t border-cyan-900/40 my-4" />
      <div className="w-full flex justify-center items-center pb-2">
        <span className="text-xs text-cyan-300 text-center ml-36">
          © 2025 ScreenVault. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
