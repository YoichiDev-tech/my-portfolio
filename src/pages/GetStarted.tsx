import React, { FC } from 'react';

const GetStarted: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">Getting started</h1>
          <p className="section-subtitle">
            Simple steps, clear expectations, and a fast path to a working product.
          </p>
        </div>

        <div className="card-grid">
          <div className="glass-card">
            <h3 className="card-title">1. Share context</h3>
            <p className="card-body">
              You send a short brief: what you&apos;re building, who it&apos;s for, and what you
              need from the front-end. Links, sketches, and rough notes are all welcome.
            </p>
          </div>

          <div className="glass-card">
            <h3 className="card-title">2. Define scope</h3>
            <p className="card-body">
              We agree on a lean, realistic scope. Features, timelines, and constraints are written
              down so everyone knows what &quot;done&quot; looks like.
            </p>
          </div>

          <div className="glass-card">
            <h3 className="card-title">3. Build in focused cycles</h3>
            <p className="card-body">
              Work happens in short, visible cycles. You see progress, give feedback, and we adjust
              without derailing the project.
            </p>
          </div>

          <div className="glass-card">
            <h3 className="card-title">4. Hand-off or ongoing support</h3>
            <p className="card-body">
              Once the front-end is ready, you get clean code, documentation, and optional support
              for integration or future iterations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;