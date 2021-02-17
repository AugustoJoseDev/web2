const {QueryInterface,DataTypes} = require('sequelize')

module.exports = {
  
  /**
   * 
   * @param {QueryInterface} queryInterface 
   * @param {DataTypes} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Alunos', {
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
      equipe: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:'Equipes',
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
    
    return await queryInterface.dropTable('Alunos');
    
  }
};
