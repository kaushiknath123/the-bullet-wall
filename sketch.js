var bullet, wall;

var speed, weight, thickness;



function setup() {
  createCanvas(1200,400);
 bullet =  createSprite(25, 200, 50, 20);
 bullet.shapeColor=("white");

 wall = createSprite(1100, 200, thickness, height/2);
 wall.shapeColor=("black");

 speed=random(50, 300);
 weight=random(90, 150);
 thickness=random(22, 83);

 bullet.velocityX = speed;
}

function draw() {
  background("grey");  

  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed  * speed/(thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor=("red");
    }
    if(damage<10){
      wall.shapeColor=("green");
    }
  }
  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  
    return false;
  
}
