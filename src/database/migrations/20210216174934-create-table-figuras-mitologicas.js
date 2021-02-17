const {QueryInterface,DataTypes} = require('sequelize')

module.exports = {
  
  /**
   * 
   * @param {QueryInterface} queryInterface 
   * @param {DataTypes} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('FigurasMitologicas', {
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:false
      },
      resumo: {
        type:Sequelize.TEXT,
        allowNull:false
      },
      descricao: {
        type:Sequelize.TEXT,
        allowNull:false
      },
      image_url: {
        type:Sequelize.STRING,
        allowNull:false
      },
      equipe: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:'equipes',
          key:'id'
        }
      }
    });
  },

  /**
   * 
   * @param {QueryInterface} queryInterface 
   * @param {DataTypes} Sequelize 
   */
  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.dropTable('FigurasMitologicas');
    
  }
};
