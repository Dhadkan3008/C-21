var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "pink";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  a=createSprite(200,100,50,50);
  a.debug=true;
  b=createSprite(200,50,50,50);
  b.debug=true;

  a.shapeColor="blue";
  b.shapeColor="red";

  a.velocityY= +5;
}

function draw() {
  background(0,0,0); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


bounceoff(a,movingRect);

  drawSprites();
}

