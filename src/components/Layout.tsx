import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ComingSoonOverlay from './ComingSoonOverlay';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16 relative">
        {children}
        {!isHomePage && <ComingSoonOverlay />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;