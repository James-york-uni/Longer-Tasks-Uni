let colourPicker;
let brushSize;
let clear; 
let design1;
let design2;
let design3;
let santaButton;
let penguinButton;
let christmasButton;
let music;

function preload() {
    design1 = loadImage("assets/merry christmas.jpeg"); 
    design2 = loadImage("assets/penguin.jpeg");
    design3 = loadImage("assets/santa.png");
    music = loadSound("assets/christmas-winter-whimsy-264703.mp3");
}

function setup() { 
    background(255); 
    createCanvas(800, 600)
    frameRate(30);
    const container = select("main");
    colourPicker = createColorPicker(); 
    colourPicker.parent(container);
    brushSize = createSlider(5, 50);
    brushSize.parent(container);
    clear = createButton("Clear");
    clear.parent(container);
    santaButton = createButton("Santa");
    santaButton.parent(container);
    penguinButton = createButton("Penguin");
    penguinButton.parent(container);
    christmasButton = createButton("Merry Christmas");
    christmasButton.parent(container);
    colourPicker.position(0,0);
    brushSize.position(50, 3);
    santaButton.position(0, 78);
    penguinButton.position(0, 54);
    christmasButton.position(0, 30);
    clear.position(0, 102)
    music.play()
}

function draw() {
    clear.mouseClicked(() => background(255));
    imageMode(CENTER);
    santaButton.mouseClicked(() => background(255) + image(design3, width/2, height/2))
    penguinButton.mouseClicked(() => background(255) + image(design2, width/2, height/2, 450, height + 50))
    christmasButton.mouseClicked(() => background(255) + image(design1, width/2, height/2, width - 100, height - 100))

    if(!music.isPlaying()) {
        music.play(); 
    }
}

function shapeCreation() {
    noStroke();
    let myColour = color(colourPicker.value()); 
    myColour.setAlpha(150);
    fill(myColour); 
    circle(mouseX, mouseY, brushSize.value());
}

function mouseDragged() {
    shapeCreation(); 
}

