
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_Options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	ball = Bodies.circle(50,10,10,ball_Options);
	World.add(world,ball);
	console.log(ball);

	ground = new Ground(width/2,390,width,10);
	leftSide = new Ground(600,350,10,70);
	rightSide = new Ground(750,350,10,70);  
}


function draw() {
  background(51);
  
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);

  keyPresseduforce();

  fill(255)
  ellipse(ball.position.x, ball.position.y, 20);

}

function keyPresseduforce(){
	
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.5, y:-0.5});
	}
}