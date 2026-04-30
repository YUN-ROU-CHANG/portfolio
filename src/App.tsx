import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/oblivilight" element={<Oblivilight />} />
          <Route path="/projects/good-luck-peanut" element={<GoodLuckPeanut />} />
          <Route path="/projects/innoconnect" element={<Innoconnect />} />
          <Route path="/projects/times-awards" element={<TimesAwards />} />
          <Route path="/projects/sleep-guardian" element={<SleepGuardian />} />
          <Route path="/projects/mu" element={<Mu />} />
          <Route path="/projects/hci-publications" element={<HCIPublications />} />
          <Route path="/projects/adnex-internship" element={<AdnexInternship />} />
          <Route path="/projects/big-data-cup" element={<BigDataMarketingCup />} />
          <Route path="/projects/project-archive" element={<ProjectArchive />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/how-i-built-this" element={<HowIBuiltThis />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// Import pages directly to avoid Suspense errors
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import GoodLuckPeanut from './pages/project/GoodLuckPeanut';
import Oblivilight from './pages/project/Oblivilight';
import Innoconnect from './pages/project/Innoconnect';
import TimesAwards from './pages/project/TimesAwards';
import SleepGuardian from './pages/project/SleepGuardian';
import Mu from './pages/project/Mu';
import HCIPublications from './pages/project/HCIPublications';
import AdnexInternship from './pages/project/AdnexInternship';
import BigDataMarketingCup from './pages/project/BigDataMarketingCup';
import ProjectArchive from './pages/project/ProjectArchive';
import Photography from './pages/Photography';
import HowIBuiltThis from './pages/HowIBuiltThis';

export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}