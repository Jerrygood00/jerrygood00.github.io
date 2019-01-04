/* @pjs preload= "21586842_2425414127787357_3384628176391507323_o.jpg"; */
int count = 15;
float[] posX = new float[count]; 
float[] posY = new float[count];
float[] speedX = new float[count];
float[] speedY = new float[count];
float[] sizeW = new float[count];
float[] sizeH = new float[count];
int[] colors = new int[count];
PImage b;

void setup() { 
  size(600, 600); 
  for (int i=0; i < posX.length; i++) { 
    posX[i] = width/2; 
    posY[i] = height/2; 
    speedX[i] = random(-10, 15); 
    speedY[i] = random(-10, 15); 
    sizeW[i] = random(20, 25); 
    sizeH[i] = random(20, 25); 
    colors[i] = int(random(0, 255));
    
  }
} 
void draw() { 
  background(155);
   b = loadImage("21586842_2425414127787357_3384628176391507323_o.jpg"); 
  Rectangle();
  CatImage();
}
void Rectangle() {
  float x=random(0,255);
    fill(x);
    rect(x, x, width, height); 
  float a=random(0,255);
    fill(a);
    rect(a, a, height/2, width/2); 
  float k=random(0,255);
    fill(k);
    rect(k, a, height/2, width/2);
}
void CatImage() {
  for (int i = 0; i < posX.length; i++) { 
    //update all positions 
    posX[i] += speedX[i]; 
    posY[i] += speedY[i]; 
    fill(random(255)); 
    image(b,posX[i], posY[i], sizeW[i]*4, sizeW[i]*4); 

    if (posX[i] < 20+sizeW[i]/2 || posX[i] > (width-60)-sizeW[i]/2 ) { 
      speedX[i] = -speedX[i];
    } 
    if (posY[i] < 20+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) { 
      speedY[i] = -speedY[i];
    }
  }


}