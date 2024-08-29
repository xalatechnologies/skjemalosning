import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import Forms from './Forms';
import Overview from './Overview';
import Settings from './Settings';

const menuItems = [
  { label: 'Oversikt', path: '/creator/dashboard' },
  { label: 'Skjemaer', path: '/creator/forms' },
  { label: 'Innstillinger', path: '/creator/settings' },
];

const CreatorDashboard: React.FC = () => {
  return (
    <DashboardLayout menuItems={menuItems}>
      <Routes>
        <Route path="dashboard" element={<Overview />} />
        <Route path="forms" element={<Forms />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Overview />} />
      </Routes>
    </DashboardLayout>
  );
};

export default CreatorDashboard;
