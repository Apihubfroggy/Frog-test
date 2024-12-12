const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json'); // আপনার JSON ডেটা ফাইল

// Basic Authentication (এটা শুধুমাত্র একটি উদাহরণ, প্রকৃতপক্ষে আপনি OAuth বা অন্যান্য পদ্ধতি ব্যবহার করতে পারেন)
app.use((req, res, next) => {
  const user = req.headers['user'];
  const pass = req.headers['pass'];

  // Basic username & password check
  if (user === 'admin' && pass === 'password123') {
    next(); // If authenticated, continue
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/', (req, res) => {
  res.json(data); // JSON ডেটা রিটার্ন করা
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
