class Box2 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true

          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage('Dustbin.PNG')
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill("White");
      imageMode(CENTER);
      image (this.image,pos.x,pos.y - 70,this.width + 20,150);
      pop();
    }
  };
