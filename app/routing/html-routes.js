//this routes are made user to click on page
let path = require("path");

module.exports = function(app) {

  app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/tables.html"));
  });
  app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/reserve.html"));
  });

  //if a user goes to anyother url apart from tables and reserve 
  //he goes to home page
  app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}