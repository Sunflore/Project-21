var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,25);
  bullet.ShapeColor=color(255,255,255);
  wall=createSprite(1200,200,thickness,height/2);
  wall.ShapeColor=color(80,80,80);
  

}

function draw() {
  background(0); 

  bullet.velocityX=speed;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  
  /*if(bullet.x - wall.x < bullet.width/2 + wall.width/2 
    && wall.x - bullet.x < bullet.width/2 + wall.width/2 
    && bullet.y - wall.y < bullet.height/2 + wall.height/2 
    && wall.y - bullet.y < bullet.height/2 + wall.height/2)
    {
      if(bullet.x - wall.x < bullet.width/2 + wall.width/2)
      {
        bullet.velocityX=0;
        var deformation=0.5 * weight * speed* speed/0;
        if(deformation > 180)
        {
          bullet.shapeColor=color(255,0,0);
        }

        if(deformation < 180 && deformation > 100)
        {
          bullet.shapeColor=color(230,230,0);
        }

        if(deformation < 100)
        {
          bullet.shapeColor=color(0,255,0);
        }
      }
    }*/

  drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}