import React from 'react';
import './Header.css';
import logo from './logo.png';
import Navbar from './Navbar';

class Header extends React.Component {
    render() {
      return (
        <header>
          <div className="container">
              <div className="site-title">
                <img className="site-title__logo" src={logo} alt="Логоти сайта"></img>
                <h1 className="site-title__name">
                    Научный <br/> Медицинский <br/> Центр <br/> Сгу
                </h1>
              </div>             
          </div>
          <Navbar/>
        </header>
      );
    }
  }
    
export default Header;