const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://user:postgres@localhost:5432/user");
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
