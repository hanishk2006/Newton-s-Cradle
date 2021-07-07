
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5 ; 
var roofObject1 ; 
var ropeObject1,ropeObject2, ropeObject3,ropeObject4,ropeObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(200,400,50);  	
	bobObject2 = new bob(250,400,50);  	
	bobObject3 = new bob(300,400,50);  	
	bobObject4 = new bob(350,400,50);  	
	bobObject5 = new bob(400,400,50);  	
	roofObject1 = new roof(300,100,600,50)
	ropeObject1 = new chain(bobObject1.body,{x:180,y:100}) 
	ropeObject2 = new chain(bobObject2.body,{x:280,y:100}) 
	ropeObject3 = new chain(bobObject3.body,{x:380,y:100}) 
	ropeObject4 = new chain(bobObject4.body,{x:480,y:100}) 
	ropeObject5 = new chain(bobObject5.body,{x:580,y:100}) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display(); 
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display(); 
  roofObject1.display(); 
  ropeObject1.display(); 
  ropeObject2.display(); 
  ropeObject3.display(); 
  ropeObject4.display(); 
  ropeObject5.display(); 

  drawSprites();
 
}



