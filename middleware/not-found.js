const notFound = (req,res) =>{
    res.send(404).send("not exist")
} 

module.exports = notFound;