require("dotenv").config();

const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'pagina_web')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'pagina_web','index.html'));
});
// Endpoint que recibirá la petición GET
app.get('/mensaje', (req, res) => {
    // req.query captura parámetros de la URL: /api/saludo?nombre=Juan
    const nombre = req.query.nombre ;
    res.json({
        mensaje: `Hola, ${nombre}, un fuerte abrazo desde el Servidor`,
        status: 'success'
    });
});

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
