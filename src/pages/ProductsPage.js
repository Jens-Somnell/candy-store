import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
`;

const ProductsTitle = styled.h1`
    font-family: 'Nunito', sans-serif;
    text-align: center;
    margin: 20px 0;
`;

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    // Gör en Get-förfrågan som hämtar alla produkter och renderar sedan en "productcard" för varje produkt
    useEffect(() => {
        fetch('/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <ProductsTitle>Products</ProductsTitle>
            <ProductsContainer>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </>
    );
};

export default ProductsPage;
