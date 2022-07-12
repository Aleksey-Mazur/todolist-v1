const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-UA", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});
