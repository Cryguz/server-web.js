require("dotenv").config();

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 0. Define el librerias agregadas a utilizar por express
app.use(express.static(path.join(__dirname, 'pagina_web')));

// 1. Servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pagina_web/index.html'));
});

// 2. Endpoint para explorar el disco duro
app.get('/explore', (req, res) => {
    const inputPath = req.query.direccion;
    if (!inputPath) return res.status(400).json({ error: 'Ruta vacía' });

    try {
        if (!fs.existsSync(inputPath)) return res.status(404).json({ error: 'No existe' });

        const stats = fs.lstatSync(inputPath);

        if (stats.isDirectory()) {
            // Caso: Directorio
            fs.readdir(inputPath, (err, files) => {
                if (err) throw err;
                res.json({ tipo: 'directorio', ruta: inputPath, contenido: files });
            });
        } else if (stats.isFile()) {
            // Caso: Archivo (leído como texto UTF-8)
            fs.readFile(inputPath, 'utf8', (err, data) => {
                if (err) return res.status(500).json({ error: 'No se pudo leer el archivo' });
                res.json({ tipo: 'archivo', ruta: inputPath, contenido: data });
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error de acceso al sistema' });
    }
});
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});