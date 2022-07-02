import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Subsidiaries from './pages/Subsidiaries';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/subsidiaries" element={<Subsidiaries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
