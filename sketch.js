
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 bobObject1=new Bob(300,500,70)
	 bobObject2=new Bob(372,500,70)
	 bobObject3=new Bob(444,500,70)
	 bobObject4=new Bob(516,500,70)
	 bobObject5=new Bob(588,500,70)
	 roof=new Roof(445,200,400,40)
	 rope1=new Rope(bobObject1.body,roof.body,-70*2,0)
	 rope2=new Rope(bobObject2.body,roof.body,-35*2,0)
	 rope3=new Rope(bobObject3.body,roof.body,0*2,0)
	 rope4=new Rope(bobObject4.body,roof.body,35*2,0)
	 rope5=new Rope(bobObject5.body,roof.body,70*2,0)




	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("lightGrey");
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ 
             
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); 
	} 
} 



