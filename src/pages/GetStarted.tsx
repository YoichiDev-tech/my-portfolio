import React, { FC } from 'react';

const GetStarted: FC = () => {
  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">Getting started</h1>
          <p className="section-subtitle">
            A clear, structured process for turning ideas into working fullstack products.
          </p>
        </div>

        <div className="card-grid">
          <div className="glass-card">
            <h3 className="card-title">1. Share context</h3>
            <p className="card-body">
              You provide a brief describing the problem, the users, and the core workflow.
              This includes any existing systems, data requirements, or constraints that
              influence the backend, database, or architecture.
            </p>
          </div>

          <div className="glass-card">
            <h3 className="card-title">2. Define scope</h3>
            <p className="card-body">
              We outline a lean, realistic fullstack scope: data models, API endpoints,
              authentication needs, UI flows, and deployment targets. Everything is written
              down so the project has a clear definition of “done.”
            </p>
          </div>

          <div className="glass-card">
            <h3 className="card-title">3. Build in focused cycles</h3>
            <p className="card-body">
              Development happens in short, visible cycles covering both frontend and backend.
              You see working features early — database logic, API behavior, UI components —
              and provide feedback without slowing down progress.
            </p>
          </div>

          <div className="glass-card">
            <h3 className="card-title">4. Hand-off or ongoing support</h3>
            <p className="card-body">
              Once the product is ready, you receive clean code, documentation, database
              schemas, API references, and deployment instructions. Ongoing support is
              available for future iterations or scaling the system further.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;