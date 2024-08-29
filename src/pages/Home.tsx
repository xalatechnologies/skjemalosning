import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLogin } from '../services/authService';
import { setSession } from '../services/sessionService';
import '../styles/Home.scss';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await mockLogin(username, password);
      setSession(response.username, response.role);
      
      switch (response.role) {
        case 'Admin':
          navigate('/admin/dashboard');
          break;
        case 'FormCreator':
          navigate('/creator/dashboard');
          break;
        case 'User':
          navigate('/user/dashboard');
          break;
        default:
          navigate('/');
          break;
      }
    } catch (err) {
      setError(err as string);
    }
  };

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__branding">
          <h1>Velkommen til Skjemaløsning</h1>
          <p>Logg inn for å fortsette</p>
        </div>
      </header>

      <div className="home__login">
        <form onSubmit={handleLogin} className="home__login-form">
          <h2>Login</h2>
          {error && <p className="home__error">{error}</p>}
          <div className="home__field">
            <label htmlFor="username">Brukernavn</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="home__field">
            <label htmlFor="password">Passord</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="home__submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
