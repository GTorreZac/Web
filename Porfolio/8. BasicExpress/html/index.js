const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, './html') })
});


app.post('/result', function (req, res) {
    var Weight = Number(req.body.weight);
    var Height = Number(req.body.height);
    var BMI = (Weight / ((Height) ^ 2)) * 10000;
    res.send("<h1> Your BMI is:  " + BMI + "</h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});