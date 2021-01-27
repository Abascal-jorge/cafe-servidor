const express = require("express");
const { verificaToken } = require("../middlewares/authentication");
const app = express();


app.post("/productos", verificaToken, ( req, res ) => {
    res.send("Desde agregar productos");
});

module.exports = app;