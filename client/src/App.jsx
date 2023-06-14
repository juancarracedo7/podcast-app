import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:trackId" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
