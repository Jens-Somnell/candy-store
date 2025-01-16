import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const CartTitle = styled.h1`
    font-family: 'Nunito', sans-serif;
`;

const CartItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const CartItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;
    }
`;

const CartItemImage = styled.img`
    width: 100px;
    height: auto;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        margin-right: 20px;
        margin-bottom: 0;
    }
`;

const CartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

const CartItemName = styled.p`
    font-size: 1.2em;
    margin: 0;
    margin-bottom: 10px;
`;

const CartItemPrice = styled.p`
    font-size: 1.2em;
    margin: 0;
`;

const CartItemQuantity = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

const QuantityButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
        background: #0056b3;
    }
`;

const QuantityInput = styled.input`
    width: 50px;
    text-align: center;
    font-size: 1em;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const CartItemTotal = styled.p`
    font-size: 1.2em;
    margin: 10px 0 0 0;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

const RemoveButton = styled.button`
    background: none;
    border: none;
    color: #d9534f;
    cursor: pointer;
    font-size: 1.5em;
    margin-top: 10px;

    &:hover {
        color: #c9302c;
    }

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

const CartSummary = styled.div`
    width: 100%;
    max-width: 800px;
    border-top: 1px solid #ddd;
    padding-top: 20px;
    text-align: center;

    @media (min-width: 768px) {
        text-align: right;
    }
`;

const TotalPrice = styled.p`
    font-size: 1.5em;
`;

const CheckoutButton = styled(Link)`
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2em;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;

    &:hover {
        background: #218838;
    }
`;

const CartPage = () => {
    const [cart, setCart] = useState([]);

    // Använder useEffect för att ladda varukorgen från localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    // Hanterar kvanintet, kopierar varukorgen och uppdaterar kvantieten genom angiven index
    const handleQuantityChange = (index, quantity) => {
        const newCart = [...cart];
        newCart[index].quantity = quantity;
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    // Hanterar borttagning av produkter, skapar en ny varukorg utan produkten genom angiven index
    const handleRemoveItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index); // Skapa en ny varukorg utan produkten på den angivna indexpositionen
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    // Beräknar totalpriset
    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <CartContainer>
            <CartTitle>Your cart</CartTitle>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item, index) => (
                    <CartItem key={index}>
                        <CartItemDetails>
                            <CartItemImage
                                src={`/images/${item.image}`}
                                alt={item.name}
                            />
                            <CartItemInfo>
                                <CartItemName>{item.name}</CartItemName>
                                <CartItemPrice>{item.price} SEK</CartItemPrice>
                            </CartItemInfo>
                        </CartItemDetails>
                        <CartItemQuantity>
                            <QuantityButton
                                onClick={() =>
                                    handleQuantityChange(
                                        index,
                                        item.quantity - 1
                                    )
                                }
                                disabled={item.quantity <= 1}
                            >
                                -
                            </QuantityButton>
                            <QuantityInput
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleQuantityChange(
                                        index,
                                        parseInt(e.target.value) || 1
                                    )
                                }
                                min="1"
                            />
                            <QuantityButton
                                onClick={() =>
                                    handleQuantityChange(
                                        index,
                                        item.quantity + 1
                                    )
                                }
                            >
                                +
                            </QuantityButton>
                        </CartItemQuantity>
                        <CartItemTotal>
                            {item.price * item.quantity} SEK
                        </CartItemTotal>
                        <RemoveButton onClick={() => handleRemoveItem(index)}>
                            <FaTrash />
                        </RemoveButton>
                    </CartItem>
                ))
            )}
            {cart.length > 0 && (
                <CartSummary>
                    <TotalPrice>Total: {getTotalPrice()} SEK</TotalPrice>
                    <CheckoutButton to="/checkout">Checkout</CheckoutButton>
                </CartSummary>
            )}
        </CartContainer>
    );
};

export default CartPage;
