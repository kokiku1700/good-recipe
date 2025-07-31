require('dotenv').config({ path: '../.env'});

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.REACT_APP_PORT;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Server Response Success!!");
});

app.listen(PORT, () => {
    console.log(`Server Start: http://localhost:${PORT}/`);
});