/// this has a multiple call example ( loadJSON called 4 times) then a method to arrange and show
// WARNING this may not work cause the API key that is used is mine and it might be blocked when you use it.
// to use it go to the website and get your own API key

var Citys = ["San Jose","London", "New York","Santa Cruz"];


whichCity = 0;

function setup() {
  noLoop();


  for (var i = 0; i < Citys.length;i++) {

    var tempUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + Citys[i]
    + '&APPID=8e7b7c365a4ca8c84c101acab72f91c8';
    console.log(tempUrl);
    loadJSON(tempUrl, drawWeather);

  }


  //   var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=London'+
  // '&APPID=abb7d02485932f2ed01e1c85911c483e';  // put your app id here
  // var url3 = 'http://api.openweathermap.org/data/2.5/weather?q=New York'+
  // '&APPID=abb7d02485932f2ed01e1c85911c483e';  // put your app id here
  //
  //
  // loadJSON(url, drawWeatherSJ);
  // loadJSON(url2, drawWeatherLO);
  // loadJSON(url3, drawWeatherNY);

  console.log("loading data");
}





function draw() {
  createCanvas(500,300);
  //background(200);
}



function drawWeather(weather) {


   whichCity++;


    push();
    translate(25,( 60*whichCity)-40);

  console.log(weather);
  var ftemp = round((int(weather.main.temp) * (9/5)) + -459.67);
  console.log(ftemp);



  //text(weather.name + " Temp-- " + ftemp ,0,0);



  colorMode(HSB, 255);
  var tempScale = map(ftemp,0,120,128,255)
  var c = color(tempScale, 255, 255);
  fill(c);

  ellipse(0,0, 40,40);
  fill(59);
//  text(weather.name + " Wind Speed-- " + weather.wind.speed ,0,0);
  //text(weather.name + " Wind Speed-- " + weather.wind.speed ,0,0);
  fill(59);


    text(weather.name ,0,0);
  rect(0,0, weather.wind.speed * 8, 5);

  translate(100,0);
  var forecast = weather.weather[0].description ;
    fill(20,0,0);
  //text(forecast,50,0);

  if (forecast === "broken clouds") {

     cloudmaker(30);

  }
  if (forecast === "few clouds") {

     cloudmaker(20);

  }


  pop();
  pop();

}

   //"broken clouds", "few"





function cloudmaker(amount) {

    for (var i = 0; i < amount;i++) {
      fill(random(200,255),90);
      rect(random(-50,100),random(-10,100), random(40),random(40),10,10);
      ellipse(random(-10,100),random(-50,100),random(40),random(40));
    }

}
