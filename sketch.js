let posX;
let posY;
let diam;
let rad;

let velX;   
let velY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    diam = random(50, 300);
    rad = diam /2;

    posX = random(rad, width - rad);
    posY = random(rad, height - rad);

    velX = random(-5, 5);   
    velY = random(-5, 5);
}

function draw() {
    background(150);
    if(posX > width - rad || posX < rad){  
        velX *= -1;  
    }
    
    if(posY > height - rad || posY < rad){    
        velY *= -1;
    }               
    
    posX += velX;
    posY += velY;

    circle(posX, posY, diam); 
}