// App.jsx — Single-page layout (no routing needed)
// All sections are anchor-scrollable on the same page
import './index.css';

import Navbar         from './components/Navbar';
import HeroSection    from './components/HeroSection';
import MarqueeBanner  from './components/MarqueeBanner';
import AboutSection   from './components/AboutSection';
import SkillsSection  from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import Footer         from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
