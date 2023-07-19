const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  try {
    const search = "a";
    const products = await product
      .find({
        name: { $regex: search, $options: "i" }, // Fixed the position of the curly brace
      })
      .sort(name);
    res.status(200).json({ products });
    // Removed the 'name' property from here as it was causing a syntax error
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const { featured, company, name, sort,fields,numericFilters } = req.query;
    const queryObject = {}; // Corrected the variable name from 'querObject' to 'queryObject'

    if (featured) {
      queryObject.featured = featured === "true"; // Simplified the condition
    }

    if (company) {
      queryObject.company = company;
    }

    if (name) {
      queryObject.name = { $regex: search, $options: "i" };
    }
    if(numericFilters){
      const operationMap = {
        '>' : '$gt'
      }
  
    }

    let results = await product.find(queryObject);
    if (sort) {
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
    }
    else{
      result = result.sort(sortList)
    }
    if(fields){
      const fieldList = fields.split(',').join(' ')
      result = result.fields(fieldList)

    }
    const products = await results;
    console.log(req.query);
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
