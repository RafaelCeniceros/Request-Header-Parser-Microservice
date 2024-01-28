// index.js
// where your node app starts

// Iniciar el proyecto
require('dotenv').config(); // Cargar variables de entorno desde un archivo .env
var express = require('express'); // Importar Express
var app = express(); // Crear una instancia de la aplicación Express

// Habilitar CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// para que tu API pueda ser probada de forma remota por FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // Algunos navegadores antiguos tienen problemas con el código de estado 204

// Configurar middleware para servir archivos estáticos
app.use(express.static('public'));

// Configurar ruta básica para la página de inicio
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Definir el primer punto final de la API...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: '¡Hola API!' });
});

// Punto final de la API para obtener información del cliente
app.get('/api/whoami', function (req, res) {
  // Extraer la dirección IP del cliente
  var ipAddress = req.ip;

  // Extraer el idioma preferido del cliente
  var language = req.headers['accept-language'];

  // Extraer información del software del cliente
  var software = req.headers['user-agent'];

  // Enviar una respuesta JSON con la información recolectada
  res.json({ ipaddress: ipAddress, language: language, software: software });
});

// Escuchar las solicitudes en el puerto especificado o en el puerto 3000 por defecto
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Tu aplicación está escuchando en el puerto ' + listener.address().port);
});