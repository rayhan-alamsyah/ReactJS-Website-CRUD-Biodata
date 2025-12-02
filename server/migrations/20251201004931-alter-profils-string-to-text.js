'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('profils', 'judul', {
      type: Sequelize.TEXT,
      
    });

    await queryInterface.changeColumn('profils', 'text', {
      type: Sequelize.TEXT,
      
    });

    await queryInterface.changeColumn('profils', 'gambar', {
      type: Sequelize.TEXT,
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('profils', 'judul', {
      type: Sequelize.STRING,
      
    });

    await queryInterface.changeColumn('profils', 'text', {
      type: Sequelize.STRING,
      
    });

    await queryInterface.changeColumn('profils', 'gambar', {
      type: Sequelize.STRING,
      
    });
  }
};
