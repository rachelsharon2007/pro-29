const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand,polygon,ground;
var stand1,stand2;
var polygon;
var slingshot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

  ground = new Ground ();
  stand1 = new Stannd(330,220,10,5);
  stand2 = new Stand(700,120,10,5);
  slingshot = new Slingshot((this.ball,{x:100,y:200});
                             
  box1 = new Block(300,275,30,40);
  box2 = new Block(330,275,30,40);
  box3 = new Block(360,275,30,40);
  box4 = new Block(390,275,30,40);
  box5 = new Block(420,275,30,40);
  box6 = new Block(450,275,30,40);
  box7 = new Block(480,275,30,40);
  box8 = new Block(330,235,30,40);
  box9 = new Block(360,235,30,40);
  box10 = new Block(390,235,30,40);
  box11 = new Block(420,235,30,40);
  box12 = new Block(450,235,30,40);
  box13 = new Block(360,195,30,40);
  box14 = new Block(390,195,30,40);
  
  
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  blocks9 = new Block(700,95,30,40);
  blocks10 = new Block(630,175,30,40);

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("red");
  text("DRAG the Hexagonal Stone and Release it, to LAUNCH it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  slingshot.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise");
  box13.display();
  box14.display();
  
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("white");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("purple")
  blocks9.display();
  fill("yellow");
  blocks10.display();
  fill("lightyellow");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

