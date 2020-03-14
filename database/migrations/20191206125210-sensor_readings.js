'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('readings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      temperatureC: Sequelize.FLOAT(),
      voltage: Sequelize.FLOAT(),
      current_1: Sequelize.FLOAT(),
      current_2: Sequelize.FLOAT(),
      current_3: Sequelize.FLOAT(),
      current_4: Sequelize.FLOAT(),
      current_5: Sequelize.FLOAT(),
      current_6: Sequelize.FLOAT(),
      power_1: Sequelize.FLOAT(),
      power_2: Sequelize.FLOAT(),
      power_3: Sequelize.FLOAT(),
      power_4: Sequelize.FLOAT(),
      power_5: Sequelize.FLOAT(),
      power_6: Sequelize.FLOAT(),
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('readings');
  }
};
