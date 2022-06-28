import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { CardBusinessInterface as cardBusiness } from './Interfaces/Interfaces';
import { CardSchoolInterface as cardSchool } from './Interfaces/Interfaces';
import About from './pages/About';

const App = () => {
  const [card] = useState(cardBusiness);
  const [card1] = useState(cardSchool);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home card={card} card1={card1} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
