
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(1325, 635, 10, 100);
	dustbin2 = new Dustbin(1465, 635, 10, 100);
	dustbin3 = new Dustbin(1395, 685, 125, 10);

	ground = new Ground(815,height,1900,20)

    //paper = Paper(100, 300, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  //paper.display();
}



