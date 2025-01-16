import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImage from '../assets/monster-ultra-peachy-keen.png';
import monsterTextImage from '../assets/monster-text.png';
import backgroundImage from '../assets/beach.webp';

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    padding: 20px 150px;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    border: 2px solid #007bff;
    border-radius: 15px;
    margin: 20px;

    @media (max-width: 1119px) {
        flex-direction: column;
        text-align: center;
        padding: 20px 10px;
    }
`;

const HeroTextContainer = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const HeroImage = styled.img`
    max-width: 20%; /* Reduced size */
    height: auto;

    @media (max-width: 768px) {
        max-width: 60%;
        margin-top: 20px;
    }
`;

const MonsterTextImage = styled.img`
    max-width: 200px;
    height: auto;
    margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
    color: #faf9f6;
    font-size: 3rem;
    font-family: 'Freckle Face', cursive;
    margin-bottom: 5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 10px 20px 5px 20px;
`;

const HeroText = styled.p`
    color: #faf9f6;
    font-size: 1.5rem;
    max-width: 600px;
    font-family: 'Nunito', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 5px 20px 5px 20px;
`;

const MoreInfoButton = styled(Link)`
    padding: 8px 16px;
    font-size: 1rem;
    background-color: #007bff;
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
        background-color: #0056b3;
    }
`;

const Hero = () => {
    const [productId, setProductId] = useState(null);

    useEffect(() => {
        fetch('/api/productByName/Monster%20Ultra%20Peachy%20Keen')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched product data:', data);
                setProductId(data.id);
            })
            .catch((error) =>
                console.error('Error fetching product ID:', error)
            );
    }, []);

    return (
        <HeroContainer>
            <HeroTextContainer>
                <MonsterTextImage
                    src={monsterTextImage}
                    alt="Monster Ultra Peachy Keen Text"
                />
                <HeroTitle>ZERO-SUGAR ULTRA PEACHY KEEN</HeroTitle>
                <HeroText>
                    Stay refreshed and energized this summer with the new
                    Monster Ultra Peachy Keen!
                </HeroText>
                <MoreInfoButton to={productId ? `/product/${productId}` : '#'}>
                    More Info
                </MoreInfoButton>
            </HeroTextContainer>
            <HeroImage src={heroImage} alt="Monster Ultra Peachy Keen" />
        </HeroContainer>
    );
};

export default Hero;
