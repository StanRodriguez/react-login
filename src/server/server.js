const express = require("express");
const { User, sequelize } = require("./db/models");
const bodyParser = require("body-parser");
const op = sequelize.Op;
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post("/create", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    const result = await User.create({
      firstName,
      lastName,
      username,
      email,
      password
    });
    res.send("El usuario fue creado:", result.id);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  const user = await User.findOne({
    where: {
      username,
      password
    }
  });
  if (user) res.send("Good");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));