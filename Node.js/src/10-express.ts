// import express from 'express';
// import http from 'http';

// const app = express();

// const server = http.createServer(app);
// server.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

import express from 'express';
import path from 'path';

const app = express();

// Middleware : body-parser (va créer req.body)
// Le JSON passé en body d'une requête POST
// est parsé (important il doit y avoir l'entete de requete
// Content-type: application/json)
app.use(express.json());

// 3 possibilité pour configurer le router
// toutes les urls qui commencent par /api
app.use('/api', (req, res) => {
  res.end('API')
});
// toutes les requete dont l'url est /
// quelque soit la méthode HTTP
app.all('/', (req, res) => {
  res.end('Home page')
});
// ensuite on peut préciser la méthode HTTP
app.get('/hello', (req, res) => {
  res.end('Hello');
});
app.post('/login', (req, res) => {
  res.end('Login');
});

// L'url peut être une Regex
app.get(/\/bon(jour|soir)/, (req, res) => {
  res.end('Bonjour ou bonsoir');
});

// L'url peut définir des paramètres
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.end('Hello ' + name);
});

// Les méthodes de Response qui appellent end
app.get('/send', (req, res) => {
  // ajoute des entetes comme le ETAG
  res.send('<h2>Hello</h2>');
});

app.get('/sendFile', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'page.html'));
});

app.get('/download', (req, res) => {
  res.download(path.resolve(__dirname, '..', 'page.html'));
});

app.get('/redirect', (req, res) => {
  res.redirect('https://www.google.com/')
});

app.get('/json', (req, res) => {
  res.json({name: 'Romain'});
});

app.post('/todos', (req, res) => {
  console.log(req.body);
});

// Méthodes à connaitre :
// GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH
// app.put();
// app.delete();

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
