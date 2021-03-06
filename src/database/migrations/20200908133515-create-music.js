module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
    .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
    .then(() => queryInterface.createTable("Music", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      countryId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      information: {
        allowNull: false,
        type: Sequelize.STRING(5000),
      },
      gallery: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })),
  down: async queryInterface => queryInterface.dropTable("Music"),
};
