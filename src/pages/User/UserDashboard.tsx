import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    <div className="dashboard user-dashboard">
      <header className="dashboard__header">
        <h1>Bruker Kontrollpanel</h1>
        <button className="dashboard__logout">Logg ut</button>
      </header>
      <section className="dashboard__tasks">
        <h2>Bruker Oppgaver</h2>
        <ul>
          <li>Fyll ut skjemaer</li>
          <li>Se innsendinger</li>
          <li>Spor status på innsendinger</li>
        </ul>
      </section>
    </div>
  );
};

export default UserDashboard;
