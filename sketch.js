const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var slingShot;
var backgroundImg;
var score=0;

function preload()
{
  getBackgroundImg()
}

function setup() {

  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,200,200,20);
  ground2 = new Ground(700,300,200,20);
  ground3 = new Ground(500,390,1000,20)

  block1 = new Block(320,190,20,20);
  block2 = new Block(340,190,20,20);
  block3 = new Block(360,190,20,20);
  block4 = new Block(380,190,20,20);
  block5 = new Block(400,190,20,20);
  block6 = new Block(420,190,20,20);
  block7 = new Block(440,190,20,20);
  block8 = new Block(460,190,20,20);
  block9 = new Block(480,190,20,20); 

  block10 = new Block(340,170,20,20);
  block11 = new Block(360,170,20,20);
  block12 = new Block(380,170,20,20);
  block13 = new Block(400,170,20,20);
  block14 = new Block(420,170,20,20);
  block15 = new Block(440,170,20,20);
  block16 = new Block(460,170,20,20);

  block17 = new Block(360,150,20,20);
  block18 = new Block(380,150,20,20);
  block19 = new Block(400,150,20,20);
  block20 = new Block(420,150,20,20);
  block21 = new Block(440,150,20,20);

  block22 = new Block(380,130,20,20);
  block23 = new Block(400,130,20,20);
  block24 = new Block(420,130,20,20);

  block25 = new Block(400,110,20,20);

  block26 = new Block(620,290,20,20);
  block27 = new Block(640,290,20,20);
  block28 = new Block(660,290,20,20);
  block29 = new Block(680,290,20,20);
  block30 = new Block(700,290,20,20);
  block31 = new Block(720,290,20,20);
  block32 = new Block(740,290,20,20);
  block33 = new Block(760,290,20,20);
  block34 = new Block(780,290,20,20);

  block35 = new Block(640,270,20,20);
  block36 = new Block(660,270,20,20);
  block37 = new Block(680,270,20,20);
  block38 = new Block(700,270,20,20);
  block39 = new Block(720,270,20,20);
  block40 = new Block(740,270,20,20);
  block41 = new Block(760,270,20,20);

  block42 = new Block(660,290,20,20);
  block43 = new Block(680,290,20,20);
  block44 = new Block(700,290,20,20);
  block45 = new Block(720,290,20,20);
  block46 = new Block(740,290,20,20);

  block47 = new Block(680,270,20,20);
  block48 = new Block(700,270,20,20);
  block49 = new Block(720,270,20,20);

  block50 = new Block(700,290,20,20);

  polygon = new Polygon(50,200,20);

  slingShot = new SlingShot(polygon.body,{x:100,y:100});

}

function draw() {

  if(backgroundImg)
  background(backgroundImg); 

  Engine.update(engine);

  text("score:"+score,width-300,50);
  strokeWeight(4);

  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();

  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();

  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();

  block47.display();
  block48.display();
  block49.display();

  block50.display();

    block1.Score();
    block2.Score();
    block3.Score();
    block4.Score();
    block5.Score();
    block6.Score();
    block7.Score();
    block8.Score();
    block9.Score();
    block10.Score();
    block11.Score();
    block12.Score();
    block13.Score();
    block14.Score();
    block15.Score();
    block16.Score();
    block17.Score();
    block18.Score();
    block19.Score();
    block20.Score();
    block21.Score();
    block22.Score();
    block23.Score();
    block24.Score();
    block25.Score();
    block26.Score();
    block27.Score();
    block28.Score();
    block29.Score();
    block30.Score();
    block31.Score();
    block32.Score();
    block33.Score();
    block34.Score();
    block35.Score();
    block36.Score();
    block37.Score();
    block38.Score();
    block39.Score();
    block40.Score();
    block41.Score();
    block42.Score();
    block43.Score();
    block44.Score();
    block45.Score();
    block46.Score();
    block47.Score();
    block48.Score();
    block49.Score();
    block50.Score();

  slingShot.display();
  polygon.display();

  drawSprites();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if (keyCode===32){
    slingShot.attach(polygon.body);
  }
}

async function getBackgroundImg()
{
    var response=await fetch("http://worldclockapi.com/api/json/est/now")
    var responseJSON=await response.json();
    var datetime=responseJSON.currentDateTime
    var hour=datetime.slice(11,13);
   // console.log(hour);
    if(hour>=06 && hour<=19)
    {
      bg="sprites/bg.png"
    }
    else
    {
      bg="sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg);
}