import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
}

#root {
    height: 100%;
}

* {
    box-sizing: inherit;
}
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <AppContainer>
                    <Navbar />
                    <Content>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route
                                path="/products"
                                element={<ProductsPage />}
                            />
                            <Route
                                path="/product/:id"
                                element={<ProductPage />}
                            />
                            <Route path="/cart" element={<CartPage />} />
                            <Route
                                path="/checkout"
                                element={<CheckoutPage />}
                            />
                            <Route
                                path="/confirmation"
                                element={<ConfirmationPage />}
                            />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />{' '}
                            <Route path="/login" element={<LoginPage />} />{' '}
                        </Routes>
                    </Content>
                    <Footer />
                </AppContainer>
            </Router>
        </>
    );
};

export default App;
