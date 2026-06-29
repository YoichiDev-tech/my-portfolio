import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Pages
import LandingPage from '../pages/LandingPage';
import GetStarted from '../pages/GetStarted';
import LearnMore from '../pages/LearnMore';
import Features from '../pages/Features';
import WorkWithMe from '../pages/WorkWithMe';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import About from '../pages/About';

const AppRouter: FC = () => {
  return (
    // App shell: navbar at top, footer at bottom, content in between.
    <div className="app-root">
      <Navbar />
      {/* Main content area with page-enter animation */}
      <main className="app-main page-enter">
        <Routes>
          {/* Home / Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Hero buttons targets */}
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contact" element={<Contact />} />

          {/* Additional pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRouter;