"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Projects", [
      {
        image: "Client/src/assets/2025-11.jpg",
        title: "بنك الملابس",
        description: "امنح الدفء لمن يحتاج من خلال التبرع.",
        goal: 12000,
        raised: 6000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Projects", null, {});
  },
};
