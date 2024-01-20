import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Student from './components/StudentForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
import News from './components/News';

function App() {
  const [mode, SetMode] = useState('light');
  const [textmode, SetTextMode] = useState('dark');
  const [textcolor, SetTextcolor] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      SetMode('dark');
      SetTextMode('light');
      SetTextcolor('light');
    }
    else {
      SetMode('light');
      SetTextMode('dark');
      SetTextcolor('dark');
    }
  }
  return (
    <>

      <Router>
        <Nav
          Title="Student Info"
          Second="Home"
          Third="About"
          Forth='News'
          toggleMode={toggleMode}
          mode={mode}
          txtmode={textmode}
          textcolor={textcolor}
        />
        <div className="container my-3">
          <Routes>
            <Route>
              <Route path="/" element={<Student />} />
              <Route path="/StudentForm" element={<Student />} />
              <Route path="/About" element={<About />} />
              <Route path="/News" element={<News />} />
            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
