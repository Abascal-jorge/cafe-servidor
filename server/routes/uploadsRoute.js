const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload({ useTempFiles: true}));

app.post('/upload', (req, res) => {

    let extensionArchivo = req.files.archivo.name.split(".")[1];
    let nombreArchivo = req.files.archivo.name.split(".")[0];


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            error: {
                message: "No estas subiendo ningun archivo o imagen"
            }
        });
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let archivo = req.files.archivo;

    // Use the mv() method to place the file somewhere on your server
    archivo.mv(`uploads/${nombreArchivo}.${extensionArchivo}`, (error)  => {

            if(error){
                return res.status(500).json({
                    ok: false,
                    error
                });
            }

            res.json({
                ok: true,
                message: "Archivo creado correctamente"
            });
    });

});

module.exports = app;