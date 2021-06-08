import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="footer-row">
                        <h3 className="footer-name">
                            2021 &copy; Научный медицинский центр СГУ
                        </h3>
                    </div>
                    <div className="footer-row">
                        <div className="footer-links">
                            <p>Телефон:</p>
                            <a href="tel: +7 (888) 777 81 82"> +7 (888) 777 81 82 </a>
                            <p>E-mail:</p>
                            <a href="mailto: sgu@sgu.ru"> sgu@sgu.ru </a>
                        </div>
                    </div>
                    <div className="footer-row">
                            <div className="footer-nav">
                                <ul>
                                    <li><Link to='/'>Главная</Link></li>
                                    <li><Link to='/services'>Услуги</Link></li>
                                    <li><Link to='/labs'>Лаборатории</Link></li>
                                    <li><Link to='/centers'>Научные центры</Link></li>
                                    <li><Link to='/staff'>Сотрудники</Link></li>
                                    <li><Link to='/news'>Новости</Link></li>
                                    <li><Link to='/contacts'>Контакты</Link></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
