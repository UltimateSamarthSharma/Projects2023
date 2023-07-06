/*
# User Management Backend System Documentation

This documentation provides an overview and step-by-step guide on creating a User Management Backend System using Express.js and MongoDB. The system allows performing CRUD (Create, Read, Update, Delete) operations on user data stored in a MongoDB database. The backend is implemented using Express.js, a popular Node.js framework for building web applications, and MongoDB, a NoSQL database.

## Prerequisites

Before getting started, ensure you have the following installed:

1. Node.js - version 12 or above
2. npm (Node Package Manager) - usually bundled with Node.js installation
3. MongoDB - ensure it is installed and running on your local machine or have access to a MongoDB instance

## Setting Up the Project

Follow these steps to set up the project:

1. Create a new directory for your project and navigate to it using the command line.

2. Initialize a new Node.js project by running the following command:

   ```bash
   npm init -y
   ```

3. Install the required dependencies: Express, Mongoose, and any additional packages you may need. Run the following command:

   ```bash
   npm install express mongoose
   ```

## Creating the Express Server

1. Create a new file named `server.js` in the project directory.

2. Import the required packages at the top of the file:

   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   ```

3. Create an instance of the Express application:

   ```javascript
   const app = express();
   ```

4. Set up the middleware to parse JSON data:

   ```javascript
   app.use(express.json());
   ```

5. Connect to the MongoDB database:

   ```javascript
   mongoose.connect('mongodb://localhost/user_management', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
   ```

   Replace `mongodb://localhost/user_management` with the appropriate MongoDB connection string for your setup.

6. Start the Express server:

   ```javascript
   const port = 3000;

   app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
   });
   ```

## Defining the User Model

1. Create a new directory named `models` in the project directory.

2. Inside the `models` directory, create a new file named `User.js`.

3. Define the User schema and model using Mongoose:

   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     name: {
       type: String,
       required: true,
     },
     email: {
       type: String,
       required: true,
       unique: true,
     },
     age: {
       type: Number,
       required: true,
     },
   });

   const User = mongoose.model('User', userSchema);

   module.exports = User;
   ```

## Implementing CRUD Operations

1. Create a new directory named `routes` in the project directory.

2. Inside the `routes` directory, create a new file named `users.js`.

3. Import the required packages and the User model:

   ```javascript
   const express = require('express');
   const router = express.Router();
   const User = require('../models/User');
   ```

4. Define the routes for CRUD operations:

   ```javascript
   // Create a new user
   router.post('/', async (req, res) => {
     try {
       const user = new User(req.body);
       await user.save();
       res.status(201).send(user);
     } catch (error) {
       res.status(400).send(error);
     }
   });

   // Get all users
   router.get('/', async

(req, res) => {
     try {
       const users = await User.find();
       res.send(users);
     } catch (error) {
       res.status(500).send(error);
     }
   });

   // Get a specific user by ID
   router.get('/:id', async (req, res) => {
     try {
       const user = await User.findById(req.params.id);
       if (!user) {
         return res.status(404).send({ message: 'User not found' });
       }
       res.send(user);
     } catch (error) {
       res.status(500).send(error);
     }
   });

   // Update a user
   router.put('/:id', async (req, res) => {
     try {
       const user = await User.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
         runValidators: true,
       });
       if (!user) {
         return res.status(404).send({ message: 'User not found' });
       }
       res.send(user);
     } catch (error) {
       res.status(400).send(error);
     }
   });

   // Delete a user
   router.delete('/:id', async (req, res) => {
     try {
       const user = await User.findByIdAndDelete(req.params.id);
       if (!user) {
         return res.status(404).send({ message: 'User not found' });
       }
       res.send({ message: 'User deleted' });
     } catch (error) {
       res.status(500).send(error);
     }
   });

   module.exports = router;
   ```

6. In the `server.js` file, import and use the `users` route:

   ```javascript
   const usersRoute = require('./routes/users');
   app.use('/users', usersRoute);
   ```

## Testing the API Endpoints

You can now test the CRUD operations using an API testing tool like Postman or cURL. Here are some example requests:

- **Create a user** - Send a POST request to `http://localhost:3000/users` with the following JSON data in the request body:

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
  ```

- **Get all users** - Send a GET request to `http://localhost:3000/users`.

- **Get a specific user by ID** - Send a GET request to `http://localhost:3000/users/:id`, where `:id` is the ID of the user you want to retrieve.

- **Update a user** - Send a PUT request to `http://localhost:3000/users/:id` with the updated JSON data in the request body.

- **Delete a user** - Send a DELETE request to `http://localhost:3000/users/:id`, where `:id` is the ID of the user you want to delete.

## Conclusion

Congratulations! You have successfully created a User Management Backend System using Express.js and MongoDB. You can now perform CRUD operations on user data stored in a MongoDB database. Feel free to enhance the system by adding authentication, validation, or any additional features as per your requirements.
*/