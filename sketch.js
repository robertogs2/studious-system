var mappa = new Mappa('Leaflet');
let position = 0;
const options = {
  lat: 0,
  lng: 0,
  zoom: 1.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  trainMap = mappa.tileMap(options);
  trainMap.overlay(canvas);
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
  // Store the current latitude and longitude of the mouse position
  let position = trainMap.pixelToLatLng(mouseX, mouseY);
    ellipse(mouseX,mouseY,10,10);
    fill(255);
    console.log(position);
  }
  
}