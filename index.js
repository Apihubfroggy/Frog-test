const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json'); // আপনার JSON ফাইল

app.get('/', (req, res) => {
  res.json(data); // JSON ডেটা রিটার্ন করা
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
