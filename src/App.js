import {React, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Planes from './pages/Planes';
import UsuarioTipo from './pages/UsuarioTipo';
import EjerciciosTipo from './pages/EjerciciosTipo';
import Cuestionario from './components/Cuestionario';
import Resultados from './components/Resultados';
import Login from './Login'; // Ajusta la ruta según sea necesario




function App() {
    const [user, setUser] = useState(null);

    // Cargar el usuario desde localStorage al iniciar
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Función para manejar el inicio de sesión
    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <Router>
            <div className="App">
                <Header user={user} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/planes" element={<Planes />} />
                    <Route path="/usuarioTipo" element={<UsuarioTipo />} />
                    <Route path="/ejercicioTipo" element={<EjerciciosTipo />} />
                    <Route path="/cuestionario" element={<Cuestionario />} />
                    <Route path="/resultados" element={<Resultados />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;