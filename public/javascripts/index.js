function getWeatherData(city) {
  console.log(city);
  // get the data from the server
  $.post("/weather", {
    city:city
  })
    .done(function(task) {
      console.log(task);
      $("#result").html(
        "<p>"+task.weather+"</p>"
      );
    })
    .fail(function() {
      $("#result").html(
        "<div class='card'><div class='card-body text-danger'>Failed to fetch data. Please try again.</div></div>"
      );
    });
}



$(function() {
  $("#submit").click(function(ev) {
    ev.preventDefault();

    var city = $("#city").val();
    getWeatherData(city);
  });
  
});
