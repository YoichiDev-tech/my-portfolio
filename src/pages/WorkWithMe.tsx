import React, { FC } from 'react';

const WorkWithMe: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">Collaboration</h1>
          <p className="section-subtitle">
            Direct, honest, and centered around building real fullstack products.
          </p>
        </div>

        {/* Spacing wrapper */}
        <div className="card-grid">

          <div className="glass-card">
            <h2 className="card-title">How we work together</h2>
            <p className="card-body">
              You work directly with me — no layers, no hand-offs. Communication stays tight and
              practical: short calls, clear messages, and shared documents that stay up to date.
              The goal is simple: build a working system, not drown in process.
            </p>
          </div>

          <div className="glass-card">
            <h2 className="card-title">Feedback and iteration</h2>
            <p className="card-body">
              You see progress early across both frontend and backend. UI components, API behavior,
              database logic — everything is visible as it's built. We adjust based on what you learn,
              keeping the scope grounded so the project doesn't drift.
            </p>
          </div>

          <div className="glass-card">
            <h2 className="card-title">Ownership</h2>
            <p className="card-body">
              You own the code, the architecture, and the decisions. I'll advise, but I won't lock you
              into a stack that only I can maintain. The goal is a fullstack system your team can live
              with and extend confidently.
            </p>
          </div>

          <div className="glass-card">
            <h2 className="card-title">Agreement & Project Start</h2>
            <p className="card-body">
              Before any work begins, we review and sign a short agreement outlining scope,
              responsibilities, timelines, and a 35% upfront deposit. This protects both sides,
              ensures clarity from day one, and confirms commitment to the project. Once the agreement
              is signed and the deposit is received, the project officially starts.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WorkWithMe;