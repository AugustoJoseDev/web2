const express = require("express")

const app = express()

app.use('/', express.static(__dirname + "/public"))

app.use('/js', express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use('/css', express.static(__dirname + "/node_modules/bootstrap/dist/css"))

app.listen(5000, () => {

    console.log("Escutando em http://localhost:5000")

})

// https://getbootstrap.com/docs/4.5/components/navbar