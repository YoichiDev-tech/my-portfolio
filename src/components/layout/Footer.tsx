import React, { FC } from 'react';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* UPDATED BRAND NAME */}
        <p className="footer-text">
          © {year} Yoichi-HQ — Frontend-focused indie development.
        </p>

        <p className="footer-subtext">
          Built with React, TypeScript, Vite, and a neon-dark aesthetic.
        </p>
      </div>
    </footer>
  );
};

export default Footer;