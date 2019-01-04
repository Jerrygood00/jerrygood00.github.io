float a = 2;
float inc = TWO_PI/10.0; 
float c = 255;
String gridName = "tangle";
void setup() {
  size(500,500);
  smooth(); 
}
 
void draw() {
  background(random(c));
  fill(random(c,inc));
  println("The range = " + inc + " rectangle ");
  stroke (random(sin(a)*300.0 - 100,0));
  for (float i=0; i<300; i+=5) {
    rect(i, 50, i, 50+tan(a)*20.0);
    println("gridName = " + a + "The tan = " +tan(a));
    a = a + inc;
    inc = -inc;
    a = -a;
  }
}