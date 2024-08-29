import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreatorDashboard from './pages/FormCreator/CreatorDashboard';
import UserDashboard from './pages/User/UserDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<PrivateRoute element={<AdminDashboard />} allowedRoles={['Admin']} />} />
        <Route path="/creator/*" element={<PrivateRoute element={<CreatorDashboard />} allowedRoles={['FormCreator']} />} />
        <Route path="/user/*" element={<PrivateRoute element={<UserDashboard />} allowedRoles={['User']} />} />
      </Routes>
    </Router>
  );
};

export default App;