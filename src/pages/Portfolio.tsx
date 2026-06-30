import React, { FC, useState } from 'react';

const Portfolio: FC = () => {
  const [showPrototypes, setShowPrototypes] = useState(false);
  const [showMVPs, setShowMVPs] = useState(false);
  const [showLaunched, setShowLaunched] = useState(false);

  return (
    <div className="page fade-in">
      <section className="section">

        <div className="section-header">
          <h1 className="section-title neon-glow">Portfolio</h1>
          <p className="section-subtitle">
            A collection of prototypes, MVPs, and launched fullstack products built as a solo developer.
          </p>
        </div>

        {/* Prototypes section */}
        <div className="glass-card portfolio-section">
          <div className="portfolio-header">
            <h2 className="card-title">Prototypes</h2>
            <p className="card-body">
              Early-stage UI experiments and proof-of-concept builds used to validate ideas quickly.
            </p>

            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setShowPrototypes(!showPrototypes)}
            >
              {showPrototypes ? 'Hide prototype work' : 'View prototype work'}
            </button>
          </div>

          {showPrototypes && (
            <div className="portfolio-grid">

              {/* WOF Form — Prototype */}
              <div className="glass-card">
                <h2 className="card-title">WOF Form — Prototype</h2>
                <p className="card-body">
                  A lightweight prototype built to validate a structured waste-submission flow.
                  Focused on clarity, speed, and early interaction testing before moving into a
                  full product build.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href="https://wof-form-eta.vercel.app/"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live prototype →
                  </a>

                  <a
                    href="https://github.com/YoichiDev-tech/WOF-Form"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code on GitHub →
                  </a>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* MVPs section */}
        <div className="glass-card portfolio-section">
          <div className="portfolio-header">
            <h2 className="card-title">MVPs</h2>
            <p className="card-body">
              Fullstack minimum viable products built to validate real business ideas with live data,
              authentication, and production-ready workflows.
            </p>

            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setShowMVPs(!showMVPs)}
            >
              {showMVPs ? 'Hide MVP work' : 'View MVP work'}
            </button>
          </div>

          {showMVPs && (
            <div className="portfolio-grid">

              {/* Clientella — No-Show Prevention MVP */}
              <div className="glass-card">
                <h2 className="card-title">Clientella — No-Show Prevention MVP</h2>
                <p className="card-body">
                  A fullstack MVP designed to help appointment-based businesses reduce no-shows
                  using confirmation tracking, risk scoring, automated cancellations, and
                  recovered time analytics.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href="https://clientella-waitlist.vercel.app/"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live MVP →
                  </a>

                  <a
                    href="https://github.com/YoichiDev-tech/clientella-waitlist"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code on GitHub →
                  </a>
                </div>
              </div>

              <div className="glass-card">
                <h2 className="card-title">Daily Agenda & micro-CRM — MVP</h2>
                <p className="card-body">
                  An offline-first agenda and micro-CRM designed for solo operators.
                  Includes daily appointments, tasks, client management, mobile-optimized UI,
                  sticky navigation, footer spacing, and persistent local storage.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href="https://daily-agenda-offline.vercel.app/"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live MVP →
                  </a>

                  <a
                    href="https://github.com/YoichiDev-tech/Daily-Agenda-Offline"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code on GitHub →
                  </a>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Launched Projects section */}
        <div className="glass-card portfolio-section">
          <div className="portfolio-header">
            <h2 className="card-title">Shipped projects</h2>
            <p className="card-body">
              Production deployments, live products, and long-term builds that are out in the
              world.
            </p>

            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setShowLaunched(!showLaunched)}
            >
              {showLaunched ? 'Hide launched work' : 'View launched work'}
            </button>
          </div>

          {showLaunched && (
            <div className="portfolio-grid">

              {/* Cafe — Launched Project */}
              <div className="glass-card">
                <h2 className="card-title">Cafe — Launched Project</h2>
                <p className="card-body">
                  A fully deployed cafe website showcasing menu, atmosphere, and brand identity.
                  Built as a clean, responsive, and fast front-end experience ready for real users.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href="https://cafe-seven-ruddy.vercel.app/"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site →
                  </a>

                  <a
                    href="https://github.com/yoichi-devjs/Cafe-"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code on GitHub →
                  </a>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;