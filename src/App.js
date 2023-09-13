import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Sliders from './components/Sliders';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Sliders/>
    </div>
  )
}

export default App
