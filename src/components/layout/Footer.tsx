import React, { FC } from 'react';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} Yoichi-HQ — Fullstack indie development.
        </p>

        <p className="footer-subtext">
          Built with React, TypeScript, Supabase, Vite, and a neon-dark aesthetic.
        </p>
      </div>
    </footer>
  );
};

export default Footer;