'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('projeks', 'judul', {
      type: Sequelize.TEXT
    });
    await queryInterface.changeColumn('projeks', 'text', {
      type: Sequelize.TEXT
    });
    await queryInterface.changeColumn('projeks', 'nama_link', {
      type: Sequelize.TEXT
    });
    await queryInterface.changeColumn('projeks', 'masukan_link', {
      type: Sequelize.TEXT
    });
    // gambar tetap STRING
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('projeks', 'judul', {
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('projeks', 'text', {
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('projeks', 'nama_link', {
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('projeks', 'masukan_link', {
      type: Sequelize.STRING
    });
  }
};
