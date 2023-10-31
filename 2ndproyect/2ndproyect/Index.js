const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
// Configure the static content folder
app.use(express.static('public'));
// Configure the calls to transform them into JSON format
app.use(bodyParser.urlencoded({ extended: false }));
// Configure the use of ejs
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");


// Each page is configured and declared on the server and rendered
app.get('/', (req, res) => {
    res.render('home',{active: "home"});
});

app.get('/donation', (req, res) => {
    res.render('donation',{active: "donation"});
});

app.get('/books', (req, res) => {
    res.render('books',{active: "books"});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);

});


