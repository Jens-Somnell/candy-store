import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
`;

const Button = styled.button`
    background: #007bff;
    color: white;
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

const Message = styled.p`
    margin-top: 20px;
    color: red;
`;

const RegisterLink = styled.p`
    margin-top: 30px;
    font-size: 1em;
    text-align: center;

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Hanterar ändringar i formulärfältet
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value // Uppdaterar state med nytt värde
        });
    };

    // Hanterar formulärets submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Förhindrar att sidan laddas om
        // POST-förfrågan till backend
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'Login successful') {
                    setMessage('Login successful');
                    setTimeout(() => {
                        navigate('/');
                    }, 2000); // navigerar till hemsidan efter 2 sekunder
                } else {
                    setMessage('Login failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Login failed');
            });
    };

    return (
        <FormContainer>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Login</Button>
            </Form>
            {message && <Message>{message}</Message>}
            <RegisterLink>
                Don't have an account? <Link to="/register">Register here</Link>
            </RegisterLink>
        </FormContainer>
    );
};

export default LoginPage;
