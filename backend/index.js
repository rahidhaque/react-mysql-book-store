const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0644Cybercity$',
    database: 'test'
})

app.use(express.json());
app.use(cors());

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

app.post('/books', (req, res) => {
    const query = 'INSERT INTO books (`title`, `desc`,`cover`) VALUES (?)';
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];

    db.query(query, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            return res.json("Book has been successfully created");
        }
    })
})

app.listen(4000, () => {
    console.log("Connected to backend!!")
})