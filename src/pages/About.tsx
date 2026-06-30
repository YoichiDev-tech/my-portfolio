import React, { FC } from 'react';

const About: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">About</h1>
          <p className="section-subtitle">
            Solo fullstack developer focused on practical, real-world delivery.
          </p>
        </div>

        {/* Spacing wrapper */}
        <div className="card-grid">

          <div className="glass-card">
            <h2 className="card-title">Who I am</h2>
            <p className="card-body">
              I'm an indie fullstack developer who cares about the details — how a system behaves,
              how data flows, how a UI responds, and how a codebase reads six months later. I've
              worked across prototypes, MVPs, internal tools, and public-facing products, always
              with a bias toward clarity, reliability, and momentum.
            </p>
          </div>

          <div className="glass-card">
            <h2 className="card-title">What I do</h2>
            <p className="card-body">
              I design and build complete web applications using React, TypeScript, Supabase,
              Postgres, authentication flows, backend logic, and modern tooling like Vite. I'm
              comfortable working from rough ideas or detailed specs, and I'm happiest when we're
              shipping something users can actually interact with — not just a UI, but a working
              system.
            </p>
          </div>

          <div className="glass-card">
            <h2 className="card-title">How I work</h2>
            <p className="card-body">
              I keep things straightforward: clear scopes, honest timelines, and code that doesn't
              hide surprises. I handle both frontend and backend, ensuring the entire system works
              together smoothly. If you're looking for a solo developer who can own the fullstack
              build and collaborate closely with your team, that's where I fit.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;