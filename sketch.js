
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,box1,box2,box3

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,680,1000,10);
	box1 = new Box2(800,650,200,20);
	box2 = new Box(700,600,20,100);
	box3 = new Box(900,600,20,100);
	ball = new Ball(100,200,30);

	

	


  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  drawSprites();
	ground.display();
	
	box2.display();
	box3.display();
	box1.display();
	ball.display();
	fill("white")
	textSize(20);
	text("Press Up arrow Key to move the ball",100,100);
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y: -85})
	}
}


