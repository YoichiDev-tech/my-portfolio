import React, { FC } from 'react';

const Features: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">Core features</h1>
          <p className="section-subtitle">
            What you can expect when we work together on your product.
          </p>
        </div>

        <div className="card-grid">
          <div className="glass-card feature-card">
            <h3 className="card-title">Neon-dark front-end design</h3>
            <p className="card-body">
              Modern, high-contrast interfaces with smooth animations and a consistent design
              language tailored to your brand.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">React + React Router architecture</h3>
            <p className="card-body">
              Clean routing, reusable components, and a structure that scales without turning into
              a maze.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Production-ready code</h3>
            <p className="card-body">
              Commented, maintainable code with no dead imports, no hidden side effects, and a
              layout that behaves across devices.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Fast iteration cycles</h3>
            <p className="card-body">
              Short feedback loops, quick adjustments, and a focus on shipping instead of
              over-planning.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Glassmorphism components</h3>
            <p className="card-body">
              Soft, layered cards that keep content readable while still feeling modern and
              polished.
            </p>
          </div>

          <div className="glass-card feature-card">
            <h3 className="card-title">Responsive, mobile-first layouts</h3>
            <p className="card-body">
              Interfaces that feel natural on phones, tablets, and desktops — without separate
              codebases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;