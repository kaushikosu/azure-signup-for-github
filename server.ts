const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// mongodb
mongoose.connect("mongodb://localhost:27017/myDB").catch((error: any) => { console.log(" connecting to mongodb failed !!")});
const postSchema = mongoose.Schema({
    title: String,
    description: String
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req: any, res: any) => {
    res.send("Express is here!!");
})

// production script
app.use(express.static('./client/build'));
app.get("*", (req: any , res: any) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(3001, () => {
    console.log("Server is listening on port 3001!!");
})

app.post("/create", (request: any, response: any) => {
    console.log(request.body);
    Post.create({
        title: request.body.title,
        description: request.body.description
    }).
    then((doc: any) => {
        console.log(doc);
    })
    .catch((error: any) => {
        console.log(error);
    })
});