var gameSate=0;
var welcome,welbg,gameover,gobg;
var  ground,ground1,ground2,ground3,ground4;
var skeppy,skeppy1,skeppy2,skeppy3,skeppy4,skeppy5;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var chest,chest1,chest2;
var boss,boss1,boss2,boss3,boss4;
var fireball,fireballimg;
var button,buttonimg;
 var swordimg,sword;
var EnemyGroup1;
var EnemyGroup2;
var EnemyGroup3;
var EnemyGroup4;
var EnemyGroup5;
var SwordGroup;
var score=0;
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
 swordimg=loadImage("images/PlayerItem.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  EnemyGroup1=createGroup();
  EnemyGroup2=createGroup();
  EnemyGroup3=createGroup();
  EnemyGroup4=createGroup();
  EnemyGroup5=createGroup();
  SwordGroup=createGroup();
  welcome=createSprite(800,370,windowWidth,windowHeight);
  welcome.addAnimation("welcome",welbg);
  welcome.scale=1.2;
  welcome.visible=false;
  welcome.addAnimation("grnd",ground1);
  skeppy=createSprite(200,height-170,50,50);
  skeppy.addImage("player1",skeppy4);
  skeppy.scale=0.75; 
  skeppy.visible=false;
  button=createSprite(800,600);
  button.addImage(buttonimg)
  button.scale=0.5;
  button.visible=false;
 
}

function draw() {
  background(ground1);  
  fill("white")
  textSize(25)
  stroke("black")
  strokeWeight(5)
  text("Score: "+score,30,30)
  if(gameSate===0){
    welcome.visible=true;
    button.visible=true;
  if(mousePressedOver(button)){
    gameSate=1;
  }
}
 if(gameSate===1){
  welcome.visible=false;
  button.visible=false;
  skeppy.visible=true;
  
  if(keyDown(UP_ARROW)){
    skeppy.y=skeppy.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    skeppy.y=skeppy.y+10;   
  }
  if(keyDown("SPACE")){
    var temp_sword=createSword();
    temp_sword.addImage(swordimg);
    temp_sword.y=skeppy.y;
  }
  
  // Enemy1();
  // Enemy2();
  // Enemy3();
  // Enemy4();
  // Enemy5();

  var select_enemy = Math.round(random(1,5));
  if (World.frameCount%80===0) {
    if (select_enemy===1) {
      Enemy1();
    }else if(select_enemy===2){
      Enemy2();
  }else if(select_enemy===3){
    Enemy3();
  
}else if(select_enemy===4){
  Enemy4();
}
  else{
    Enemy5();
  }
  }

  if(SwordGroup.isTouching(EnemyGroup1)){
    EnemyGroup1.destroyEach()
    SwordGroup.destroyEach()
    score=score+1;
  }

  if(SwordGroup.isTouching(EnemyGroup2)){
    EnemyGroup2.destroyEach()
    SwordGroup.destroyEach()
    score=score+1;
  }

  if(SwordGroup.isTouching(EnemyGroup3)){
    EnemyGroup3.destroyEach()
    SwordGroup.destroyEach()
    score=score+1;
  }

  if(SwordGroup.isTouching(EnemyGroup4)){
    EnemyGroup4.destroyEach()
    SwordGroup.destroyEach()
    score=score+1;
  }

  if(SwordGroup.isTouching(EnemyGroup5)){
    EnemyGroup5.destroyEach()
    SwordGroup.destroyEach()
    score=score+1;
  }

}
  drawSprites();
}

function createSword(){
 var sword=createSprite(50,50,5,10)
 sword.velocityX=6;
 sword.scale=0.3;
 sword.lifetime=100;
 return sword;
 SwordGroup.add(sword);

}

function Enemy1(){
  if (World.frameCount%60 ===0){
    var enemy10 = createSprite(windowWidth,windowHeight/2,20,20);
    enemy10.addImage(enemy1);
    enemy10.y=Math.round(random(45,500));
    enemy10.scale=0.5;
    enemy10.velocityX=-9;
    enemy10.lifetime=300;
    
     EnemyGroup1.add(enemy10);
}
}
function Enemy2(){
  if (World.frameCount%60 ===0){
    var enemy23 = createSprite(windowWidth,windowHeight/2,20,20);
    enemy23.addImage(enemy2);
    enemy23.y=Math.round(random(45,500));
    enemy23.scale=1;
    enemy23.velocityX=-10;
    enemy23.lifetime=300;
    
    EnemyGroup2.add(enemy23);
}
}
function Enemy3(){
  if (World.frameCount%60 ===0){
    var enemy34 = createSprite(windowWidth,windowHeight/2,20,20);
    enemy34.addImage(enemy3);
    enemy34.y=Math.round(random(45,500));
    enemy34.scale=1;
    enemy34.velocityX=-11;
    enemy34.lifetime=300;
    
    EnemyGroup3.add(enemy34);
}
}
function Enemy4(){
  if (World.frameCount%60 ===0){
    var enemy45 = createSprite(windowWidth,windowHeight/2,20,20);
    enemy45.addImage(enemy4);
    enemy45.y=Math.round(random(45,500));
    enemy45.scale=1;
    enemy45.velocityX=-12;
    enemy45.lifetime=300;
    
    EnemyGroup4.add(enemy45);
}
}
function Enemy5(){
  if (World.frameCount%60 ===0){
    var enemy56 = createSprite(windowWidth,windowHeight/2,20,20);
    enemy56.addImage(enemy5);
    enemy56.y=Math.round(random(45,500));
    enemy56.scale=0.3;
    enemy56.velocityX=-13;
    enemy56.lifetime=300;
    
    EnemyGroup5.add(enemy56);
}
}