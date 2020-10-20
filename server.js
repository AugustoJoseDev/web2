const express = require("express")

const app = express()

app.use('/', express.static(__dirname + "/public"))
app.use('/favicon.png', express.static(__dirname + "/favicon.png"))

app.use('/bootstrap.css', express.static(__dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"))

app.use('/bootstrap.js', express.static(__dirname + "/node_modules/bootstrap/dist/js/bootstrap.min.js"))
app.use('/jquery.js', express.static(__dirname + "/node_modules/jquery/dist/jquery.slim.min.js"))
app.use('/popper.js', express.static(__dirname + "/node_modules/popper.js/dist/popper.min.js"))


app.listen(5000, () => {
    console.log("Escutando em http://localhost:5000")
})
