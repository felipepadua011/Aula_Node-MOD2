const express = require('express');
const app = express();
const porta = 3000;
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render("index", {titulo: "Olá bluemmers"});
});

app.get("/pagina", function (req, res) {
    res.render("pagina");
});

// app.post

// app.put

// app.delete

app.listen(porta, () => console.log(`Servidor rodando em http://localhost:${porta}`));