"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Work", href: "#work" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          Portfolio.
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Nav */}
        <nav className={`mobile-nav ${isOpen ? "active" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.title} onClick={toggleMenu}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background 0.3s ease, padding 0.3s ease;
          padding: 1.5rem 0;
          background: transparent;
        }

        .header.scrolled {
          background: var(--primary-dark);
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-outfit);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cream-text);
        }

        .desktop-nav ul {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .desktop-nav a {
          color: var(--cream-text);
          font-family: var(--font-outfit);
          font-weight: 400;
          position: relative;
        }

        .desktop-nav a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--secondary-blue);
          transition: width 0.3s;
        }

        .desktop-nav a:hover::after {
          width: 100%;
        }

        .mobile-icon {
          display: none;
          color: var(--cream-text);
          font-size: 1.5rem;
          cursor: pointer;
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--primary-dark);
          padding: 2rem;
          transform: translateY(-150%);
          transition: transform 0.3s ease;
          z-index: 999;
          text-align: center;
        }

        .mobile-nav.active {
          transform: translateY(0);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .mobile-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav a {
          color: var(--cream-text);
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-icon {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
