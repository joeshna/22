var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1=createSprite(100,100,50,50)
  o1.shapeColor="red";
  o2=createSprite(200,100,50,50)
  o2.shapeColor="red";
  o3=createSprite(300,100,50,50)
  o3.shapeColor="red";
  o4=createSprite(400,100,50,50)
  o4.shapeColor="red";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

}

else

{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}
  
  drawSprites();
}

