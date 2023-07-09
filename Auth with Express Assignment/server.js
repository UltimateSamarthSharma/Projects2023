// Backend: server.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());

// MongoDB setup
const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'auth_system';
let db;

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  db = client.db(dbName);
  console.log('Connected to the database successfully');
});

// Middleware for validating required data in signup and login routes
const signupDataValidate = (req, res, next) => {
  const { name, username, bio, email, password } = req.body;
  if (!name || !username || !bio || !email || !password) {
    return res.status(400).json({ error: 'Please provide all the required fields' });
  }
  next();
};

const loginDataValidate = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Please provide all the required fields' });
  }
  next();
};

// Signup route
app.post('/signup', signupDataValidate, async (req, res) => {
  const { name, username, bio, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data to the database
    const user = {
      name,
      username,
      bio,
      email,
      password: hashedPassword,
    };

    const result = await db.collection('users').insertOne(user);
    console.log('User registered successfully');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

// Login route
app.post('/login', loginDataValidate, async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await db.collection('users').findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username: user.username }, 'secretkey');
    res.cookie('token', token);

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

// Authenticate middleware
const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, 'secretkey');

    // Fetch user from the database
    const user = db.collection('users').findOne({ username: decoded.username });
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'An error occurred while authenticating the user' });
  }
};

// Home route
app.get('/', authenticateUser, (req, res) => {
  // Send user data
  res.json(req.user);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});