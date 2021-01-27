const express = require("express");
const app = express();

app.use( require("./authRoute") );
app.use( require("./usuariosRoutes") );
app.use( require("./categorias") );
app.use( require("./productosRoute") );

module.exports = app;