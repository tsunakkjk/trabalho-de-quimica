const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos (HTML, CSS, imagens) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));



// Rotas personalizadas (opcional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/fatores', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'fatores.html'));
});

app.get('/exemplos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exemplos.html'));
});

app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'questoes.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

