import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Card = styled(Link)`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

const ProductImage = styled.img`
    max-width: 100%;
    height: 250px;
    object-fit: contain;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
`;

const ProductName = styled.h3`
    font-size: 1.2em;
    margin: 10px 0;
    font-family: 'Nunito', sans-serif;
`;

const ProductPrice = styled.p`
    font-size: 1em;
    color: #007bff;
`;

const AddButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const AddButton = styled.button`
    background: #ff8000;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    transition: background 0.3s;

    &:hover {
        background: #e67e00;
    }
`;

const ProductCard = ({ product }) => {
    return (
        <Card to={`/product/${product.id}`}>
            <ProductImage src={`/images/${product.image}`} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price} SEK</ProductPrice>
            <AddButtonContainer>
                <AddButton>
                    <FaPlus />
                </AddButton>
            </AddButtonContainer>
        </Card>
    );
};

export default ProductCard;
