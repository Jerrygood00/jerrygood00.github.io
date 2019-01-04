var xoffset = 50;
var yoffset = 50;
var inc = 10;
var a = 12;
var c = 0;

var secs = 0;
var mins = 0;
var secD = .08;
var minD = .09;

function setup() {
  createCanvas(1000, 1000);
  //noLoop();
}

function draw() {
  background(50);
   // if (s===59) {
     // background(50);
// }
   var s = second();
   var m = minute();
   var h = hour();

  // draw a face!
  // ellipse(xoffset,yoffset, 40, 40);
  // ellipse(xoffset+100,yoffset, 40, 40);
  // arc(xoffset+50, yoffset+50, 100, 50, 0, PI);

//////////////////////////
push();
// var f = 0;
  //rotate(.1)
  translate(width/2,height/2) // shift it over
  fill(200);
  for (var i=0; i<300; i+=5) {
  rect(i, i, i, 40+sin(a)*40.0);  // draw an anchor
  stroke (random(tan(a)*200.0 - 100));;
  strokeWeight(5);
  rotate(radians(h*6)); //rotate on the shift
  translate(40,40); // shift from anchor
  scale(1,1);
  a = a + inc;
    inc = -inc;
    a = -a;
 // translate(width/2,height/2); // shift it over
 // fill(random(cos(a)*300.0 - 100));
 //
 // for (var i=0; i<300; i+=5) {
 // rect(30+tan(a)*-30.0, 30+tan(a)*-30.0,i, 60+cos(a)*60.0);  // draw an anchor
 // stroke (random(cos(a)*300.0 - 100));
 // strokeWeight(4);
 // rotate(radians(h*6)); //rotate on the shift
 // translate(30+tan(a)*30.0,60+cos(a)*60.0); // shift from anchor
 // scale(.99,.99);
 // }
}
 pop();

 push();
 // var f = 0;
   //rotate(.1)
   translate(width/2,height/2) // shift it over
   fill(random(60+cos(a)*60.0), 220);
   for (var i=0; i<300; i+=5) {
   ellipse(i, i, i, 40+sin(a)*40.0);  // draw an anchor
   stroke (random(tan(a)*200.0 - 100));;
   strokeWeight(5);
   rotate(radians(m*6)); //rotate on the shift
   translate(40,40); // shift from anchor
   scale(.9988,.9988);
   a = a + inc;
     inc = -inc;
     a = -a;
  }
 pop();

 push();
  //rotate(.1)
 // var scaledS = map(s,0,60,0,360);
 // var scaledM = map(s,0,60,0,360);
 translate(width/2,height/2); // shift it over
 fill(random(cos(a)*300.0 - 100));

 for (var i=0; i<300; i+=5) {
 rect(30+tan(a)*-30.0, 30+tan(a)*-20.0,i, 60+cos(a)*60.0);  // draw an anchor
 stroke (random(cos(a)*300.0 - 100));
 strokeWeight(4);
 rotate(radians(s*6)); //rotate on the shift
 translate(30+tan(a)*30.0,60+cos(a)*60.0); // shift from anchor
 scale(.99,.99);
 // a = a + inc;
 //   inc = -inc;
 //   a = -a;
 }
pop();
 //scaling and mapping time to RGB color values
//  var scaledCS = map(s,0,60,0,255);
//  var scaledXS = map(s,0,60,0,width);
//
//  var scaledMS = map(m,0,60,0,height);
//
// push();
// fill(scaledCS,0,0);
// translate(scaledMS,400);
//  rect (0,0,50,50);
//  ellipse(10,0,10,10);
// pop(0);


 // push();
 // translate(mouseX,mouseY);
 //  drawhead();
 // pop();
 mins+= minD;
 secs+= secD;
 fill(255);

 text('Current second: \n' + s, 5, 50);
 text('Current minute: \n' + m, 5, 90);
 text('Current hour:\n' + h, 5, 130);
  }


// function drawhead() {
//   noFill();
//   stroke(0);
//   strokeWeight(8);
//   ellipse(0,0, 40, 40);
//   ellipse(0+100,0, 40, 40);
//   arc(0+50, 0+50, 100, 50, 0, PI);
// }
