import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../src/components/styles/login.css';
import imglog from '../src/assets/imglogin.jpg';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Indicador de carga
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); // Activa el indicador de carga
        try {
            const response = await axios.post('https://pempem.com.mx/backend/login.php', {
                email,
                password,
            });

            if (response.data.code === 200) {
                console.log('Login successful:', response.data);
                alert('Login successful');
                onLogin(response.data.user); // Llama la función de login del padre
                navigate('/'); // Redirige al usuario
            } else {
                setError('Unexpected response. Please try again.');
            }
        } catch (err) {
            if (err.response) {
                // Manejo de errores específicos del backend
                if (err.response.data.code === 401) {
                    setError('Invalid credentials');
                } else {
                    setError(`Error: ${err.response.data.message || 'Unknown error'}`);
                }
            } else {
                // Manejo de errores de red u otros
                setError('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false); // Desactiva el indicador de carga
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
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

export default Login;
