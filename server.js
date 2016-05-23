'user strict'

// set up ========================
const express  = require('express'),
     fs       = require('fs'), json,
    bodyParser = require('body-parser'),
    app      = express()

const port = 3000

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.post('/teste', (req, res, next) => {
//     console.log(req.headers);
//     console.log(req.body);
//     res.status(200).send()
// })

app.listen(port);
console.log("App listening on port " + port)
