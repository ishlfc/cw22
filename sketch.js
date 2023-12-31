const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var backgroundImg;
var tower, towerImg;

var cannon;

function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 towerImg = loadImage("./assets/tower.png");
 //cannon_image = loadImage("./assets/canon.png")
 //cannon_base = loadImage("./assets/cannonBase.png");
} 

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
  
 tower = Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);

 cannon = new Cannon(180,110,130,100,20);
}

function draw() {
  background(189);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 
 image(backgroundImg,0,0, width, height); 
 
 push();
// rectMode(CENTER);
 imageMode(CENTER);
// rect(tower.position.x,tower.position.y,160,310);
 image(towerImg,tower.position.x,tower.position.y, 160,310);
 
 
 pop();
   
 cannon.display();
}
