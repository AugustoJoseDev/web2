const {Model,Sequelize,DataTypes} = require('sequelize')


class Equipe extends Model{

    /**
     * 
     * @param {Sequelize} sequelize 
     */
    static init(sequelize){
        super.init({
            nome:DataTypes.STRING
        },{
            sequelize,
            modelName:'Equipes'
        })
    }

    static associate(models){
        this.hasMany(models.Aluno,{
            foreignKey:'equipe',
            as:'Alunos'
        })
        
        this.hasMany(models.FiguraMitologica,{
            foreignKey:'equipe',
            as:'FigurasMitologicas'
        })
    }

}

module.exports = Equipe