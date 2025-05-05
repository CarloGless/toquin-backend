
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    // Aquí puedes agregar lógica para procesar el archivo
    res.send('Archivo recibido correctamente.');
});

app.get('/', (req, res) => {
    res.send('TOQUIN Backend funcionando.');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
