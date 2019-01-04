var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=8e7b7c365a4ca8c84c101acab72f91c8';
var units = '&units=metric';

var input;

var x = 100;
var y = 300

var inc = 5;
var a = 5;

// var scaledS =(s,0,60,0,360);

function setup () {
  createCanvas(500,300);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');

  // if (weather) {
  //   var temp = weather.main.temp;
  //   var humi = weather.main.humidity;
}

function weatherAsk () {
  var url = api + input.value() + apiKey + units;
  loadJSON(url,gotData);
  }

function gotData (data) {
  weather = data;
}

function draw () {
    background(50);

//     push();
//     if (weather) {
//     for (var i=0; i<50; i+=10) {
//     fill(255);
//     translate(10,10);
//     rect(x,y,weather.main.temp,weather.main.temp);
//     rect(y,x,weather.main.humidity,weather.main.humidity);
//     // ellipse(x,y, weather.main.humidity, 40+sin(a)*40);  // draw an anchor
//     stroke (random(tan(a)*weather.main.temp - weather.main.humidity));;
//     strokeWeight(10);
//     rotate(weather.wind.deg); //rotate on the shift
//     // translate(40,40); // shift from anchor
//     scale(.6,.6);
//     a = a + inc;
//       inc = -inc;
//       a = -a;
//     }
//   }
//     pop();
// //
    push();
    if (weather) {
    for (var i=1; i<50; i++) {
    fill(random(0,255),98);
    translate(200,200);
    rect(weather.main.temp,weather.main.temp,weather.main.humidity,weather.main.humidity);
    // ellipse(x,y, weather.main.humidity, 40+tan(a)*40);  // draw an anchor
    stroke (random(cos(a)*300.0 - 100));
    strokeWeight(10);
    rotate(weather.wind.speed); //rotate on the shift
    // translate(40,40); // shift from anchor
    a = a + inc;
      inc = -inc;
      a = -a;
    }
  }
  pop();

  push();
  if (weather) {
  for (var i=2; i<20; i++) {
  fill(255,90);
  stroke (random(tan(inc)*300.0 - 50));;
  strokeWeight(2);
  rect(2,50,weather.main.humidity,i);
  stroke (random(cos(a)*300.0 - 100));;
  rect(2,110,weather.main.temp,i);
  stroke (random(sin(inc)*400.0 - 30));;
  rect(2,170,weather.wind.speed,i);
  stroke (random(tan(a)*600.0 - 50));;
  rect(2,240,weather.wind.deg,i);
  // ellipse(x,y, weather.main.humidity, 60+cos(a)*60.0);  // draw an anchor
  // translate(40,40); // shift from anchor
  a = a + inc;
    inc = -inc;
    a = - a
  }
}

pop();

push();
if (weather) {
textSize(15);
  fill(255);
  text("temp: " + weather.main.temp,5,100);
  text("humidity: " + weather.main.humidity,5,40);
  text("wind speed: " + weather.wind.speed,5,160);
  text("wind deg: " + weather.wind.deg,5,220);
  text(weather.name,5,20)
}
pop();

}
