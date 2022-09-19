const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0644Cybercity$',
    database: 'test'
})

app.get("/", (req, res) => {
    res.json("hello this is the backend");
})


app.listen(4000, () => {
    console.log("Connected to backend!!")
})