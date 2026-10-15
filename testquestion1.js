
let bird
let background, birdImg;


function preload(){
    birdImg=loadImage("assets/bird.png");
    background=loadImage("assets/background.png")
}


function setup(){
    new Canvas(400, 600);
    bird = new Sprite(width/2,height/2,30,24);
    bird.image=birdImg;
}


function draw() {
    image(background, 0, 0, width, height);
}
