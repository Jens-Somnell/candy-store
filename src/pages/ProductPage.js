import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 50px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`;

const ProductImage = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        max-width: 400px;
        height: 400px;
        margin-right: 80px;
    }
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
        align-items: flex-start;
        text-align: left;
    }
`;

const ProductName = styled.h3`
    font-size: 2.5em;
    margin: 10px 0;
    font-family: 'Nunito', sans-serif;
`;

const ProductPrice = styled.p`
    font-size: 1.5em;
    color: #007bff;
`;

const ProductDescription = styled.p`
    font-size: 1.5em;
    color: #555;
    margin-top: 50px;
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const QuantityButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px;
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
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const AddToCartButton = styled.button`
    background: ${(props) => (props.added ? '#28a745' : '#ff8000')};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    margin-top: 50px;
    cursor: pointer;
    font-size: 1.2em;
    width: 100%;

    &:hover {
        background: ${(props) => (props.added ? '#218838' : '#e67e00')};
    }
`;

const ProductPage = () => {
    // Hämtar produkt id från URl:en
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    // Använde useEffect för att hämta produktdata baserat på id
    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                return response.json();
            })
            .then((data) => setProduct(data))
            .catch((error) => {
                console.error('Error fetching product:', error);
                setProduct(null);
            });
    }, [id]);

    // Hanterar kvantitet
    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value) || 1);
    };

    // Hanterar tillägg till varukorgen
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = { ...product, quantity };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        setAddedToCart(true);
    };

    if (product === null) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <ProductContainer>
            <ProductImage src={`/images/${product.image}`} alt={product.name} />
            <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price} SEK</ProductPrice>
                <QuantityContainer>
                    <QuantityButton
                        onClick={() => setQuantity(quantity - 1)}
                        disabled={quantity <= 1}
                    >
                        -
                    </QuantityButton>
                    <QuantityInput
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                    />
                    <QuantityButton onClick={() => setQuantity(quantity + 1)}>
                        +
                    </QuantityButton>
                </QuantityContainer>
                <AddToCartButton onClick={handleAddToCart} added={addedToCart}>
                    {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                </AddToCartButton>
                <ProductDescription>{product.description}</ProductDescription>
            </ProductDetails>
        </ProductContainer>
    );
};

export default ProductPage;
