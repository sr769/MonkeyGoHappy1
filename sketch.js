var monkey, monkey_running;
var banana, bananaImg, obstacle, obstacleImg;
var bananaGroup, obstacleGroup;
var ground;
var score;

function preload(){
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  var survivalTime = 0;
  score = 0;
}

function draw() {
  background(180);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 500,50)
  
  stroke("blue");
  textSize(20);
  fill("blue");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime: "+survivalTime,100,50);
  
  if(ground.x<300){
    ground.x=300;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -5;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacle();
  
  drawSprites();
}

function spawnBanana(){
  if(frameCount%80===0){
    banana = createSprite(600,150);
    banana.addImage(bananaImg);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount%300===0){
    obstacle = createSprite(600,330);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}