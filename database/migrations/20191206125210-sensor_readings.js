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
      dateRecorded : {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('readings');
  }
};
