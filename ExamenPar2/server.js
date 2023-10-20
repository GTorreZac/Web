const https = require("https");
const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
let charactersAPI1 = [];
let charactersAPI2 = [];
let indexAPI1 = 0;
let indexAPI2 = 0;

app.get("/api1", (req, res) => {
    fetch('https://thronesapi.com/api/v2/Characters')
        .then((response) => response.json())
        .then((body) => {
            charactersAPI1 = body;
            res.render("character.ejs", { charname: charactersAPI1[0] });
        });
});

app.get("/api2", (req, res) => {
    fetch('https://anapioficeandfire.com/api/characters')
        .then((response) => response.json())
        .then((body) => {
            charactersAPI2 = body;
            res.render("character.ejs", { charname: charactersAPI2[0] });
        });
});

app.post('/api1/previous', (req, res) => {
    indexAPI1--;
    indexAPI1 = indexAPI1 < 0 ? (charactersAPI1.length - 1) : indexAPI1;
    res.render("character.ejs", { charname: charactersAPI1[indexAPI1] });
});

app.post('/api1/next', (req, res) => {
    indexAPI1++;
    indexAPI1 = indexAPI1 >= charactersAPI1.length ? 0 : indexAPI1;
    res.render("character.ejs", { charname: charactersAPI1[indexAPI1] });
});

app.post('/api2/previous', (req, res) => {
    indexAPI2--;
    indexAPI2 = indexAPI2 < 0 ? (charactersAPI2.length - 1) : indexAPI2;
    res.render("character.ejs", { charname: charactersAPI2[indexAPI2] });
});

app.post('/api2/next', (req, res) => {
    indexAPI2++;
    indexAPI2 = indexAPI2 >= charactersAPI2.length ? 0 : indexAPI2;
    res.render("character.ejs", { charname: charactersAPI2[indexAPI2] });
});

app.post('/search', (req, res) => {
    const name = req.body.name;
    let searchIndex = 0;
    for (let i = 0; i < charactersAPI1.length; i++) {
        if (charactersAPI1[i].fullName === name || charactersAPI1[i].firstName === name || charactersAPI1[i].lastName === name) {
            searchIndex = i;
            break;
        }
    }
    for (let i = 0; i < charactersAPI2.length; i++) {
        if (charactersAPI2[i].fullName === name || charactersAPI2[i].firstName === name || charactersAPI2[i].lastName === name) {
            searchIndex = i;
            break;
        }
    }
    if (searchIndex === 0) {
        res.render("error.ejs", { message: "No se encontraron resultados." });
    } else {
        if (searchIndex < charactersAPI1.length) {
            res.render("character.ejs", { charname: charactersAPI1[searchIndex] });
        } else {
            res.render("character.ejs", { charname: charactersAPI2[searchIndex - charactersAPI1.length] });
        }
    }
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});
