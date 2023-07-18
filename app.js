const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDb = require("./starter/db/connect");
require("dotenv").config();
const notFound = require('./middleware/not-found')

const port = 3001;
// Middleware - Make sure to properly call express.json() as a function
app.use(express.json());
app.use(notFound);

// Route for "/hello" endpoint
app.get("/hello", (req, res) => {
  res.send("task manager");
});

// Mount the tasks route at "/api/v1/tasks"
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

start();
