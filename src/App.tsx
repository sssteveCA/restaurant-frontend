import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ContainerComponent from './components/pages/ContainerComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ContainerComponent />
        <Footer />
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
