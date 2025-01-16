import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const ConfirmationMessage = styled.h1`
    font-family: 'Nunito', sans-serif;
    margin-bottom: 20px;
`;

const ConfirmationIcon = styled(FaCheckCircle)`
    color: #28a745;
    font-size: 3em;
    margin-bottom: 20px;
`;

const ContinueShoppingButton = styled(Link)`
    background: #007bff;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2em;
    margin-top: 20px;

    &:hover {
        background: #0056b3;
    }
`;

const ConfirmationPage = () => {
    return (
        <ConfirmationContainer>
            <ConfirmationMessage>Thank you for your order!</ConfirmationMessage>
            <ConfirmationIcon />
            <p>Your order has been placed successfully.</p>
            <ContinueShoppingButton to="/products">
                Continue Shopping
            </ContinueShoppingButton>
        </ConfirmationContainer>
    );
};

export default ConfirmationPage;
