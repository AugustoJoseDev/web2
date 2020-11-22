const express = require("express")
const ejs = require('ejs')
const {getPageData} = require('./src/data') 
const pages = require('./src/pages.json')

const port = process.env.PORT || 5000

const app = express()

app.engine('html',ejs.renderFile)
app.set('view engine', 'html')

app.set('views',__dirname + "/views")
app.use('/', express.static(__dirname + "/public"))
app.use('/favicon.png', express.static(__dirname + "/favicon.png"))

app.use('/bootstrap.css', express.static(__dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"))

app.use('/bootstrap.js', express.static(__dirname + "/node_modules/bootstrap/dist/js/bootstrap.min.js"))
app.use('/jquery.js', express.static(__dirname + "/node_modules/jquery/dist/jquery.slim.min.js"))
app.use('/popper.js', express.static(__dirname + "/node_modules/popper.js/dist/popper.min.js"))


app.get('/',(req,res)=>{
    return res.render('index.ejs',{pages}).end()
})

app.get('/:page',(req,res)=>{
    const {page} = req.params
    return res.render('page.ejs',getPageData(page)).end()
})

app.get('/data/:page?',(req,res)=>{
    const {page} = req.params
    return res.json(getPageData(page)).end()
})

app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`)
})
