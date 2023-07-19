const express = require("express");
const app = express();
const notFound = require("./notFound");
const errorHandlerMiddleware = require("./starter/erroe");
require('dotenv').config({ path: './starter/.env' });
const connectDb = require('./starter/connect');
const productRouter = require('./router/products')
require('express-async-errors')


// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send('<h1>store api</h1> <a href="/api/v1/products">product route</a>');
});
// routes
app.use('/api/v1/products',productRouter)

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI); // Connect to MongoDB using the provided MONGO_URI
    app.listen(port, () => console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
