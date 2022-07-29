const config = require("../config/dbConfigSequelize");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/userModel.js")(sequelize, Sequelize);
db.role = require("../models/roleModel.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "usuarios_has_roles",
  foreignKey: "rl_codigo",
  otherKey: "us_login"
});
db.user.belongsToMany(db.role, {
  through: "usuarios_has_roles",
  foreignKey: "us_login",
  otherKey: "rl_codigo"
});
db.ROLES = [];
module.exports = db;