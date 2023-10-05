const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send("It's all about the soul");
  })

app.get('/secure', (req, res) => {
    res.send("This is server location");
  })

app.listen(3000,() =>{
    console.log("Listening on port 3000");
})