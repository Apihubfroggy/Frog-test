const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json'); 

app.use((req, res, next) => {
  const user = req.headers['user'];
  const pass = req.headers['pass'];

  if (user === 'admin' && pass === 'password123') {
    next(); 
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/', (req, res) => {
  res.json(data); 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
