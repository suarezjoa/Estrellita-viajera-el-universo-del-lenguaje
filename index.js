const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Enviar archivo HTML de la página de inicio
  });
  
  app.get('/jugar', (req, res) => {
    // Redireccionar a la siguiente vista (por ejemplo, 'juego.js')
    res.redirect('/juego');
  });
  app.get('/admin', (req, res) => {
    // Implementar la vista de administración (por ejemplo, mostrar un formulario o datos)
    res.send('Página de administración');
  });

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
}); 