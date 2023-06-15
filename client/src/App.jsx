import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './pages/details';
import Home from './pages/home';
import EpisodeDetails from './pages/episodeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:trackId" element={<Details />} />
        <Route path="/episode/:trackId" element={<EpisodeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
