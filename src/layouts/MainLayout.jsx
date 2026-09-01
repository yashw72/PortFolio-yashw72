import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

// MainLayout wraps every page.
// Outlet renders whatever page the current route points to.
export default function MainLayout() {
  return (
    <>
      {/* Fixed navbar at the top */}
      <Navbar />

      {/* Main content area — padded so it's not hidden behind navbar */}
      <main className="page-wrapper">
        <Outlet />
      </main>
    </>
  );
}
