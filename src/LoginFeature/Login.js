import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h2`
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const staticEmail = 'example@example.com';
        const staticPassword = 'password';

        if (validateEmail(email) && validatePassword(password)) {
            if (email === staticEmail && password === staticPassword) {
                alert('Login successful!');
            } else {
                setErrorMessage('Invalid email or password');
            }
        } else {
            setErrorMessage('Invalid email or password format');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6 && password.length <= 15;
    };

    return (
        <LoginContainer>
            <Title>Login</Title>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Form onSubmit={handleLogin}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Login</Button>
            </Form>
        </LoginContainer>
    );
};

export default Login;
