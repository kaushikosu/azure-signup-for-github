const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.get("/", (req: any, res: any) => {
    res.send("Express is here!!");
})

app.listen(3001, () => {
    console.log("Server is listening on port 3001!!");
})