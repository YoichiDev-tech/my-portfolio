import React, { FC } from 'react';

const LearnMore: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">How I build</h1>
          <p className="section-subtitle">
            A fullstack approach focused on clarity, reliability, and practical delivery.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Philosophy</h2>
          <p className="card-body">
            I care about building systems that make sense — clean interfaces, predictable backend
            logic, and data structures that won't collapse under real usage. My goal is to ship
            something useful, readable, and easy to extend. Every decision is made with long-term
            maintainability in mind: fewer hacks, more structure, and a product that feels intentional
            from top to bottom.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Design system</h2>
          <p className="card-body">
            This site uses a neon-dark aesthetic: deep backgrounds, crisp neon accents, and
            glassmorphism cards. The same principles apply to client work — consistent spacing,
            clear hierarchy, and typography that stays readable under pressure. The design system
            extends beyond visuals into component structure, state management, and API behavior.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Workflow</h2>
          <p className="card-body">
            I work in small, well-defined steps across both frontend and backend. We agree on
            milestones, I ship updates, and you review them in a real environment. You see working
            features early — UI components, database logic, authentication flows, and API endpoints.
            No surprise rewrites, no hidden complexity. Just honest progress and a fullstack build
            that feels solid.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;