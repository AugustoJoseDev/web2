const {Sequelize} = require('sequelize')
const config = require('../../config/database.json');

const Equipe = require('../app/model/Equipe');
const Aluno = require('../app/model/Aluno');
const FiguraMitologica = require('../app/model/FiguraMitologica');

const database = new Sequelize(config);

async function testConnection(){ 
    try {
        await database.authenticate();

        console.log('Conexão com o banco de dados realizada com sucesso!');

    } catch (error) {
        return console.error('Não foi possivel conerctar-se ao banco de dados.');
    }
}

testConnection()

Equipe.init(database)
Aluno.init(database)
FiguraMitologica.init(database)

Aluno.associate({Equipe,Aluno,FiguraMitologica})
Equipe.associate({Equipe,Aluno,FiguraMitologica})
FiguraMitologica.init(database)

module.exports = database