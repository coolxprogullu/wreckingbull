class Ball extends BaseClass {
    constructor(x, y, width, height) {
      super(x, y, width, height);
      this.image = loadImage("Superhero-01.png");
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle); 
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);  
    pop();
    }
  };