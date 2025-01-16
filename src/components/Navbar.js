import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007bff;
    padding: 20px 40px;
`;

const Logo = styled.div`
    font-family: 'Bangers', cursive;
    font-size: 2em;

    a {
        text-decoration: none;
        color: #ff8000;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 15px;
`;

const Icon = styled.div`
    font-size: 1.5em;
    color: white;
    cursor: pointer;

    a {
        text-decoration: none;
        color: white;
    }
`;

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: ${(props) => (props.show ? '0' : '-100%')};
    height: 100%;
    width: 250px;
    background-color: #007bff;
    padding: 20px;
    transition: left 0.3s ease;
    z-index: 1000;
`;

const CloseButton = styled.div`
    font-size: 1.5em;
    color: white;
    text-align: right;
    cursor: pointer;
`;

const MenuItem = styled.div`
    margin: 15px 0;
    font-size: 1.2em;

    a {
        text-decoration: none;
        color: white;
    }
`;

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Växla mellan öppen/stängd
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Stäng menyn om en länk klickas
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <NavbarContainer>
                <Icon onClick={toggleMenu}>
                    <FaBars />
                </Icon>
                <Logo>
                    <Link to="/">CandyBuzz</Link>
                </Logo>
                <IconsContainer>
                    <Icon>
                        <Link to="/login">
                            <FaUser />
                        </Link>
                    </Icon>
                    <Icon>
                        <Link to="/cart">
                            <FaShoppingCart />
                        </Link>
                    </Icon>
                </IconsContainer>
            </NavbarContainer>
            <MenuContainer show={menuOpen}>
                <CloseButton onClick={toggleMenu}>
                    <FaTimes />
                </CloseButton>
                <MenuItem onClick={handleLinkClick}>
                    <Link to="/products">Products</Link>
                </MenuItem>
                <MenuItem onClick={handleLinkClick}>
                    <Link to="/about">About</Link>
                </MenuItem>
            </MenuContainer>
        </>
    );
};

export default Navbar;
