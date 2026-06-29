import React, { FC } from 'react';

const About: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">About</h1>
          <p className="section-subtitle">
            Solo developer, focused on front-end craft and practical delivery.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Who I am</h2>
          <p className="card-body">
            I&apos;m an indie developer who cares about the details: how a button feels, how a
            layout responds, and how a codebase reads six months later. I&apos;ve worked across
            prototypes, internal tools, and public-facing products, always with a bias toward
            clarity and momentum.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">What I do</h2>
          <p className="card-body">
            I design and build front-ends using React, React Router, and modern tooling like Vite.
            I&apos;m comfortable working from rough ideas or detailed specs, and I&apos;m happiest
            when we&apos;re shipping something that users can actually touch.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">How I work</h2>
          <p className="card-body">
            I keep things straightforward: clear scopes, honest timelines, and code that doesn&apos;t
            hide surprises. If you&apos;re looking for a solo dev who can own the front-end and
            collaborate closely with your team, that&apos;s where I fit.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;