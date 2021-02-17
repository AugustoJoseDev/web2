const express = require('express');

const Equipe = require('../model/Equipe')

const router = express.Router()

//Rota para acessar um índice com todas as paginas
//Endpoint: GET /
router.get('/',async (req,res)=>{

    const pages = JSON.parse(JSON.stringify(await Equipe.findAll({
        include:[{
            association:'Alunos',
            attributes: ['nome']
        },{
            association:'FigurasMitologicas',
            attributes: ['nome']
        }]
    })))
    
    return res.status(200).render('pages/index.ejs',{pages})
})

//Rota para acessar uma pagina de uma equipe 
//Endpoint: GET /pages/{id}
router.get('/pages/:id',async (req,res)=>{
    const {id} = req.params

    const data = JSON.parse(JSON.stringify(await Equipe.findOne({
        where:{
            id
        },
        include:[{
            association:'Alunos'
        },{
            association:'FigurasMitologicas'
        }]
    })))
    
    return res.status(200).render('pages/page.ejs',data)
})


//Exportação das rotas para a aplicação
module.exports = app => app.use('/', router)