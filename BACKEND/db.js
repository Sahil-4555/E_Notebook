const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Sahil4555:SahilSojitra@cluster0.9qbzj4j.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Sahil_4555! Welcome")
    })
}

module.exports = connectToMongo;