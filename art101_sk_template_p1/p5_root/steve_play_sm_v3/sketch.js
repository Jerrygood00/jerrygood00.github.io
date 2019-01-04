
// clickable region within camera.js (play)
// reset button and reset program
// speech recognition library security with chrome (wont allow access)
// blocks microphone





// manager stuff
var mgr;

function setup() {
    createCanvas(1280,720);
    console.log(hell);
    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.showNextScene();
}

function draw()
{
    mgr.draw();
}

function mousePressed()
{
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case 'H':
            mgr.showScene( scene4 );
            break;
        case 'N':
            mgr.showNextScene();
            break;


    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
