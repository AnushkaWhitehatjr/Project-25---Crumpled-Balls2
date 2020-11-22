
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject, dustbinImg, paperImg;	
var world;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//dustbinObj.addImage(dustbinImg);
	//paperObject.addImage(paperImg);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
