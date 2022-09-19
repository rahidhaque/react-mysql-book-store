const e = require('express');
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

app.get("/books", (req, res) => {
    const query = 'SELECT * FROM test.books';
    db.query(query, (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            return res.json(data);
        }
    })
})


app.listen(4000, () => {
    console.log("Connected to backend!!")
})