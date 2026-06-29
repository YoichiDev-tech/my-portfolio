import React, { FC } from 'react';

const WorkWithMe: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">Collaboration</h1>
          <p className="section-subtitle">
            Direct, honest, and built around shipping real work.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">How we work together</h2>
          <p className="card-body">
            You get one point of contact: me. We keep communication tight and practical — short
            calls, clear messages, and shared documents that stay up to date. I&apos;m not here to
            sell you a process; I&apos;m here to build your product.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Feedback and iteration</h2>
          <p className="card-body">
            Feedback is built into the process. You see work in progress, not just final drops.
            We adjust based on what you learn, and we keep the scope grounded so the project
            doesn&apos;t drift.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="card-title">Ownership</h2>
          <p className="card-body">
            You own the code, the assets, and the decisions. I&apos;ll advise, but I won&apos;t
            lock you into a stack that only I can maintain. The goal is a front-end your team can
            live with.
          </p>
        </div>

        {/* Agreement & Project Start */}
        <div className="glass-card">
          <h2 className="card-title">Agreement & Project Start</h2>
          <p className="card-body">
            Before any work begins, we review and sign a short agreement outlining scope,
            responsibilities, timelines, and a 35% upfront deposit. This protects both sides,
            ensures clarity from day one, and confirms commitment to the project. Once the
            agreement is signed and the deposit is received, the project officially starts.
          </p>
        </div>
        

      </section>
    </div>
  );
};

export default WorkWithMe;