import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../src/components/styles/login.css';
import imglog from '../src/assets/imglogin.jpg';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            });

            if (response.data.code === 200) {
                console.log('Login successful:', response.data);
                alert('Login successful');
                onLogin(response.data.user); // Usa la función de inicio de sesión
                navigate('/usuarioTipo'); // Redirige a la ruta deseada
            }
        } catch (err) {
            if (err.response && err.response.data.code === 401) {
                setError('Invalid credentials');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img src={imglog} alt="Imagen de fondo" className="login-image" />
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

export default Login;