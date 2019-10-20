var mappa = new Mappa('Leaflet');
let position = 0;
let amount_points = 0;
const options = {
  lat: 0,
  lng: 0,
  zoom: 1.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  trainMap = mappa.tileMap(options);
  trainMap.overlay(canvas);
  var w = window.innerWidth;
  var h = window.innerHeight;
  createCanvas(400, 400);
  resizeCanvas(w, h);
  position = int(window.localStorage.getItem("size_points"));
  console.log("jfhg")
  for (var key in window.localStorage) {
    console.log("found key");
    console.log(key);
    if (key.startsWith("point")){
      console.log("and started with point");
      var stored = JSON.parse(localStorage.getItem(key));
      ellipse(stored.X, stored.Y, stored.S1, stored.S2);
      fill(255);
    }
    
    
    
    //ll[i]
  }
  console.log("bbbb")
}

function draw() {
  if (mouseIsPressed) {
  // Store the current latitude and longitude of the mouse position
  let position = trainMap.pixelToLatLng(mouseX, mouseY);
  ellipse(mouseX,mouseY,10,10);
  window.localStorage.setItem("point" + String(amount_points), String(JSON.stringify({X: mouseX, Y: mouseY, S1: 10, S2: 10})));
  amount_points = amount_points + 1;
  window.localStorage.setItem("size_points", amount_points);
  fill(255);
  console.log(position);
  }
  
}