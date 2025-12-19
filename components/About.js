"use client";
import React from "react";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            I’m a passionate developer focused on building secure, scalable
            backend systems and responsive mobile applications. I enjoy creating
            flexible solutions that evolve with real-world needs and deliver
            long-lasting value.
          </p>
          <p>
            When I’m not coding, you’ll usually find me outside on a ride,
            touching grass, enjoying the ocean breeze, or diving into the latest
            tech trends.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            {/* <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div> */}
          </div>
        </div>
        <div className="about-image">
          {/* Placeholder for About Image */}
          <div className="image-placeholder"></div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: #1e2f41; /* Slightly lighter/different shade for contrast */
        }

        .section-title {
          font-family: var(--font-outfit);
          color: var(--cream-text);
          margin-bottom: 1.5rem;
          border-left: 5px solid var(--secondary-blue);
          padding-left: 1rem;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        p {
          color: #ccc;
          margin-bottom: 1.5rem;
        }

        .stats {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary-blue);
          font-family: var(--font-outfit);
        }

        .stat-label {
          color: var(--soft-blue);
          font-size: 0.9rem;
          text-transform: uppercase;
        }

        .about-image {
          position: relative;
        }

        .image-placeholder {
          width: 100%;
          aspect-ratio: 1/1;
          background: linear-gradient(
            135deg,
            var(--secondary-blue),
            var(--primary-dark)
          );
          border-radius: var(--border-radius);
          position: relative;
        }

        .image-placeholder::before {
          content: "";
          position: absolute;
          top: 20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--soft-blue);
          border-radius: var(--border-radius);
          z-index: 0;
        }

        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .image-placeholder::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
