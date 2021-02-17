const {QueryInterface,DataTypes} = require('sequelize')

const raw = require('../raw.json')

module.exports = {
  
  /**
   * 
   * @param {QueryInterface} queryInterface 
   * @param {DataTypes} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {

    raw.forEach(async ({equipe,alunos,figuras}) =>{
      
      try {
        
        const equipeId = await queryInterface.bulkInsert('Equipes',[{
          nome:equipe
        }])

        alunos.forEach(async aluno=>{
            await queryInterface.bulkInsert('Alunos',[{
                nome:aluno,
                equipe: equipeId
            }])
        })

        figuras.forEach(async ({nome,resumo,descricao,img})=>{
            await queryInterface.bulkInsert('FigurasMitologicas',[{
                nome,
                resumo,
                descricao,
                image_url:img,
                equipe: equipeId
            }])
        })

      } catch (error) {
        console.log(error);
      }

    })

  },

  /**
   * 
   * @param {QueryInterface} queryInterface 
   * @param {DataTypes} Sequelize 
   */
  down: async (queryInterface, Sequelize) => {
      // FiguraMitologica.destroy()
      // Aluno.destroy()
      // Equipe.destroy()

      queryInterface.bulkDelete('FigurasMitologicas',{})
      queryInterface.bulkDelete('Alunos',{})
      queryInterface.bulkDelete('Equipes',{})

  }
};
