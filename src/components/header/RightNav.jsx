import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul `
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start ;
    margin: 0px ;
    padding-inline-start: 0px;


    li {
        padding: 13px 15px;
        list-style: none;
        color: #fff;
    }

    li:hover {
        background-color: #1f1f5d;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size: 17px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)' };
        background-color: #1f1f5d;
        opacity: 0.96; 
        top: 0;
        right: 0;
        height: 100vh;
        width: 170px;
        justify-content: flex-start;
        margin-top: 0;
        padding-top: 3.5rem;
        transition: transform 0.3s easy-in-out;
    }
`;

const RightNav = ({ open }) => {
    return (
            <Ul open={open}> 
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/staff'>Сотрудники</Link></li>
                <li><Link to='/news'>Новости</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
            </Ul>     
    );
}

export default RightNav;