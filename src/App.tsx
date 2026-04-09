import { HashRouter, Routes, Route, Navigate } from 'react-router';

// Import pages directly to avoid Suspense errors
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import GoodLuckPeanut from './pages/project/GoodLuckPeanut';
import Oblivilight from './pages/project/Oblivilight';
import Innoconnect from './pages/project/Innoconnect';
import TimesAwards from './pages/project/TimesAwards';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/oblivilight" element={<Oblivilight />} />
        <Route path="/projects/good-luck-peanut" element={<GoodLuckPeanut />} />
        <Route path="/projects/innoconnect" element={<Innoconnect />} />
        <Route path="/projects/times-awards" element={<TimesAwards />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}