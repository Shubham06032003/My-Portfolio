"use client";

import { useState, useEffect } from "react";
import { Github } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = ["home", "projects", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is in viewport
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-[background-color,padding,border-color] duration-500 border-b ${
        scrolled ? "bg-[#0a0a0f]/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-space font-bold text-white hover:text-cyan-400 transition-colors">
          SP.
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-space transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-cyan-400 font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://github.com/Shubham06032003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-space text-gray-400 hover:text-white transition-colors ml-4 pl-8 border-l border-white/10"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
