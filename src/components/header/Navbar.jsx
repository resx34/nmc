import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav `
    width: 100%;
    height: 50px;
    background-color: #2f2f83;

    @media (max-width: 768px) {
        height: 5px;
    }
`;

const Navbar = () => {
    return (
     <Nav>
         <div className="container">
            <Burger />
        </div>
    </Nav>
    )
}
export default Navbar;