const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const pool = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', async (req, res) => {
    try {
        // Get connection
    const conn = await pool.getConnection();

    // Create a new query
    const query = 'select * from products';

    // executing the query
    const rows = await conn.query(query);

    // response to the client
    res.status(200).json(rows);
    } catch (error) {
        console.log(error);
    }
});

app.post('/new-product', async (req, res) => {
    try {
    console.log(req.body);

        // Get connection
    const conn = await pool.getConnection();

    // Create a new query
    const query = 'INSERT INTO products VALUES (?)';

    // executing the query
    const result = await conn.query(query, [req.body.name]);

    // response to the client
    res.status(200).json(result);
} catch (error) {
    console.log(error);
}
});

app.listen(3000, () => {
    console.log('server on port', 3000);
});