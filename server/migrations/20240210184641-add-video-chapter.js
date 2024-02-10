'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Chapters", "videoChannelId", {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn("Chapters", "videoThumbNail", {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn("Chapters", "videoTitle", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Chapters", "videoChannelId");
    await queryInterface.removeColumn("Chapters", "VideoThumbNail");
    await queryInterface.removeColumn("Chapters", "videoTitle");
  }
};
