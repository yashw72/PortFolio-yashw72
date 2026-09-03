// components/CodeLab.jsx
// Interactive IDE-inspired coding workstation representing DSA, LeetCode, GitHub, and continuous craftsmanship.

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL, CODE_LAB } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import MagneticButton from './MagneticButton';

export default function CodeLab() {
  const [activeTab, setActiveTab] = useState('algorithm.ts');
  const [executing, setExecuting] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState(
    '[READY] Engine initialized. Click "RUN DIAGNOSTIC" to execute algorithmic telemetry.'
  );

  const handleRunCode = () => {
    setExecuting(true);
    setConsoleOutput('>> Compiling algorithmic AST...');

    setTimeout(() => {
      setConsoleOutput(
        '>> [PASS] Time Complexity: O(n log n)\n>> [PASS] Space Complexity: O(1)\n>> [PASS] All test suites green: Trees, Graphs, DP, Sliding Window.\n>> [STATUS] 0 Errors, 0 Warnings // Codebase optimized.'
      );
      setExecuting(false);
    }, 700);
  };

  return (
    <section id="code-lab" className="code-lab-section">
      <AnimatedCodeBackground variant="codelab" interactive={true} />

      <div className="container">
        {/* Section Header */}
        <div className="section-narrative-header">
          <span className="section-index-tag">07 // WORKSPACE</span>
          <h2 className="section-main-title">CODE LAB</h2>
          <p className="section-main-desc">
            Algorithmic agility, continuous refactoring, and code discipline. Live interactive developer workstation.
          </p>
        </div>

        {/* Interactive Code Editor Environment */}
        <div className="code-lab-ide-card">
          {/* IDE Titlebar */}
          <div className="ide-titlebar">
            <div className="ide-traffic-lights">
              <span className="light close" />
              <span className="light minimize" />
              <span className="light expand" />
            </div>

            <div className="ide-open-tabs">
              <button
                type="button"
                className={`ide-tab ${activeTab === 'algorithm.ts' ? 'active' : ''}`}
                onClick={() => setActiveTab('algorithm.ts')}
              >
                <span className="tab-icon">TS</span>
                <span className="tab-name">DeveloperEngine.ts</span>
              </button>
            </div>

            <div className="ide-actions-right">
              <button
                type="button"
                className={`ide-run-button ${executing ? 'running' : ''}`}
                onClick={handleRunCode}
                disabled={executing}
              >
                {executing ? 'EXECUTING...' : '▶ RUN DIAGNOSTIC'}
              </button>
            </div>
          </div>

          {/* IDE Editor Body */}
          <div className="ide-editor-layout">
            {/* Line Numbers */}
            <div className="ide-line-numbers" aria-hidden="true">
              {Array.from({ length: 18 }, (_, i) => (
                <span key={i + 1}>{i + 1}</span>
              ))}
            </div>

            {/* Code Content */}
            <div className="ide-code-viewport">
              <pre className="ide-code-pre">
                <code>{CODE_LAB.editorSnippet}</code>
              </pre>
            </div>
          </div>

          {/* IDE Console / Terminal Drawer */}
          <div className="ide-terminal-drawer">
            <div className="terminal-header">
              <span className="term-label">TERMINAL // OUTPUT CONSOLE</span>
              <span className="term-node">NODE v20.11.0</span>
            </div>
            <div className="terminal-body">
              <pre className="terminal-log-output">{consoleOutput}</pre>
            </div>
          </div>
        </div>

        {/* Profile Link CTAs & Metrics */}
        <div className="code-lab-meta-row">
          <div className="code-lab-stats-group">
            {CODE_LAB.stats.map((s) => (
              <div key={s.label} className="code-stat-chip">
                <span className="stat-chip-label">{s.label}</span>
                <span className="stat-chip-val">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="code-lab-actions-group">
            <MagneticButton
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              strength={0.3}
            >
              <span>VIEW GITHUB REPOSITORIES</span>
              <span>⌥</span>
            </MagneticButton>

            <MagneticButton
              href={PERSONAL.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              strength={0.3}
            >
              <span>EXPLORE LEETCODE STATS</span>
              <span>{'{ }'}</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
