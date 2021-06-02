
class Paper {
    constructor(x, y, radius) { 
       var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.boby = Bodies.circle(x, y, radius, options);
      this.radius = radius

       World.add(world, this.boby);
       }
    display(){
      ellipseMode(RADIUS);

      fill("yellow");

      circle(this.boby.position.x, this.boby.position.y, this.radius);
    }
    };