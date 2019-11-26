
/*! Global values */
var wall;
var wall2;
var wall3;
var wall4;
var avetar;
var avetar2;
var avetar1Image, message1Image, message2Image, message3Image, message4Image, message5Image, message6Image, message7Image, message8Image, message9Image, backgroundImage;
var avetar2Image;
var message1;
var message2;
var message3;
var message4;
var message5;
var message6;
var message7;
var message8;
var message9;
var MARGIN = 40;
var slider;
var slider2;
var song;
var song2;

/*! Tried preload to fix sound unable to display */
function preload() {
  song = loadSound('Chase - AShamaluevMusic.mp3');
  song2 = loadSound('Gta 5 Wasted.mp3');
}

function setup() {

createCanvas(1300,1300);

/*! loop sound */
song.loop();

/*! loading image */
avetar1Image = loadImage("avetar1.png");
avetar2Image= loadImage("avetar2.png");
wallImage= loadImage("wall.png");
wall2Image=loadImage("wall2.png");
wall3Image=loadImage("vwall3.png");
wall4Image=loadImage("vwall4.png");
message1Image = loadImage("message1.png");
message2Image = loadImage("message2.png");
message3Image = loadImage("message3.png");
message4Image = loadImage("message4.png");
message5Image = loadImage("message5.png");
message6Image = loadImage("message6.png");
message7Image = loadImage("message7.png");
message8Image = loadImage("message8.png");
message9Image = loadImage("message9.png");
backgroundImage = loadImage("Subway.jpg");
endImage = loadImage("end.png");

/*! p5.play loading borders around the canvas */
wall= createSprite(0,-20);
wall.scale= 1.1;
wall.addImage("normal",wallImage);

wall2= createSprite(0,550);
wall2.scale= 1.1;
wall2.addImage("normal",wall2Image);

wall3= createSprite(1330,0);
wall3.scale= 1.1;
wall3.addImage("normal",wall3Image);

wall4= createSprite(-30,0);
wall4.scale= 1.1;
wall4.addImage("normal",wall4Image);

avetar = createSprite(30, 500);
avetar.addImage("normal", avetar1Image);
avetar.scale= 0.085;
avetar.maxSpeed = 20;
avetar.friction = .01;
avetar.setCollider("rectangle",0,0,900,400 );

/*! p5.play create sprites with images that spawn with random resolution */
message1= createSprite(random(1000), random(500));
message1.scale= 1.5;
message1.addImage("normal",message1Image);

message2= createSprite(random(1000), random(500));
message2.scale= 1.5;
message2.addImage("normal",message2Image);

message3= createSprite(random(1000), random(500));
message3.scale= 1.5;
message3.addImage("normal",message3Image);

message4= createSprite(random(1000), random(500));
message4.scale= 1.5;
message4.addImage("normal",message4Image);

message5= createSprite(random(1000), random(500));
message5.scale= 1.5;
message5.addImage("normal",message5Image);

message6= createSprite(random(1000), random(500));
message6.scale= 1.5;
message6.addImage("normal",message6Image);

message7= createSprite(random(1000), random(500));
message7.scale= 1.5;
message7.addImage("normal",message7Image);

message8= createSprite(random(1000), random(500));
message8.scale= 1.5;
message8.addImage("normal",message8Image);

message9= createSprite(random(1000), random(500));
message9.scale= 1.5;
message9.addImage("normal",message9Image);

avetar2 = createSprite(1270, 30);
avetar2.addImage("normal", avetar2Image);
avetar2.scale= 0.08;
avetar2.maxSpeed = 20;
avetar2.friction = .01;
avetar2.setCollider("rectangle",0,0,900,400 );

slider = createSlider(0, 255, 127);
slider.position(0,0);
}

function draw() {

  background(0);

  /*! p5.sound create values (min-max) that adjust volume based on the slider from setup */
  var volume = map(slider.value(), 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);

  image(backgroundImage,0,0);

/*! When sprites pass through the border, they reappear from the opposite side */
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

/*! p5.play bounce and collide effect*/
avetar.bounce(avetar2,hit);
avetar2.bounce(avetar);

avetar.collide(wall);
avetar.collide(wall2);
avetar.collide(wall3);
avetar.collide(wall4);
avetar.collide(avetar2);

avetar2.collide(wall);
avetar2.collide(wall2);
avetar2.collide(wall3);
avetar2.collide(wall4);
avetar2.collide(avetar);

avetar.bounce(message1);
avetar.bounce(message2);
avetar.bounce(message3);
avetar.bounce(message4);
avetar.bounce(message5);
avetar.bounce(message6);
avetar.bounce(message7);
avetar.bounce(message8);
avetar.bounce(message9);


avetar2.bounce(message1);
avetar2.bounce(message2);
avetar2.bounce(message3);
avetar2.bounce(message4);
avetar2.bounce(message5);
avetar2.bounce(message6);
avetar2.bounce(message7);
avetar2.bounce(message8);
avetar2.bounce(message9);


/*! keyboard controls*/
  if(keyDown("j")){
    avetar.rotation -= 4;
  }
  if(keyDown("l")){
    avetar.rotation += 4;
  }
  if(keyDown("i")){
avetar.addSpeed(.1, avetar.rotation);
}
  if(keyDown("a")){
    avetar2.rotation -= 4;
  }
  if(keyDown("d")){
  avetar2.rotation += 4;
  }
  if(keyDown("w")){
    avetar2.addSpeed(.1, avetar2.rotation);

    }
  else{
    avetar.changeAnimation("normal");
  avetar2.changeAnimation("normal");
}

  drawSprites();

}

/*! When collision hits image shown */
function hit(avetar, avetar2){
avetar2.remove();
image(endImage, width/2, height/2);
song.pause();
song2.play();
noDraw();
}
