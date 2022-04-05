const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { geoCode } = require("./utils/geocode");
const { foreCast } = require("./utils/forecast");

const app = express();

//Define paths for express config
const publicPathDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//setups handlebar engines and view locations
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

//setup static directory to serve
app.use(express.static(path.join(__dirname, publicPathDirectory)));

app.get("", (req, res) => {
  res.render("index", { title: "Weather app", name: "Riyaz Ahamed" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "My about Page sdfdsf", name: "About an app" });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    res.send({
      error: "You must send address data",
    });
  }
  geoCode(req.query.address, (error, response) => {
    if (error) {
      res.send({ error: error });
    } else {
      foreCast(
        response[0].center[1],
        response[0].center[0],
        (error, response) => {
          if (error) {
            res.send({ error: error });
          } else {
            res.send({ data: response });
          }
        }
      );
    }
  });
});

app.get("/products", (req, res) => {
  console.log("req", req.query);
  if (!req.query.search) {
    res.send({
      error: "You must send a correct data",
    });
  }

  res.send({
    products: [],
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "Sorry!, My page is not found",
    name: "Page is not visible",
  });
});

app.listen("3000", () => {
  console.log("server is up");
});
