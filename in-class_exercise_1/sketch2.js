
var inc = 10;
var a = 10;
var c = 0;

var secs = 0;
var mins = 0;
var secD = .08;
var minD = .09;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(sin(a)*1000.0 - 900);

   var s = second();
   var m = minute();
   var h = hour();


  push();

  translate(width/2,height/2) // shift it over
  fill(255);

  var scaledS = map(s,0,60,0,360);
  var scaledM = map(m,0,60,0,360);

  for (var i=0; i<300; i+=5) {
  rect(i, i, i, 40+sin(a)*40.0);  // draw an anchor
  stroke (random(tan(a)*200.0 - 100));;
  strokeWeight(4);
  rotate(radians(s*6)); //rotate on the shift
  translate(40,40); // shift from anchor
  scale(.99,.99);
  a = a + inc;
    inc = -inc;
    a = -a;
  }

 pop();
//////////////////////////
 push();
  translate(width/2,height/2); // shift it over
  fill(random(cos(a)*300.0 - 100));

  for (var i=0; i<300; i+=5) {
  ellipse(i, 60, i, 60+cos(a)*60.0);  // draw an anchor
  stroke (random(cos(a)*300.0 - 100));
  strokeWeight(4);
  rotate(radians(m*6)); //rotate on the shift
  translate(900,40); // shift from anchor
  scale(1,1);
  a = a + inc;
    inc = -inc;
    a = -a;
  }

 pop();



 push();
 translate(mouseX,mouseY);
  drawhead();
 pop();

 secs+= secD;
 mins+= minD;

  }


function drawhead() {
  fill(random(cos(a)*300.0 - 100));
  rect(-25,-25,50,50);
}
