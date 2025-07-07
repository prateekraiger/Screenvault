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
    <footer className="w-full bg-gradient-to-t from-slate-950 to-slate-900 border-t border-emerald-500/20 py-8 sm:py-12 text-slate-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <Logo size={50} textSize="text-3xl sm:text-4xl" />
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-semibold text-emerald-300 mb-2">Follow Me</h3>
            <div className="flex justify-center gap-4 sm:gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-slate-800/50 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Creator Info Section */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="mb-3">
              <p className="text-sm text-slate-400 mb-2">Created with ❤️ by</p>
              <a
                href="https://pratik-me.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-lg text-emerald-300 hover:text-cyan-300 transition-colors duration-300 hover:underline decoration-emerald-400"
              >
                Pratik Raiger
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center">
          <div className="text-xs sm:text-sm text-slate-400 text-center">
            © 2025 ScreenVault. All rights reserved.
          </div>
        </div>

        {/* Extra decoration */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>🎬</span>
            <span>Your Personal Entertainment Vault</span>
            <span>🍿</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
