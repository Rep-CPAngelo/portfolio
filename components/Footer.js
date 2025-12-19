"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>
          &copy; {new Date().getFullYear()} Angelito Paa. All rights reserved.
        </p>
        <p className="credit">Designed & Built with Next.js</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #152230; /* Darker than primary for footer */
          padding: 2rem 0;
          color: var(--soft-blue);
          font-size: 0.9rem;
          border-top: 1px solid rgba(148, 180, 193, 0.1);
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .credit {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
