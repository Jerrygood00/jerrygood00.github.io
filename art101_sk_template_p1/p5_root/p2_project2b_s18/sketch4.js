var blob;

function preload() {
  blob = loadJSON("blob.json");
  weather = loadJSON("weather.json")
}

function setup() {

   createCanvas(1000,1000)
   background(0);


     // this shows the whole blob json data package
   console.log(blob);
   noStroke();

   push();

   translate(250,50);

   for (var i =0; i < blob.posX.length;i++ )  {
   		fill(blob.r2,blob.g2,blob.b2);
  		ellipse(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
    }


    pop();

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
    push();

    translate(250,40);

    text(weather);


     pop();
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

    push();

    translate(250,30);

    for (var i =0; i < blob.posX.length;i++ )  {
       fill(blob.r2,blob.g2,blob.b2);
       rect(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
     }


     pop();
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
     push();

     translate(10,60);

     for (var i =0; i < blob.posX.length;i++ )  {
         fill(blob.r2,blob.g2,blob.b2);
       rect(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
      }


      pop();

      push();

      translate(10,50);

      for (var i =0; i < blob.posX.length;i++ )  {
         fill(blob.r,blob.g,blob.b);
         rect(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
       }


       pop();
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
      push();

      translate(10,40);

      for (var i =0; i < blob.posX.length;i++ )  {
         fill(blob.r2,blob.g2,blob.b2);
         rect(blob.posX[i],blob.posY[i], blob.bsizeW,blob.bsizeH);
       }


       pop();

    fill(blob.r,blob.g,blob.b);
    textSize(25);
    text(blob.name+ " weights " + blob.weight ,0,100);
    fill(blob.r,blob.g,blob.b);
    textSize(25);
    text("Big "+ blob.name+ "'s base experience is "+ blob.base_experience, 0,50);

}



function draw() {
  // draw stuff here
}
