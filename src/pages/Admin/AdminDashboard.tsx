import React, {  } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import '../../styles/AdminDashboard.scss';
import { Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Forms from './Forms';
import Settings from './Settings';
import UserManagement from './UserManagement';

const adminMenuItems = [
  { label: 'Oversikt', path: '/admin/dashboard' },
  { label: 'Skjemaer', path: '/admin/forms' },
  { label: 'Brukeradministrasjon', path: '/admin/users' },
  { label: 'Innstillinger', path: '/admin/settings' },
];

const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout menuItems={adminMenuItems}>
      <Routes>
        <Route path="dashboard" element={<Overview />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="forms" element={<Forms />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Overview />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AdminDashboard;