var gameSate="Welcome";
var welcome,welbg,gameover,gobg;
var  ground,ground1,ground2,ground3,ground4;
var skeppy,skeppy1,skeppy2,skeppy3,skeppy4,skeppy5;
var enemy,enemy1,enemy2,enemy3,enemy4,enemy5;
var chest,chest1,chest2;
var boss,boss1,boss2,boss3,boss4;
var fireball,fireballimg;
var button,buttonimg;
function preload(){
 welbg=loadAnimation("images/WelcomeImage.jpg");
 gobg=loadImage("images/GameOver.png");
 ground1=loadImage("images/Background1.jpg");
 ground2=loadImage("images/Background2.jpg");
 ground3=loadImage("images/Background3.jpg");
 ground4=loadImage("images/Background4.jpg");
 skeppy1=loadImage("images/Player1.png");
 skeppy2=loadImage("images/Player2.png");
 skeppy3=loadImage("images/Player3.png");
 skeppy4=loadImage("images/Player4.png");
 skeppy5=loadImage("images/Player5.png");
 enemy1=loadImage("images/Enemy1.png");
 enemy2=loadImage("images/Enemy2.png");
 enemy3=loadImage("images/Enemy3.png"); 
 enemy4=loadImage("images/Enemy4.png");
 enemy5=loadImage("images/Enemy5.png");
 boss1=loadImage("images/DrangonBoss.png");
 boss2=loadImage("images/DrangonBoss2.png");
 boss3=loadImage("images/DrangonBoss3.png");
 boss4=loadImage("images/DrangonBoss4.png");
 chest1=loadImage("images/Chest1.png");
 chest2=loadImage("images/Chest2.png");
 fireballimg=loadImage("images/FireBall.png");
 buttonimg=loadImage("images/start.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  welcome=createSprite(800,370,windowWidth,windowHeight);
  welcome.addAnimation("welcome",welbg);
  welcome.visible=false;
  welcome.addAnimation("grnd",ground1);
  button=createSprite(800,600);
  button.addImage(buttonimg)
  button.scale=0.5;
  button.visible=false;
 
}

function draw() {
  background(ground1);  
  if(gameSate==="WELCOME"){
    welcome.visible=true;
    button.visible=true;
  if(mousePressedOver(button)){
    gameSate="PLAY";
  }
}
 if(gameSate==="PLAY"){
  welcome.visible=false;
  button.visible=false;
  skeppy=createSprite(200,height-170,50,50);
  skeppy.addImage("player1",skeppy4);
  skeppy.scale=0.75; 

  
  if(keyDown(UP_ARROW)){
    skeppy.y=skeppy.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    skeppy.y=skeppy.y+10;   
  }
}
  drawSprites();
}
