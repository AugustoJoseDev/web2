const express = require("express")

const app = express()

app.get('/', (req, res) => {

    return res.sendFile(__dirname + "/public/index.html")

})

app.listen(5000, () => {

    console.log("Escutando em http://localhost:5000")

})