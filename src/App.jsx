import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import Home       from './pages/Home';
import About      from './pages/About';
import Skills     from './pages/Skills';
import Experience from './pages/Experience';
import Projects   from './pages/Projects';
import Education  from './pages/Education';
import Contact    from './pages/Contact';

/*
  App.jsx is the root of the application.
  BrowserRouter  → enables URL-based routing
  Routes         → container that holds all Route definitions
  Route          → maps a URL path to a component

  The "element={<MainLayout />}" trick wraps every nested route
  with the same Navbar + page-wrapper — that's the layout pattern.
*/
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes share the MainLayout (Navbar + page-wrapper) */}
        <Route element={<MainLayout />}>
          <Route path="/"           element={<Home />}       />
          <Route path="/about"      element={<About />}      />
          <Route path="/skills"     element={<Skills />}     />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects"   element={<Projects />}   />
          <Route path="/education"  element={<Education />}  />
          <Route path="/contact"    element={<Contact />}    />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
