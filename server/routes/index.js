const express = require("express");
const app = express();

app.use( require("./authRoute") );
app.use( require("./usuariosRoutes") );
app.use( require("./categorias") );
app.use( require("./productosRoute") );
app.use( require("./uploadsRoute") );

module.exports = app;