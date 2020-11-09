var rect1,rect2;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(200, 200, 50, 80);
  rect1.shapeColor="purple";
  rect2=createSprite(200,400,50,80);
  rect2.shapeColor="purple";
  gameobject1=createSprite(100,100,50,50);
  gameobject2=createSprite(200,100,50,50);
  gameobject3=createSprite(300,100,50,50);
  gameobject4=createSprite(400,100,50,50);
  gameobject1.shapeColor="green";
  gameobject2.shapeColor="green";
  gameobject3.shapeColor="green";
  gameobject4.shapeColor="green";
  rect1.velocityY=5;
  rect2.velocityY=-5;
}

function draw() {
  background(255,255,255);  
  console.log(rect2.x-rect1.x);
  /*rect2.x=mouseX;
  rect2.y=mouseY;*/

  bounceOff(rect1,rect2);
  /*if( isTouching(gameobject1,rect2))
  {
    gameobject1.shapeColor="yellow";
    rect2.shapeColor="yellow";
  }
else
{
rect1.shapeColor="purple";
rect2.shapeColor="purple";
}*/
  
  drawSprites();
}

