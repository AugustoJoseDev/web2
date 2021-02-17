const {Model,Sequelize,DataTypes,ModelCtor} = require('sequelize')

class Aluno extends Model{

    /**
     * 
     * @param {Sequelize} sequelize 
     */
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize,
            modelName:'Alunos'
        })


    }

    static associate(models){
        this.belongsTo(models.Equipe,{
            foreignKey:'equipe',
            as:'Equipe'
        })
    }
}

module.exports = Aluno