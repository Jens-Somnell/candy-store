import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Hanterar ändringar i inputfälten
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Hanterar formulärets inskickning
    const handleSubmit = (e) => {
        e.preventDefault();
        // Skickar en POST-förfrågan för att registrera en ny
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Skickar formulärdata som JSON
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Tolkar svaret som JSON
            })
            .then((data) => {
                if (data.message) {
                    setMessage(data.message); // Sätter meddelandet i state
                    setTimeout(() => {
                        navigate('/'); // Navigerar till hemsidan efter 2 sekunder
                    }, 2000);
                } else {
                    setMessage('Registration failed.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Registration failed.');
            });
    };

    return (
        <FormContainer>
            <h1>Register</h1>
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
                <Button type="submit">Register</Button>
            </Form>
            {message && <p>{message}</p>}
        </FormContainer>
    );
};

export default RegisterPage;
