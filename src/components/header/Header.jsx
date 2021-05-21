import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header () {
  const [header, setHeader] = useState(false);

  const changeBackground  = () => {
    if(window.scrollY >= 0) {
      setHeader(true);
    } 
  }

  const [isActive, setActive] = useState(false)

  const toogleClass = () => {
    setActive(!isActive);
  };

  window.addEventListener('scroll', changeBackground)

    return (
      <header className={ header? 'header-active' : 'header'}>
        <div className="banner"></div>
        <div className="logo">Научный медицинский центр СГУ</div>
        <div className={isActive ? 'burger-active' : 'burger'} onClick={toogleClass}>
          <div className="burger-item"></div>
          <div className="burger-item"></div>
          <div className="burger-item"></div>
        </div>
        <nav className={isActive ? 'active' : null} onClick={toogleClass}>
          <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/staff'>Сотрудники</Link></li>
                <li><Link to='/labs'>Лаборатории</Link></li>
                <li><Link to='/centers'>Научные центры</Link></li>
                <li><Link to='/news'>Новости</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

  
  export default Header;