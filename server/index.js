const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root', // Cambiar según tu configuración
    password: '', // Cambiar según tu configuración
    database: 'login_db', // Asegúrate de crear esta base de datos
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) return res.status(500).json({ code: 500, message: 'Database error' });
        
        if (results.length > 0) {
            // Usuario encontrado, autenticación exitosa
            res.status(200).json({
                code: 200,
                message: 'Login successful',
                user: results[0], // Devuelve los detalles del usuario
            });
        } else {
            // Credenciales incorrectas
            res.status(401).json({
                code: 401,
                message: 'Invalid credentials',
            });
        }
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
