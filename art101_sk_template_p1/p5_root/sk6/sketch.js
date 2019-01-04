
var blob;

function preload() {
  blob = loadJSON("blob.json");
}

function setup() {

   createCanvas(500,500);
   background(50);


     // this shows the whole blob json data package
   console.log(blob);
   noStroke();

   push();

   translate(250,50);
   textSize(20);

   for (var i =0; i < blob.posX.length;i++ )  {
   		fill(blob.r2,blob.g2,blob.b2);
  		ellipse(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
    }

    pop();

    push();

    translate(250,40);
    textSize(20);

    for (var i =0; i < blob.posX.length;i++ )  {
    		fill(blob.r,blob.g,blob.b);
   		rect(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
     }


     pop();

    push();

    translate(250,30);

    for (var i =0; i < blob.posX.length;i++ )  {
       fill(blob.r2,blob.g2,blob.b2);
       rect(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
     }


     pop();


      push();

      translate(10,90);

      for (var i =0; i < blob.posX.length;i++ )  {
         fill(blob.r2,blob.g2,blob.b2);
         rect(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
       }


       pop();

    fill(blob.r,blob.g,blob.b);
    textSize(25);
    translate(10,90);
    text(blob.name+ blob.name+ " loves " + blob.likes ,120,30);
    fill(blob.r,blob.g,blob.b);
    textSize(25);
    translate(10,100);
    text(blob.name+ blob.name+ " loves " + blob.likes ,120,30);
    fill(blob.r,blob.g,blob.b);
    textSize(25);
    translate(10,110);
    text(blob.name+ blob.name+ " loves " + blob.likes ,120,30);
    fill(blob.r,blob.g,blob.b);
    textSize(25);
    translate(10,130);
    text("Original "+ blob.name + " tilting ", 100,50);

}



function draw() {
  // draw stuff here
}
