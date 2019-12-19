const express = require("express");
const { User } = require("./db/models");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
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
    res.status(200).send("El usuario fue creado: " + result.id);
  } catch (error) {
    res.status(500).send(error);
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
  if (user) res.json({ user });
  else res.json({ user: false });
});
app.post("/exist", async (req, res) => {
  const { username, email } = req.body;
  console.log(req.body);
  if (username) {
    const userExist = await User.findOne({
      where: {
        username
      }
    });
    if (userExist) res.json({ username: true });
    else res.json({ username: false });
  } else {
    const emailExist = await User.findOne({
      where: {
        email
      }
    });
    if (emailExist) res.json({ email: true });
    else res.json({ email: false });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
