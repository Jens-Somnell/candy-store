import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import visaImage from '../assets/visa.png';
import swishImage from '../assets/swish.png';
import klarnaImage from '../assets/klarna.png';

const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Section = styled.div`
    width: 100%;
    max-width: 800px;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const SectionTitle = styled.h2`
    font-family: 'Nunito', sans-serif;
    margin-bottom: 10px;
`;

const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const CartItemDetails = styled.div`
    display: flex;
    align-items: center;
`;

const CartItemImage = styled.img`
    width: 50px;
    height: auto;
    margin-right: 10px;
`;

const CartItemName = styled.p`
    font-size: 1em;
    margin: 0;
`;

const CartItemPrice = styled.p`
    font-size: 1em;
    margin: 0;
`;

const PersonalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
`;

const PaymentOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PaymentOption = styled.label`
    display: flex;
    align-items: center;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    font-size: 1em;
    padding: 5px;
`;

const RadioButton = styled.input`
    margin-left: auto;
    margin-right: 20px;
`;

const PaymentImage = styled.img`
    width: 50px;
    height: auto;
    margin-left: 30px;
    margin-right: 30px;
    padding: 5px;
`;

const OrderSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const TotalPrice = styled.p`
    font-size: 1.5em;
    margin: 0;
`;

const CompleteOrderButton = styled.button`
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2em;
    margin-top: 20px;

    &:hover {
        background: #218838;
    }
`;

const CheckoutPage = () => {
    const [cart, setCart] = useState([]);

    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: ''
    });

    const [paymentMethod, setPaymentMethod] = useState('card');

    const navigate = useNavigate();

    // Använder useEffect för att ladda varukorgen från localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    // Hanterar ändringar i inmatningsfälten
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value // Uppdaterar state med nya värdet
        });
    };

    // Beräknar totalpriset
    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    // Hanterar slutförandet av beställningen
    const handleOrderCompletion = () => {
        localStorage.removeItem('cart'); // Rensar varukorgen
        navigate('/confirmation');
    };

    return (
        <CheckoutContainer>
            <Section>
                <SectionTitle>Order Review</SectionTitle>
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
                                <CartItemName>{item.name}</CartItemName>
                            </CartItemDetails>
                            <CartItemPrice>
                                {item.price * item.quantity} SEK
                            </CartItemPrice>
                        </CartItem>
                    ))
                )}
            </Section>
            <Section>
                <SectionTitle>Personal Information</SectionTitle>
                <PersonalInfoContainer>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={personalInfo.name}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={personalInfo.email}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={personalInfo.address}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={personalInfo.city}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="text"
                        name="zip"
                        placeholder="ZIP Code"
                        value={personalInfo.zip}
                        onChange={handleInputChange}
                        required
                    />
                </PersonalInfoContainer>
            </Section>
            <Section>
                <SectionTitle>Payment Options</SectionTitle>
                <PaymentOptionsContainer>
                    <PaymentOption>
                        Card
                        <PaymentImage src={visaImage} alt="Card" />
                        <RadioButton
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </PaymentOption>
                    <PaymentOption>
                        Klarna
                        <PaymentImage src={klarnaImage} alt="Klarna" />
                        <RadioButton
                            type="radio"
                            name="paymentMethod"
                            value="klarna"
                            checked={paymentMethod === 'klarna'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </PaymentOption>
                    <PaymentOption>
                        Swish
                        <PaymentImage src={swishImage} alt="Swish" />
                        <RadioButton
                            type="radio"
                            name="paymentMethod"
                            value="swish"
                            checked={paymentMethod === 'swish'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </PaymentOption>
                </PaymentOptionsContainer>
            </Section>
            <Section>
                <SectionTitle>Order Summary</SectionTitle>
                <OrderSummaryContainer>
                    <TotalPrice>Products: {getTotalPrice()} SEK</TotalPrice>
                    <TotalPrice>Shipping: 50 SEK</TotalPrice>
                    <TotalPrice>
                        Total: {getTotalPrice() + 50} SEK
                    </TotalPrice>{' '}
                    <CompleteOrderButton onClick={handleOrderCompletion}>
                        Complete Order
                    </CompleteOrderButton>
                </OrderSummaryContainer>
            </Section>
        </CheckoutContainer>
    );
};

export default CheckoutPage;
