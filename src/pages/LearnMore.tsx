import React, { FC } from 'react';

const LearnMore: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">How I build</h1>
          <p className="section-subtitle">
            A solo dev approach with a clear design system and a practical workflow.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Philosophy</h2>
          <p className="card-body">
            I care about clarity, not buzzwords. The goal is to ship something useful, readable,
            and easy to extend. Every decision is made with your future team in mind: fewer hacks,
            more structure, and a UI that feels intentional.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Design system</h2>
          <p className="card-body">
            This site uses a neon-dark aesthetic: deep backgrounds, crisp neon accents, and
            glassmorphism cards. The same principles apply to client work — consistent spacing,
            clear hierarchy, and typography that stays readable under pressure.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Workflow</h2>
          <p className="card-body">
            I work in small, well-defined steps. We agree on milestones, I ship updates, and you
            review them in a real environment. No surprise rewrites, no hidden complexity. Just
            honest progress and a front-end that feels solid.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;