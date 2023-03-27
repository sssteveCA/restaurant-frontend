import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='px-3 py-8'>
      <Navbar />
      <Footer />
    </div>
    
  );
}

export default App;
