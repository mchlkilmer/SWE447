

function Particle(x,y, firework) {
  this.pos = createVector(x,y);
  this.firework = firework;
  this.lifespan = 255;
  if(firework){
    this.vel = createVector(0, random(-12, -8));
  }
  else{
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2,10));
  }
  this.acc = createVector(0,0);
  
  this.applyForce = function(force){
    this.acc.add(force);
  }
  
  
  this.update = function() {
    if (!this.firework){
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
      
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
  }
  
  this.show = function() {
    if(!this.firework){
      strokeWeight(2);
      stroke(255, this.lifespan);
    }
    else{
      strokeWeight(4);
      stroke(225);
    }
    point(this.pos.x, this.pos.y);
  }
}
