'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'João Silva',
        ativo: true,
        email: 'joao@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Maria Oliveira',
        ativo: true,
        email: 'maria@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Pedro Santos',
        ativo: true,
        email: 'pedro@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Ana Sousa',
        ativo: true,
        email: 'ana@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Luís Costa',
        ativo: true,
        email: 'luis@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Marta Ferreira',
        ativo: true,
        email: 'marta@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Carlos Rodrigues',
        ativo: true,
        email: 'carlos@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Sofia Alves',
        ativo: true,
        email: 'sofia@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Paulo Gomes',
        ativo: true,
        email: 'paulo@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Isabel Pereira',
        ativo: true,
        email: 'isabel@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Rafael Fernandes',
        ativo: true,
        email: 'rafael@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
        nome: 'Cláudia Almeida',
        ativo: true,
        email: 'claudia@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
        }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});     
  }
};
