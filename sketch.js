var mappa = new Mappa('Leaflet');

let position = 0;
let amount_points = 0;
let current_x = 0;
let current_y = 0;
const options = {
  lat: 9.4,
  lng: -83.80,
  zoom: 12,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  // trainMap = L.map('map');//mappa.tileMap(options);
  // trainMap.overlay(canvas);
  // var w = window.innerWidth;
  // var h = window.innerHeight;
  // createCanvas(400, 400);
  // resizeCanvas(w, h);

  var map = L.map('map');
  map.setView(new L.LatLng(9.4, -83.8), 10);

  var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    opacity: 0.90
  });
  OpenTopoMap.addTo(map);

  // Instantiate KMZ parser (async)
  var kmzParser = new L.KMZParser({
    onKMZLoaded: function(layer, name) {
      control.addOverlay(layer, name);
      layer.addTo(map);
    }
  });
  // Add remote KMZ files as layers (NB if they are 3rd-party servers, they MUST have CORS enabled)
  kmzParser.load('assets/RIESGO_SECO_LIBERIA.kmz');

  var control = L.control.layers(null, null, { collapsed:false }).addTo(map);

  for (var key in window.localStorage) {
    //console.log(key);
    if (key.startsWith("point")){
      amount_points++;
      let stored = JSON.parse(localStorage.getItem(key));
      //let pixel = trainMap.latLngToPixel(stored.lat, stored.lng);
      //ellipse(pixel.x, pixel.y, stored.S1, stored.S2);
      //fill(255);
      L.marker([stored.lat, stored.lng]).addTo(map);
    }
  }
  console.log(amount_points);
}

// function draw() {
//   if (mouseIsPressed) {
//     // Store the current latitude and longitude of the mouse position
//     let position = trainMap.pixelToLatLng(mouseX, mouseY);
//     ellipse(mouseX,mouseY,10,10);
//     window.localStorage.setItem("point" + String(amount_points), String(JSON.stringify({P: position, S1: 10, S2: 10})));
//     amount_points++;
//     fill(255);
//     console.log(position);
//   }
// }

// map.on('press',function(e){
//   var coord = e.latlng.toString().split(',');
//   var lat = coord[0].split('(');
//   var lng = coord[1].split(')');
//   current_x = lat;
//   current_y = lng;
// });

// map.on('dblclick',function(e){
//     //clear();
//     console.log("mouseReleased");
//     //let position = trainMap.pixelToLatLng(mouseX, mouseY);
//     var coord = e.latlng.toString().split(',');
//     var lat = coord[0].split('(');
//     var lng = coord[1].split(')');
//     //puntos[i] = position;
//     s =  String(JSON.stringify({lat: lat, lng: lng, S1: 10, S2: 10}));
//     console.log(s);
//     window.localStorage.setItem("point" + String(amount_points),s);
//     amount_points++;
// });

// function draw() {
//   clear();
//   for(let j = 0; j < amount_points;j++){
//     let stored = JSON.parse(localStorage.getItem("point"+String(j)));
//     console.log(stored);
//     // let pixel = trainMap.latLngToPixel(stored.lat,stored.lng);
//     // ellipse(pixel.x,pixel.y,10*trainMap.zoom(),10*trainMap(),255);  
//     L.marker([stored.lat, stored.lng]).addTo(map);
//   }
// }