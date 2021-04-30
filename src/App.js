import React from 'react';
import './App.css';
import Header from './components/header/Header';


const App = ({ children }) => (
  <>
    <Header/>
    {children}
    <div className="container"></div>
  </>

);


export default App;