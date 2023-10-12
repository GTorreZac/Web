const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("ejs",require("ajs").renderFile);
app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/about", (req, res) => {
  var name = req.query.name;
  console.log(name);
  res.send("<h1>Hello " + name + ". </h1>");
});

app.get("/about/:name/detail", (req, res) => {
  var name = req.params.name;
  console.log(name);
  res.send("<h1>Hello " + name + " from parameter in URL. </h1>");
});

app
  .route('/login')
  .get((req, res) => {
    var username = req.query.username;
    var password = req.query.password;

    res.send("<h1>Hello " + username + " you are now logged in</h1>");
  })
  .post((req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    res.send("<h1>Hello " + username + " you are now logged in POST</h1>");
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});


app.get('/secure', (req, res) => {
  res.send("This is a secure location");
});