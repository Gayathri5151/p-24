
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3;
var Paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  rect1=createSprite(320,610,20,100);
	rect1.shapeColor="red";
	
	rect2=createSprite(470,610,20,100);
	rect2.shapeColor="red";

	rect3=createSprite(394,652,132,15)
  rect3.shapeColor="red";
  
    Paper=new paper()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  Paper.display
  drawSprites();
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(paperObject,paperObject.body.position,{x:85,y:85})
  }
}





