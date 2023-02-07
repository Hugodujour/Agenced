import './darkMode.css'
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import PlatonStudyCase from './components/Works/StudyCase/PlatonStudyCase';
import SolaneStudyCase from './components/Works/StudyCase/SolaneStudyCase';
import SedalStudyCase from './components/Works/StudyCase/SedalStudyCase';

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
      }
    };


    useEffect(() => {
          document.body.className = theme;
        }, [theme]);

  return (
    <div className={`App${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />}>
          <Route path='works/platon-study-case' element={<PlatonStudyCase />} />
          <Route path='works/sedal-study-case' element={<SedalStudyCase />} />
          <Route path='works/solane-study-case' element={<SolaneStudyCase />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
