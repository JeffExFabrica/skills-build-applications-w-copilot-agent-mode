

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function HomeCard() {
  return (
    <div className="card text-center mt-5 shadow">
      <div className="card-body">
        <h1 className="card-title display-4 mb-3">Bienvenue sur OctoFit Tracker !</h1>
        <p className="card-text lead">Suivez vos activités, vos équipes, le classement et vos entraînements avec style.</p>
        <Link to="/activities" className="btn btn-primary btn-lg m-2">Voir les activités</Link>
        <Link to="/leaderboard" className="btn btn-success btn-lg m-2">Voir le classement</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activités</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Classement</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Équipes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Utilisateurs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Entraînements</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<HomeCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
