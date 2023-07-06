const express = require('express');
const app = express();
const http = require('http');

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ random: randomNumber });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});