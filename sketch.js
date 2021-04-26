var inc = 3;
var scl = 50;
var cols, rows;
var zoff = 0.01;
var flowfield;
var start_time;
var current_time;
var timespan = (2 * 60) * 50;
var weights;
var particles = [];
var p1;
var p2;
var p3;
var maxParticles;
var particleColour = 30;
var fr;
var title = "Dream Trails";
var code = "0003";
var p;
let myFont;



function setup() {
  titleFont = loadFont('assets/Nunito/Nunito-Bold.ttf');
  bodyFont = loadFont('assets/Nunito/Nunito-Regular.ttf');
  start_time = millis();
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);
  if(windowHeight > windowWidth) {
    baseDimension = windowHeight;
  } else {
    baseDimension = windowWidth;
  }
  p1 = round(baseDimension/300);
  p2 = p1*2;
  p3 = p2*2;
  weights = [p1,p2,p3];
  start("setup");
}

function draw() {
  let yoff = 0;


  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(.3);
      flowfield[index] = v;
      xoff += inc
    }
    yoff += inc
    zoff += inc;
  }

  for (i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update(); 
    particles[i].edges();
    particles[i].show();
    
  }

  
  fr = "FR" + round(frameRate());
 
  hud(title,code,p,fr);
 

  current_time = millis();
  if (current_time > start_time + timespan) {
      start();
  }
}

function start(setup) {
  var maxParticles = random(20);
  particles = [];
  start_time = millis();
  strokeWeight(random(weights));

  if (setup != "setup") {
  background(random(360),random(80,100),random(0,10),.3);
  } else { background(0)};

  for (let i = 0;  i < maxParticles; i++) {
    particles[i] = new Particle();
  }

  p = "Tracking " + round(maxParticles + 1) + " Stories";
  hud(title,code,p,fr);
  particleColour = random(360);
}
