import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirigir de "/" a "/login" */}
                <Route path="/" element={<Navigate to="/login" />} />
                
                {/* Ruta para el login */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
  