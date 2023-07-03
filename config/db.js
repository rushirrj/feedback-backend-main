const mongoose = require("mongoose")
const dotenv = require('dotenv');

//configuration mongodb with localserver
function connect(){
    
    dotenv.config();

    const mongoUrl = "mongodb+srv://rrj:rrj@cluster0.h47lits.mongodb.net/";
    
    mongoose.set('strictQuery', false);
    
    mongoose
        .connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database Connected Successfully");
        })
        .catch((err) => {
            console.log("Database Not Connected Successfully : " + err);
        });
    
}

module.exports = connect  