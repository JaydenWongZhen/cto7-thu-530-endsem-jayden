let square;

function setup(){
    new Canvas(400, 600);
    square = new Sprite(width/2,height/2,50,50);
    world.gravity.y=10;
}

function draw(){
    background("grey");
    if (mouse.presses()) {
        square.vel.y=-5;
    }
}