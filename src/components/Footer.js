import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaWallet } from 'react-icons/fa';
import visaImage from '../assets/visa.png';
import klarnaImage from '../assets/klarna.png';
import swishImage from '../assets/swish.png';

const FooterContainer = styled.footer`
    background-color: #007bff;
    color: white;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    text-align: center;
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 5px 0;

    &:hover {
        text-decoration: underline;
    }
`;

const FooterIconText = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
`;

const IconText = styled.span`
    margin-left: 5px;
    font-size: 1.2em;
`;

const PaymentMethods = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PaymentImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PaymentImage = styled.img`
    width: 50px;
    height: auto;
    margin: 0 10px;
    border-radius: 5px;
    padding: 5px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinks>
                    <FooterIconText>
                        <FaQuestionCircle size="1.5em" />
                        <IconText>Info</IconText>
                    </FooterIconText>
                    <FooterLink to="/about">About Us</FooterLink>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/about">FAQ</FooterLink>
                </FooterLinks>
                <PaymentMethods>
                    <FooterIconText>
                        <FaWallet size="1.5em" />
                        <IconText>Payment Methods</IconText>
                    </FooterIconText>
                    <PaymentImages>
                        <PaymentImage src={visaImage} alt="Visa" />
                        <PaymentImage src={klarnaImage} alt="Klarna" />
                        <PaymentImage src={swishImage} alt="Swish" />
                    </PaymentImages>
                </PaymentMethods>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
