var car1, car2, car3;
var wall1,wall2,wall3;

function setup() {
  createCanvas(800,400);
  car1 = createSprite(700,350,25,25 );
  car2 = createSprite(700,250,25,25 );
  car3 = createSprite(700,150,25,25);
  wall1 = createSprite(100,350,25,100);
  wall2 = createSprite(100,250,25,100);
  wall3 = createSprite(100,150,25,100);
}

function draw() {
  background(0);
  car1.velocityX=-2;  
  car1.velocityY=0;
  car2.velocityX=-2;  
  car2.velocityY=0;
  car3.velocityX=-2;  
  car3.velocityY=0;
  if (car1.collide(wall1)){
fill
}
  drawSprites();
}