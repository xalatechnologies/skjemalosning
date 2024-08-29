import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/DashboardLayout.scss';
import { useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
  menuItems: Array<{ label: string; path: string }>;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ menuItems, children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data (e.g., remove token, clear localStorage)
    localStorage.removeItem('user'); // or sessionStorage.removeItem('user')

    // Redirect to login page
    navigate('/');
  };
  
  return (
    <div className="flex h-screen font-sans text-textPrimary">
      <Sidebar menuItems={menuItems} onLogout={handleLogout} />
      <div className="flex-1 p-6 bg-accent overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;