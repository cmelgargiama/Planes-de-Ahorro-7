module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Role", {
      rl_codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      rl_descripcion: {
        type: Sequelize.STRING
      }
    });
    return Role;
  };