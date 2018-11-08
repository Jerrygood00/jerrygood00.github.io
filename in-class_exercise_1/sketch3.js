"use strict";


let vid_0;
let vid_0_playing = false;
let vid_1;
let vid_1_playing = false;
let vid_2;
let vid_2_playing = false;
let documentActive = false; // we need to make sure they engage with page before it can auto play


function setup() {

  vid_0 = createVideo(['Media/way.mp4']);;
  vid_0.size(400, 300);

  vid_0.mouseOver(playVid_0);
  vid_0.mouseOut(pauseVid_0);


  vid_1 = createVideo(['Media/continue.mp4']);;
  vid_1.size(400, 300);

  vid_1.mouseOver(playVid_1);
  vid_1.mouseOut(pauseVid_1);


  vid_2 = createVideo(['Media/bongo.mp4']);;
  vid_2.size(400, 300);

  vid_2.mouseOver(playVid_2);
  vid_2.mouseOut(pauseVid_2);
}



function draw() {}

function playVid_0() {
  if (documentActive) {
    vid_0.loop();
    vid_0_playing = true;
  }
}

function pauseVid_0() {
  vid_0.pause();
  vid_0_playing = false;
}

function playVid_1() {
  if (documentActive) {
    vid_1.loop();
    vid_1_playing = true;
  }
}

function pauseVid_1() {
  vid_1.pause();
  vid_1_playing = false;
}

function playVid_2() {
  if (documentActive) {
    vid_2.loop();
    vid_2_playing = true;
  }
}

function pauseVid_2() {
  vid_2.pause();
  vid_2_playing = false;
}

function mousePressed() {
  documentActive = true; // since they have clicked, now we can play
}


// write custom functions here
