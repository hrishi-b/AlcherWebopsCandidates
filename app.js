const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("./Task1/200106049"));

mongoose.connect('mongodb+srv://swc_project:DShtirzJvyJ8uGHQ@cluster0.wpzdf.mongodb.net/Alcher_Stream', { useNewUrlParser: true, useUnifiedTopology: true });
const favouriteSchema = new mongoose.Schema({
    id : Number,
    title : String,
    vote_average : Number,
    release_date : String,
    backdrop_path : String
});
const Favourite = mongoose.model("favourite", favouriteSchema); 
const movie1 =  new Favourite({
    id: 299534,
    title: "Avengers: Endgame",
    vote_average: 8.3,
    release_date: "2019-04-24",
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
});

movie1.save();

app.get("/", (req, res) => {
    res.sendFile("./Task1/200106049/alcher stream.html", {root:__dirname});
})

app.use((req, res) => {
    res.send("<h1>Error</h1>");
})

let  port=process.env.PORT;
if(port==null||port==""){
    port=3000;
}

app.listen(port, console.log(`Server has started at port:${port}`));