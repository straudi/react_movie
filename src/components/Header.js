import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 10% ;
    background-color: #0d253f;

    &.logo{
        cursor: pointer;
        width: 2%;
    }

    @media only screen and (max-width: 768px) {
        .logo{
            cursor: pointer;
            justify-content:center;
        }
        Button {
            display: none;
        }
    }

`;

const Anchor = styled.a`
    padding : 9px 25px;
    background-color: rgba(1,180,228,1);
    border:none;
    border-radius: 50px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: rgba(144,206,161,0.8);
    }
    position:relative;
`;

function Header() {
    return(
        <HeaderBlock>
            <img className="logo" src={logo} alt="logo"/>
            <Anchor href="https://www.themoviedb.org/">Contact</Anchor>
        </HeaderBlock>
    );
}

export default Header;