const express = require('express');
const app = express();
const http = require('http');

const menProducts = [
  { id: 1, name: 'Men Product 1', category: 'Men' },
  { id: 2, name: 'Men Product 2', category: 'Men' },
  { id: 3, name: 'Men Product 3', category: 'Men' },
  { id: 4, name: 'Men Product 4', category: 'Men' },
  { id: 5, name: 'Men Product 5', category: 'Men' },
  { id: 6, name: 'Men Product 6', category: 'Men' },
  { id: 7, name: 'Men Product 7', category: 'Men' },
  { id: 8, name: 'Men Product 8', category: 'Men' },
  { id: 9, name: 'Men Product 9', category: 'Men' },
  { id: 10, name: 'Men Product 10', category: 'Men' },
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', category: 'Women' },
  { id: 2, name: 'Women Product 2', category: 'Women' },
  { id: 3, name: 'Women Product 3', category: 'Women' },
  { id: 4, name: 'Women Product 4', category: 'Women' },
  { id: 5, name: 'Women Product 5', category: 'Women' },
  { id: 6, name: 'Women Product 6', category: 'Women' },
  { id: 7, name: 'Women Product 7', category: 'Women' },
  { id: 8, name: 'Women Product 8', category: 'Women' },
  { id: 9, name: 'Women Product 9', category: 'Women' },
  { id: 10, name: 'Women Product 10', category: 'Women' },
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});