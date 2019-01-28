const axios = require("axios");
const router = require('express').Router();

require('dotenv').config();
const keys = require('../../keys.js');

const google_book_key = keys.googlebook;
console.log(`google key: ${google_book_key.key}`);

// Route /api/books
router.get('/', (req, res) => {
    console.log('/api/books');

    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`;
    axios.get(url)
        .then(response => {
            res.json(response.data);
        })
        .catch(err => res.json(err.message));
});

module.exports = router;