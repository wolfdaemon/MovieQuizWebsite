import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Menu from './pages/Menu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* The wildcard in path redirects any not-existent pages to NotFound */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Menu />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
