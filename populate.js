require("dotenv").config({ path: "./starter/.env" });
const connectDb = require("./starter/connect");
const product = require("./models/product");
const jsonProduct = require("./product.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await product.create(jsonProduct)
    console.log("success");
    process.exit(0)
  } catch (error) {
    console.log(error);
  }
};

start();
