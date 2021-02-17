const express = require("express")
const path = require('path')
const ejs = require('ejs')

/**
 * 
 * @param {express.Application} app 
 */
module.exports = app =>{

    //configurações do ejs
    app.engine('ejs',ejs.renderFile)
    app.set('view engine', 'ejs')

    app.set('views',path.resolve('src/app/views'))

    //rotas publicas
    app.use('/', express.static(path.resolve('public')))
    
    //Importações do bootstrap
    app.use('/bootstrap.css', express.static(path.resolve( "node_modules/bootstrap/dist/css/bootstrap.min.css")))

    app.use('/bootstrap.js', express.static(path.resolve( "node_modules/bootstrap/dist/js/bootstrap.min.js")))
    app.use('/jquery.js', express.static(path.resolve( "node_modules/jquery/dist/jquery.slim.min.js")))
    app.use('/popper.js', express.static(path.resolve( "node_modules/popper.js/dist/popper.min.js")))

    //Importando controladores
    require('./app/controller/pagesController')(app)

}