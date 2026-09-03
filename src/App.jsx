// App.jsx — Yash.dev Digital Developer Universe
// Complete story-driven architectural workspace assembling Preloader, CustomCursor, and all 9 experience sections.

import { useState, useEffect } from 'react';
import './index.css';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroExperience from './components/HeroExperience';
import DigitalIdentity from './components/DigitalIdentity';
import TechArsenal from './components/TechArsenal';
import BuildLogs from './components/BuildLogs';
import JourneyTimeline from './components/JourneyTimeline';
import CodeLab from './components/CodeLab';
import ContactExperience from './components/ContactExperience';
import FooterExperience from './components/FooterExperience';

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  // Prevent scroll during boot sequence
  useEffect(() => {
    if (!bootComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [bootComplete]);

  return (
    <div className="developer-universe-root">
      {/* 01. INTRO / PRELOADER */}
      {!bootComplete && (
        <Preloader onComplete={() => setBootComplete(true)} />
      )}

      {/* Modern Desktop Custom Cursor */}
      <CustomCursor />

      {/* Fixed Sticky Technical Command Bar */}
      <Navbar />

      {/* Main Story-Driven Developer Workspace */}
      <main className="workspace-main-flow">
        {/* 02. HERO EXPERIENCE */}
        <HeroExperience />

        {/* 03. DIGITAL IDENTITY / WHO IS YASH? */}
        <DigitalIdentity />

        {/* 04. TECH ARSENAL */}
        <TechArsenal />

        {/* 05. BUILD LOGS */}
        <BuildLogs />

        {/* 06. JOURNEY TIMELINE */}
        <JourneyTimeline />

        {/* 07. CODE LAB / DSA WORKSPACE */}
        <CodeLab />

        {/* 08. CONTACT EXPERIENCE */}
        <ContactExperience />
      </main>

      {/* 09. INTERACTIVE FOOTER */}
      <FooterExperience />
    </div>
  );
}
