const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("ejs",require("ajs").renderFile);
app.set("view engine", "ejs");

const family =["Diana", "Sergio", "Carmen","Vanessa","Gabriel"];

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
});

const url= "https://v2-jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political" ;

app.get("/joke", (req, res) => {
  https.get(url, (response) => {
    console.log(response.statusCode);
    if (response.statusCode === 200) {
      response.on("data", (data) => {
        console.log(data);
        const joke = JSON.parse(data);
        console.log(joke);
      });
    } else {
      throw new Error("Bad response");
    }
  });
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

app.use((err, req, res, next)=> {
  console.error(err.stack);
  res
  .status(500)
  .render("error",{
    message: "There was an error in the processing of your request",
  });
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});


app.get('/secure', (req, res) => {
  res.send("This is a secure location");
});