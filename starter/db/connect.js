const mongoose = require('mongoose');


//connecting to db
const connectDb = (uri) =>{
 return mongoose.connect(uri)

}

module.exports = connectDb;