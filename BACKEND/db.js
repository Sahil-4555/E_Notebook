const mongoose = require('mongoose');
const mongoURI = "<Provide the link of Your Database here>"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Sahil_4555! Welcome")
    })
}

module.exports = connectToMongo;
