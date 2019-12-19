const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:1004@localhost:5432/aponia"
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
const User = sequelize.define("user", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 6
    }
  }
});
module.exports = {
  User,
  sequelize
};
