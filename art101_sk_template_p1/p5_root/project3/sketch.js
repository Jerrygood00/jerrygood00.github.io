var noo,call;
var of;
var gravity = 2;
function preload() {
  soundFormats('mp3', 'ogg','wav');
    call = loadSound('assets/10_Track 10 - Calling.mp3');
noo = loadAnimation("assets/asterisk_circle0000.png", "assets/asterisk_circle0008.png");

}

function setup() {
  createCanvas(1000,500);
  slider = createSlider(0, 255, 100);
  slider.position(0, 10);
  slider.style('width', '80px');
    var t =
    {
        name: "test",
        colors: ["White"],
        lifetime: 7000,
        angle: [0,10],
        size: [1,5],
        speedx: 7,
        x: 0.5,
        y: -0.3,


    };
   of = new Fountain(null, t);
}


function draw() {
  background(0);

  var val = slider.value();
   background(val);

  //reading and changing the current frame
  if (noo.getFrame()==noo.getLastFrame())
    noo.changeFrame(7);

  animation(noo, mouseX, mouseY);
  of.Draw();
    of.Create();
    of.Step();
    noStroke();
    stroke(0);


}

function mousePressed() {
  noo.rewind();
  call.setVolume(0.5);
    call.play();

}
