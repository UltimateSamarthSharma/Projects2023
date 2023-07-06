const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});