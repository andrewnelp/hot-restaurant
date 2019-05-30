const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require ("path");
const PORT = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//including html routes into the server file
//(app) means express-routes first because we first pull data to display in html pages;
//api
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));