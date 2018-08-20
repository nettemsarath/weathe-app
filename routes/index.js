
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var createError = require("http-errors");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "weather" });
});

router.post("/weather", function(req, res, next) {
  var request=require("request");
  let apiKey = "11c3d8afd594ca6938108e16679c7cf1";
  let city = req.body.city;

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  request(url, function(err, response, body) {
    if (err) {
      next(err);
    } else {
      let weather = JSON.parse(body);
      if (weather.cod === 200) {
        res.json({
          weather: weather.main.temp
        });
      } else {
        next(createError.NotFound("City not found"));
      }
    }
  });
});
module.exports = router;
