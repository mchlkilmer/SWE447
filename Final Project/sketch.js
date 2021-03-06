var fireworks = [];
var gravity;

function setup(){
  createCanvas(600,600);
  colorMode(HSB);
  gravity = createVector(0,0.2);
 
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw () {
  colorMode(RGB);
  background(0 , 0, 0, 25);
  
  if(random(1) < 0.03){
   colorMode(RGB);
   fireworks.push(new Firework());
  }
  
  for( var i = 0; i < fireworks.length; i++){
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()){
      fireworks.splice(i,1);
    }
  }
}
