const CANVAS = document.getElementById("canvas");
const CONTEXT = CANVAS.getContext("2d");

// Screen Constants
const SCREEN_MULT = 5;
const RES_X = 160 * SCREEN_MULT;
const RES_Y = 144 * SCREEN_MULT;
const FPS = 60;

const RENDERER = new Renderer(RES_X, RES_Y, CONTEXT, SCREEN_MULT);


function setup() {
    console.log("Starting setup.")

    // Set Screen dimensions
    CANVAS.width = RES_X;
    CANVAS.height = RES_Y; 

    RENDERER.LoadTileMap("./assets/tilemaps/tilemap1.png");
}

// 
function update() {
    RENDERER.ClearScreen();
    RENDERER.Draw();
}



document.addEventListener("DOMContentLoaded", () => {
    setup();
    setInterval(update, 1000/FPS);
});