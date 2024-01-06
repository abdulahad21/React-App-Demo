import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Student from './components/StudentForm';

function App() {
  const[mode,SetMode] = useState('light');
  const[textmode,SetTextMode] = useState('dark');
  const[textcolor,SetTextcolor] = useState('dark');

  const toggleMode = () =>{
      if(mode === 'light')
      {
        SetMode('dark');
        SetTextMode('light');
        SetTextcolor('light');
      }
      else
      {
        SetMode('light');
        SetTextMode('dark');
        SetTextcolor('dark');
      }
  }
  return (
    <>
    <Nav Title ="Student Info" Second="Home" Third="About" toggleMode={toggleMode} mode ={mode} txtmode ={textmode} textcolor={textcolor}/>
    <Student/>
    </>
  );
}

export default App;
