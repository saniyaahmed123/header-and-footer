// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './Header'; // ✅ keep your custom Header
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer'
import Cards from './Cards';


function App() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <Cards />
      <br></br>
      <br></br> 
      
      <Footer />
    </div>
    
  );
}

export default App;
