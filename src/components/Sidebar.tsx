import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.scss';

interface SidebarProps {
  menuItems: Array<{ label: string; path: string }>;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, onLogout }) => {
  return (
    <aside className="w-64 bg-primary text-white flex flex-col h-full">
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-colors duration-200 ${
                    isActive ? 'bg-secondary text-white' : 'text-white hover:bg-secondary hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 bg-secondary">
        <button
          onClick={onLogout}
          className="btn btn--clear-dark"
        >
          Logg ut
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
