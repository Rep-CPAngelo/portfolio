"use client";
import React from "react";
import { FaPaperPlane, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            I&apos;m currently available for freelance work or full-time
            opportunities. If you have a project that needs some creative touch,
            let&apos;s chat.
          </p>
          <a href="mailto:hello@example.com" className="btn btn-primary">
            <FaPaperPlane className="icon" /> Say Hello
          </a>

          <div className="social-links">
            <a href="#" aria-label="Github">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/angelito-paa-998501221/"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--primary-dark);
          text-align: center;
          padding: 8rem 0;
        }

        .section-title {
          font-family: var(--font-outfit);
          color: var(--cream-text);
          margin-bottom: 1.5rem;
        }

        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }

        p {
          color: var(--soft-blue);
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--secondary-blue);
          color: var(--cream-text);
          border: none;
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .btn-primary:hover {
          background: var(--soft-blue);
          color: var(--primary-dark);
        }

        .social-links {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .social-links a {
          color: var(--cream-text);
          font-size: 1.5rem;
          transition: transform 0.3s, color 0.3s;
        }

        .social-links a:hover {
          color: var(--secondary-blue);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
