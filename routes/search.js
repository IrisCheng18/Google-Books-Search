const axios = require("axios");
const router = require('express').Router();

require('dotenv').config();
const keys = require('../keys.js');

const google_book_key = keys.googlebook;
// console.log(`google key: ${google_book_key.key}`);

// Route /search?q=req.query
router.get('/', (req, res) => {
    console.log('/search');

    // const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`;
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${req.params.searchTerm}`;
    const url = 'https://www.googleapis.com/books/v1/volumes?';
    console.log(req.query);
    axios.get(url, {params: {q: req.query}})
        .then(response => {
            res.json(response.data);
        })
        .catch(err => res.json(err.message));
});



module.exports = router;