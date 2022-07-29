import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Subsidiaries from './pages/Subsidiaries';
import Products from './pages/Products';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';
import Shopping from './pages/Shopping/Shopping';
import Gedu from './pages/Gedu';
import NotFound from './pages/NotFound';
import Career from './pages/Career';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/subsidiaries" element={<Subsidiaries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Shopping />} />
        <Route path="/subsidiaries/gedu" element={<Gedu />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
