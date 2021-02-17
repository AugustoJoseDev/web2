const express = require("express")
const app = express()

//inicialiando banco de dados
require('./database')

//importando rotas
require('./router')(app)

const port = process.env.PORT || 3333
app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`)
})
