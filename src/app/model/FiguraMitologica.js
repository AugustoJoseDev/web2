const {Model,Sequelize,DataTypes} = require('sequelize')


class FiguraMitologica extends Model{

    /**
     * 
     * @param {Sequelize} sequelize 
     */
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            resumo: DataTypes.TEXT,
            descricao: DataTypes.TEXT,
            image_url: DataTypes.STRING,
            equipe:DataTypes.INTEGER
        },{
            sequelize,
            modelName:'FigurasMitologicas'
        })
    }

    static associate(models){
        this.belongsTo(models.Equipe,{
            foreignKey:'equipe',
            as:'Equipe'
        })
    }
}

module.exports = FiguraMitologica