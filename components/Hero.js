"use client";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">
          Hello, I&apos;m <span className="highlight">Angelito</span>.
        </h1>
        <p className="hero-subtitle">
          A creative developer building adjustable, premium web experiences.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          background: radial-gradient(
            circle at top right,
            #2c4257 0%,
            var(--primary-dark) 60%
          );
          padding-top: var(--nav-height);
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-title {
          font-family: var(--font-outfit);
          font-weight: 700;
          color: var(--cream-text);
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .highlight {
          color: var(--secondary-blue);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--soft-blue);
          margin-bottom: 2.5rem;
          max-width: 600px;
          animation: fadeInUp 1s ease-out;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 1.2s ease-out;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid var(--soft-blue);
          color: var(--soft-blue);
        }

        .btn-outline:hover {
          background: rgba(84, 119, 146, 0.1);
          color: var(--cream-text);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
