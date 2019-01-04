// var gridarr = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0, 1, 0],
//   [0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0]
// ];
//
// var a = 0;
//
// function setup() {
//
//   createCanvas(240, 240);
//
//   background(120);
//
//   for (var i = 0; i < 7; i++) {
//     for (var j = 0; j < 7; j++) {
//       a = gridarr[i][j];
//       if (a === 1) {
//         fill(80, 20, 20);
//       } else {
//         fill(175, 75, 0);
//       }
//       if (a === 0) {
//         fill(100, 20, 20);
//       } else {
//         fill(175, 60, 10);
//       }
//
//       // typical way of mapping out a grid (counter * scale) + offset
//       // where counter is a var from the forloop
//       // scale is value that will term the size/position of each drawing
//       // offset is a relative movement to place the grid collection around on the canvas
//
//       rect((i * 30) + 15, (i * 30) + 15, 20, 20);
//     }
//   }
// }



var numbers = [90, 30, 30, 45, 12, 78, 56 ];

    function setup() {
    createCanvas(500, 500);
    background(0, 60, 150);
    fill(100);
    //translate example
    push();
    translate(20, 20);
    drawarray(100);

    pop();

    //and rotate
    push();
    translate(150, 20);
    rotate(radians(45));
    drawarray(255);
    pop();

    //and scale
    push();
    translate(200, 200);
    rotate(radians(-45));
    scale(3.0);
    drawarray(100);
    pop();
    }
    function drawarray(fade) {
    for (var i = 0; i < numbers.length; i++) {
    fill(numbers[i] * tan(2),fade);
    rect(i * 10, 20, 10, 10);
    }
    }
