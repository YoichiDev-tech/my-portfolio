import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const LandingPage: FC = () => {
  return (
    <div className="page landing-page fade-in">
      <section className="section hero-section">
        <div className="hero-content glass-card">

          {/* HERO TITLE */}
          <h1 className="hero-title neon-glow">
            Fullstack Developer building real-world web applications.
          </h1>

          {/* FULLSTACK-FOCUSED SUBTITLE */}
          <p className="hero-subtitle">
            I design and develop complete web systems — from clean, responsive interfaces
            to robust backend logic, databases, authentication, and deployment pipelines.
            My work focuses on clarity, reliability, and delivering production-ready results.
          </p>

          {/* UPDATED CTA BUTTONS */}
          <div className="hero-actions">
            <Link to="/get-started" className="btn btn-primary">
              Start a Fullstack Project
            </Link>
            <Link to="/learn-more" className="btn btn-secondary">
              How I Build Fullstack Systems
            </Link>
          </div>
        </div>
      </section>

      {/* The rest of the file remains unchanged */}
    </div>
  );
};

export default LandingPage;