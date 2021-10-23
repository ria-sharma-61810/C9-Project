
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = "yellow"

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if(keyIsDown(RIGHT_ARROW)) {
    background("blue")
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("magenta");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("cyan");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("orange");
  }


  
  drawSprites();
}

