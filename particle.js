function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxspeed = 40;
    this.hue = particleColour + random(40);
    this.sat = 0;
    this.brightness = 20;

    this.prevPos = this.pos.copy();


    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);   
    }

    this.follow = function(vectors) {
        let x = floor(this.pos.x/scl);
        let y = floor(this.pos.y/scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyforce(force);
    }
    
    this.applyforce = function (force) {
        this.acc.add(force);
    }

    this.show = function () {
        stroke(this.hue,this.sat,this.brightness,1);
        let adjustHue = .3; 
        let adjustSat = 1; 
        let adjustBrightness = 5; 
        
        this.hue += adjustHue;
        this.sat += adjustSat;
        this.brightness += adjustBrightness;
        
        if (this.hue > 359) {
            this.hue = 0;
        } 
        if (this.sat > 50) {
            this.sat = 40;
        } 
        


     
        // line(this.pos.x,this.pos.y,this.prevPos.x,this.prevPos.y);
        if(
            (this.pos.x > this.prevPos.x + 2 || this.pos.x < this.prevPos.x - 1) && 
            (this.pos.y > this.prevPos.y + 1 || this.pos.y < this.prevPos.y - 2 )
            ) {
            point(this.pos.x,this.pos.y);
        }

        
        this.updatePrev();
    }

    this.updatePrev = function() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) { 
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) { 
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) { 
            this.pos.y = height;
            this.updatePrev();
        }

        
    }
}