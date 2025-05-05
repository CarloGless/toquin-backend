const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(cors());
app.use(express.json());

// Configurar Multer para manejar uploads en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint principal
app.get('/', (req, res) => {
    res.send('TOQUIN Backend funcionando.');
});

// Endpoint para subir archivo y pedir generación
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const fileBuffer = req.file.buffer;
    const fileName = req.file.originalname;
    const arrangementType = req.body.arrangementType;

    // Simulación de procesamiento (aquí irá el modelo futuro de AI)
    console.log(`Recibido archivo: ${fileName}`);
    console.log(`Tipo de arreglo solicitado: ${arrangementType}`);

    // Respuesta simulada (en el futuro aquí devolvemos los .wav generados)
    res.json({
        message: `Archivo ${fileName} recibido y procesado para arreglo tipo ${arrangementType}.`,
        tracks: [
            'bajo.wav',
            'batería.wav',
            'guitarra.wav',
            'sintetizador.wav'
        ]
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});