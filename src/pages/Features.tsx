import React, { FC } from 'react';

const Features: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">Core features</h1>
          <p className="section-subtitle">
            What you can expect when we work together on a fullstack product.
          </p>
        </div>

        <div className="card-grid">
          <div className="glass-card feature-card">
            <h3 className="card-title">Fullstack architecture</h3>
            <p className="card-body">
              Clean, predictable systems built with React, TypeScript, Supabase, and modern tooling.
              Frontend, backend, database, and deployment all working together smoothly.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">API & database design</h3>
            <p className="card-body">
              Structured data models, secure authentication flows, and clear API endpoints that
              support real-world usage without becoming fragile or confusing.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Production-ready code</h3>
            <p className="card-body">
              Maintainable, commented code with predictable behavior, clean state management,
              and no hidden side effects. Built to scale and easy for future teams to extend.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Fast iteration cycles</h3>
            <p className="card-body">
              Short feedback loops across both frontend and backend. You see working features early,
              adjust quickly, and keep momentum without over-planning.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Neon-dark design system</h3>
            <p className="card-body">
              A consistent visual language built around deep backgrounds, neon accents, and
              glassmorphism components — applied with clarity and purpose.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Responsive, mobile-first layouts</h3>
            <p className="card-body">
              Interfaces that feel natural on phones, tablets, and desktops. One codebase,
              consistent behavior, and smooth interactions across devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;