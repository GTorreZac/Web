const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/donation', (req, res) => {
    res.render('donation.ejs');
});

app.get('/books', (req, res) => {
    res.render('books.ejs');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);

});


