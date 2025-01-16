import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import doritosBackground from '../assets/doritos-background.webp';
import doritosImage from '../assets/doritos-nacho-cheese.png';

const DoritosBannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    padding: 20px 100px;
    background: url(${doritosBackground}) no-repeat center center;
    background-size: cover;
    border: 2px solid #ff8000;
    border-radius: 15px;
    margin: 20px;

    @media (max-width: 1119px) {
        flex-direction: column;
        text-align: center;
        padding: 20px 10px;
    }
`;

const DoritosBannerTextContainer = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const DoritosBannerImage = styled.img`
    max-width: 30%;
    height: auto;

    @media (max-width: 768px) {
        max-width: 60%;
        margin-top: 20px;
    }
`;

const DoritosBannerTitle = styled.h1`
    color: #faf9f6;
    font-size: 2.5rem;
    font-family: 'Freckle Face', cursive;
    margin-bottom: 10px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
    padding: 10px 20px 5px 20px;
`;

const DoritosBannerText = styled.p`
    color: #faf9f6;
    font-size: 1.5rem;
    max-width: 600px;
    font-family: 'Nunito', sans-serif;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
    padding: 5px 20px 5px 20px;
`;

const DoritosMoreInfoButton = styled(Link)`
    padding: 8px 16px;
    font-size: 1rem;
    background-color: #ff8000;
    color: #faf9f6;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-family: 'Nunito', sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    align-self: center;

    &:hover {
        background-color: #e67e00;
    }
`;

const DoritosBanner = () => {
    return (
        <DoritosBannerContainer>
            <DoritosBannerTextContainer>
                <DoritosBannerTitle>Doritos Nacho Cheese</DoritosBannerTitle>
                <DoritosBannerText>
                    Enjoy the bold and zesty flavor of Doritos Nacho Cheese.
                    Perfect for any snack time!
                </DoritosBannerText>
                <DoritosMoreInfoButton to="/products">
                    See Products
                </DoritosMoreInfoButton>
            </DoritosBannerTextContainer>
            <DoritosBannerImage src={doritosImage} alt="Doritos Nacho Cheese" />
        </DoritosBannerContainer>
    );
};

export default DoritosBanner;
