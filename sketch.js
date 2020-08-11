const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,p;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  block1 = new Block(400,280,40,40);
  block2 = new Block(350,280,40,40);
  block3 = new Block(450,280,40,40);
  block4 = new Block(375,240,40,40);
  block5 = new Block(425,240,40,40);
  block6 = new Block(400,200,40,40);
  ground1 = new Ground(400,300,200,10);
  stone = new Stone(100,200,30,30);
  ground2 = new Ground(400,400,800,30)

  ss = new SlingShot(stone.body,{x:100,y:200});

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  ground1.display();
  stone.display();
  ss.display();
  ground2.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  ss.fly();
}

function keyPressed(){

  if(keyCode = 49){

    Matter.Body.setPosition(stone.body,{x:100,y:200});
    ss.attach(stone.body);

  }

}