import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const LandingPage: FC = () => {
  return (
    <div className="page landing-page fade-in">
      <section className="section hero-section">
        <div className="hero-content glass-card">

          {/* UPDATED HERO TITLE */}
          <h1 className="hero-title neon-glow">
            Frontend engineering, built with intent.
          </h1>

          {/* UPDATED SUBTITLE TO MATCH FRONTEND FOCUS */}
          <p className="hero-subtitle">
            I design and build modern, responsive frontends for teams that value clarity,
            speed, and thoughtful execution.
          </p>

          <div className="hero-actions">
            <Link to="/get-started" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/learn-more" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* The rest of the file remains unchanged */}
    </div>
  );
};

export default LandingPage;