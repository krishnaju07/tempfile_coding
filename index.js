const app = require('./app')
const mongoose = require("mongoose")

const username = "krishnaju0706";
const password = "Noluck";
const cluster = "cluster0";
const dbname = "sample_mflix"; 

const url = `mongodb+srv://${username}:${password}@${cluster}.k8rjx4d.mongodb.net/${dbname}?retryWrites=true&w=majority`;

async function connect() {
    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err)
    }
}

connect()

app.listen(8000,() => {
    console.log("Server connected to port 8000")
})