var  box1;
var ground;
var text1;

function setup(){  
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    ground = createSprite(400,650,1900,20);
  }
function draw(){
    background(7,2,5);
    if(keyDown("space")){
        box1 = createSprite(mouseX,mouseY,40,40);
        box1.shapeColor = "blue";
        box1.velocityY = 5;
    

}
if(keyDown("shift")){
  box2 = createSprite(mouseX,mouseY,30,40);
  box2.shapeColor = "green";
  box2.velocityY = 4;
}
if(keyDown("t")){
  text1 = text("THANK YOU ",200,150)
}
if(World.frameCount % 20 === 0){
text.scale = text.sacle+0.1;
}
  text("presss shift once and move the arrow wherever you want  ",200,250,);  
text("presss space  once and move the arrow wherever you want  ",200,200,);
text("presss (T) for the end ",200,300,);
drawSprites();
}