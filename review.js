const http = require('http');

const tasks = [
  {
    id: 1,
    title: 'Hacer la compra',
    description: 'Ir al supermercado y comprar los alimentos necesarios.',
    completed: false
  },
  {
    id: 2,
    title: 'Lavar la ropa',
    description: 'Lavar la ropa sucia y colgarla para que se seque.',
    completed: true
  },
  {
    id: 3,
    title: 'Limpiar la casa',
    description: 'Barrer, trapear y ordenar las habitaciones.',
    completed: false
  }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET' && req.url === '/tasks') {
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

module.exports = review.js;
