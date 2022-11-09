const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() =>
    app.listen(port, () => {
      console.log("Connected to MongoDB");
      console.log(`Server is running on port ${port}`);
    })
  )
  .catch((err) => console.log(err));

const recipeModel = new mongoose.Schema({
  title: { type: String },
  ingredients: { type: Array },
  method: { type: String },
  time: { type: String },
});

const Recipe = mongoose.model("Recipe", recipeModel);

// Middleware
app.use(bodyParser.json());

// Routes

app.get("/api/recipes", (req, res) => {
  Recipe.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/api/create", (req, res) => {
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    method: req.body.method,
    time: req.body.time,
  });

  recipe.save();
});
