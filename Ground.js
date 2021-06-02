
class Ground {
    constructor(x, y, width, height){ 
       var options = {
        isStatic: true,
        'restitution':0,
        'friction':0,
        'density':1
      }
      this.boby = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

       World.add(world, this.boby);
       }
    display(){
      rectMode(CENTER);

      fill(255);

      rect(this.boby.position.x, this.boby.position.y, this.width, this. height);
      }
    };