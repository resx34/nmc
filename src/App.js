import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


const App = ({ children }) => (
  <>
    <Header/>
    {children}
    <div className="container"></div>
    <Footer/>
  </>

);


export default App;