var bullet, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
 
 wall = createSprite(1500, 200, thickness, height/2);

 bullet =  createSprite(10, 200, 50, 10);
 bullet.shapeColor = "white";
 
 speed = random(55,90);
 weight = random(400,1500);
 thickness = random(23,83);
}

function draw() {
  background(0);  
  
  bullet.velocityX = speed;
  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
   
    bullet.velocityX = 0;
    
    var deformation = 0.5* weight * speed * speed/22509;
    
    if(deformation > 10)
    {
      wall.shapeColor = "red";
    }

    if(deformation  === 10)
    {
      wall.shapeColor = "yellow";
    }

    if(deformation < 10)
    {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}