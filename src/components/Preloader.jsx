// components/Preloader.jsx
// Minimalist cinematic terminal boot sequence with progress telemetry and instant skip.

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  'INITIALIZING SYSTEM ARCHITECTURE...',
  'MOUNTING RUNTIME KERNEL v2.8.0...',
  'LOADING DEVELOPER PROFILE: YASH.DEV...',
  'RESOLVING BUILD LOGS & TELEMETRY...',
  'SYNCHRONIZING CODE LAB REPOSITORIES...',
  'SYSTEM READY // WORKSPACE ONLINE.',
];

export default function Preloader({ onComplete }) {
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Auto progression
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Accelerate near end
        const delta = prev > 75 ? 6 : prev > 40 ? 4 : 3;
        return Math.min(prev + delta, 100);
      });
    }, 45);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < BOOT_LOGS.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 280);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, []);

  // Exit trigger when progress hits 100%
  useEffect(() => {
    if (progress >= 100 && !isExiting) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete?.();
        }, 600);
      }, 350);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, isExiting, onComplete]);

  // Handle ESC or click to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsExiting(true);
        onComplete?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            filter: 'blur(10px)',
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Background Grid Accent */}
          <div className="preloader-grid-lines" aria-hidden="true" />

          {/* Central Terminal Console */}
          <div className="preloader-terminal">
            {/* Terminal Header */}
            <div className="preloader-header">
              <div className="preloader-dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="preloader-title">YASH_WARUNGASE // BOOT_LOADER_v2.6</div>
              <button
                type="button"
                className="preloader-skip-btn"
                onClick={handleSkip}
                title="Skip boot animation"
              >
                [ESC] SKIP
              </button>
            </div>

            {/* Terminal Body */}
            <div className="preloader-body">
              <div className="preloader-log-stream">
                {BOOT_LOGS.slice(0, logIndex + 1).map((log, i) => (
                  <motion.div
                    key={log}
                    className={`preloader-log-line ${
                      i === logIndex ? 'active-log' : 'past-log'
                    }`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="log-prefix">&gt;&gt;</span>
                    <span className="log-text">{log}</span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar & Telemetry */}
              <div className="preloader-progress-area">
                <div className="preloader-meta-row">
                  <span className="meta-text">CORE_ENGINE_INIT</span>
                  <span className="meta-percent">{progress}%</span>
                </div>
                <div className="preloader-bar-track">
                  <motion.div
                    className="preloader-bar-fill"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                  />
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="preloader-footer">
              <span className="footer-coord">PUNE_IN // 18.52° N</span>
              <span className="footer-status">
                STATUS: {progress < 100 ? 'INITIALIZING' : 'ONLINE'}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
