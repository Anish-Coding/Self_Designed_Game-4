//Creating variable for hider1(PLAYING CHARACTER).
var hider1;

//Creating variables for hide2 - hider5(NON - PLAYING CHARACTER).
var hider2, hider3, hider4, hider5;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, 
    wall12, wall13, wall14, wall15, wall16;

var seekerImg;

var hiderGroup, wallGroup, edgeGroup;

var score = 0; 

// gameState is set as start initially then moves to PLAY then either WIN or LOSE1 gamestates.
var gameState = "START";

function preload() {
  //Adding images for the start and restart button.
  startButtonImg = loadImage("start.png");
  restartButtonImg = loadImage("Restart.jpg");

  //Adding images for the cages, gold bars and coin1s. 
  cageImg = loadImage("Cage.jpg");
  goldImg = loadImage("gold.jpg");
  coinImg = loadImage("coin.png");
  seekerRightImg = loadImage("SeekerRight.png");
  seekerLeftImg = loadImage("SeekerLeft.png");
  hiderRightImg = loadImage("HiderRight.png");
  hiderLeftImg = loadImage("HiderLeft.png");

  //Images for arrow keys (touch)
  RightImg = loadImage("right.png");
  LeftImg = loadImage("left.png");
  UpImg = loadImage("up.png");
  DownImg = loadImage("down.png");

  //Sound
  winSound = loadSound("Lose.wav");
  coinSound = loadSound("CoinSound.wav");
  goldSound = loadSound("GoldSound.mp3");
  gameOver = loadSound("gameOver.wav");
}

function setup() {
  //Create canvas with width - 900, height - 720
  createCanvas(windowWidth, windowHeight);
  
  hiderGroup = new Group();
  wallGroup = new Group();
  edgeGroup = new Group();

  // BUTTONS
  startButton = createSprite(400,400);
  startButton.addImage("startButton",startButtonImg);
  startButton.scale = 0.1;

  restartButton = createSprite(-400,-400)
  restartButton.addImage("restartButton",restartButtonImg);
  restartButton.scale = 0.1;

  // COINS AND GOLD BARS
  coin1 = createSprite(100,100,2,2);
  coin1.addImage("coin1", coinImg);
  coin1.scale = 0.01;
  coin1.visible = false;

  coin2 = createSprite(200,500,2,2);
  coin2.addImage("coin2", coinImg);
  coin2.scale = 0.01;
  coin2.visible = false;

  coin3 = createSprite(600,500,2,2);
  coin3.addImage("coin3", coinImg);
  coin3.scale = 0.01;
  coin3.visible = false;

  coin4 = createSprite(300,300,2,2);
  coin4.addImage("coin4", coinImg);
  coin4.scale = 0.01;
  coin4.visible = false;

  coin5 = createSprite(800,600,2,2);
  coin5.addImage("coin5", coinImg);
  coin5.scale = 0.01;
  coin5.visible = false;

  gold1 = createSprite(500,100,2,2);
  gold1.addImage("gold1", goldImg);
  gold1.scale = 0.1;
  gold1.visible = false;

  gold2 = createSprite(100,600,2,2);
  gold2.addImage("gold2", goldImg);
  gold2.scale = 0.1;
  gold2.visible = false;

  gold3 = createSprite(500,600,2,2);
  gold3.addImage("gold3", goldImg);
  gold3.scale = 0.1;
  gold3.visible = false;

  moveup = createSprite(width-300, 100, 20, 20)
  moveup.addImage(UpImg);
  moveup.scale = 0.1;

  moveleft = createSprite(width-350, 150, 20, 20)
  moveleft.addImage(LeftImg);
  moveleft.scale = 0.1;
  
  moveright = createSprite(width-250, 150, 20, 20)
  moveright.addImage(RightImg);
  moveright.scale = 0.1;

  movedown = createSprite(width-300, 200, 20, 20)
  movedown.addImage(DownImg);
  movedown.scale = 0.1;

  // PLAYERS
  
  // PC
  // Main hider
  hider1 = createSprite(300, 400, 20, 20);
  hider1.addAnimation("hiderRight", hiderRightImg);
  hider1.addAnimation("hiderLeft", hiderLeftImg);
  hider1.scale = 0.22;

  // NPC
  // Seeker
  seeker = createSprite(400,300,20,20);
  seeker.setVelocity(3,3);
  seeker.addAnimation("seeker", seekerRightImg);
  seeker.addAnimation("seeker", seekerLeftImg);
  seeker.scale = 0.22;

  // Hiders
  hider2 = createSprite(500, 400, 20, 20);
  hider2.shapeColor = color("blue");
  hider2.addAnimation("hiderRight", hiderRightImg);
  hider2.addAnimation("hiderLeft", hiderLeftImg);
  hider2.scale = 0.22;

  hider3 = createSprite(300, 500, 20, 20);
  hider3.shapeColor = color("blue");
  hider3.addAnimation("hiderRight", hiderRightImg);
  hider3.addAnimation("hiderLeft", hiderLeftImg);
  hider3.scale = 0.22;

  hider4 = createSprite(400, 500, 20, 20);
  hider4.shapeColor = color("blue");
  hider4.addAnimation("hiderRight", hiderRightImg);
  hider4.addAnimation("hiderLeft", hiderLeftImg);
  hider4.scale = 0.22;

  hider5 = createSprite(500, 500, 20, 20);
  hider5.shapeColor = color("blue");
  hider5.addAnimation("hiderRight", hiderRightImg);
  hider5.addAnimation("hiderLeft", hiderLeftImg);
  hider5.scale = 0.22;
  
  hider1.visible = false
  hider2.visible = false
  hider3.visible = false
  hider4.visible = false
  hider5.visible = false

  seeker.visible = false

  // Hider's velocity x and y will be 2.(So they move randomly)
  hider2.velocityX = 2;
  hider2.velocityY = 2;

  hider3.velocityX = 2;
  hider3.velocityY = 2;

  hider4.velocityX = 2;
  hider4.velocityY = 2;
  
  hider5.velocityX = 2;
  hider5.velocityY = 2;

  hiderGroup.add(hider1);
  hiderGroup.add(hider2);
  hiderGroup.add(hider3);
  hiderGroup.add(hider4);
  hiderGroup.add(hider5);

  // CAGE OBJECT
  cage1 = createSprite(200, 200, 10,10);
  cage2 = createSprite(0, 0, 10,10);
  cage3 = createSprite(0, 0, 10,10);
  cage4 = createSprite(0, 0, 10,10);
  cage5 = createSprite(0, 0, 10,10);

  cage1.addImage("cageImg", cageImg);
  cage1.scale = 0.1;
  cage1.visible = false;

  cage2.addImage("cageImg", cageImg);
  cage2.scale = 0.1;
  cage2.visible = false;

  cage3.addImage("cageImg", cageImg);
  cage3.scale = 0.1;
  cage3.visible = false;

  cage4.addImage("cageImg", cageImg);
  cage4.scale = 0.1;
  cage4.visible = false;

  cage5.addImage("cageImg", cageImg);
  cage5.scale = 0.1;
  cage5.visible = false;
  
  // MAZE
  // Edges
  edge1 = createSprite(450,10,900,20);
  edge1.shapeColor = color("orange");

  edge2 = createSprite(10,360,20,720);
  edge2.shapeColor = color("orange");
  
  edge3 = createSprite(450,710,900,20);
  edge3.shapeColor = color("orange");
  
  edge4 = createSprite(890,360,20,720);
  edge4.shapeColor = color("orange");

  edgeGroup.add(edge1);
  edgeGroup.add(edge2);
  edgeGroup.add(edge3);
  edgeGroup.add(edge4);

  // Horizontal or vertical lines.
  wall1 = createSprite(60,150,20,200);
  wall1.shapeColor = color("black");

  wall2 = createSprite(400,60,300,20);
  wall2.shapeColor = color("black");

  wall3 = createSprite(300,150,150,20);
  wall3.shapeColor = color("black");

  wall4 = createSprite(460,240,120,20);
  wall4.shapeColor = color("black");

  wall5 = createSprite(200,320,20,150);
  wall5.shapeColor = color("black");

  wall6 = createSprite(160,390,100,20);
  wall6.shapeColor = color("black");

  wall7 = createSprite(110,455,20,150);
  wall7.shapeColor = color("black");

  wall8 = createSprite(200,600,150,20);
  wall8.shapeColor = color("black");

  wall9 = createSprite(400,500,300,20);
  wall9.shapeColor = color("black");

  wall10 = createSprite(400,570,20,150);
  wall10.shapeColor = color("black");

  wall11 = createSprite(620,650,20,100);
  wall11.shapeColor = color("black");

  //Slant lines
  wall12 = createSprite(750,480,20,150);
  wall12.shapeColor = color("black");
  wall12.rotation = -45;

  wall13 = createSprite(660,260,20,200);
  wall13.shapeColor = color("black");
  wall13.rotation = -45;

  wall14 = createSprite(740,120,20,100);
  wall14.shapeColor = color("black");
  wall14.rotation = 45;

  wall15 = createSprite(715,166,20,50);
  wall15.shapeColor = color("black");
  wall15.rotation = -45;

  wallGroup.add(wall1);
  wallGroup.add(wall2);
  wallGroup.add(wall3);
  wallGroup.add(wall4);
  wallGroup.add(wall5);
  wallGroup.add(wall6);
  wallGroup.add(wall7);
  wallGroup.add(wall8);
  wallGroup.add(wall9);
  wallGroup.add(wall10);
  wallGroup.add(wall11);
  wallGroup.add(wall12);
  wallGroup.add(wall13);
  wallGroup.add(wall14);
  wallGroup.add(wall15);
} 

function draw() {
  // Background color is green.
  background(random(0,255),random(0,255),random(0,255));  

  //Text for the score -
  textSize(20);
  fill("black");
  text("Score = " + score, 1200,300);

  cage1.x = hider1.x;
  cage1.y = hider1.y;

  cage2.x = hider2.x;
  cage2.y = hider2.y;

  cage3.x = hider3.x;
  cage3.y = hider3.y;

  cage4.x = hider4.x;
  cage4.y = hider4.y;

  cage5.x = hider5.x;
  cage5.y = hider5.y;

  if(mousePressedOver(startButton)){
    gameState = "PLAY";
    startButton.destroy();
  }

  if(score === 35){
    gameState = "WIN"
  }

  if(gameState === "PLAY"){

    hider1.visible = true;
    hider2.visible = true;
    hider3.visible = true;
    hider4.visible = true;
    hider5.visible = true;
    
    coin1.visible = true;
    coin2.visible = true;
    coin3.visible = true;
    coin4.visible = true;
    coin5.visible = true;

    gold1.visible = true;
    gold2.visible = true;
    gold3.visible = true;

    seeker.visible = true
    // If the arrow keys are pressed then they move in their respective directions.
    if(keyDown("UP_ARROW") || mousePressedOver(moveup)){
      hider1.y-= 4;
    }

    if(keyDown("DOWN_ARROW") || mousePressedOver(movedown)){
      hider1.y+= 4;
    }

    if(keyDown("RIGHT_ARROW") || mousePressedOver(moveright)){
      hider1.x+= 4;
      hider1.changeAnimation("hiderRight", hiderRightImg);
    }

    if(keyDown("LEFT_ARROW") || mousePressedOver(moveleft)){
      hider1.x-= 4;
      hider1.changeAnimation("hiderLeft", hiderLeftImg);
    }

    if(seeker.isTouching(hider1)){
      gameState = "LOSE1"
    }

    if(seeker.isTouching(hider2)){
      cage2.visible = true;
      hider2.velocityX = 0;
      hider2.velocityY = 0;
    }
    
    if(seeker.isTouching(hider3)){
      cage3.visible = true;
      hider3.velocityX = 0;
      hider3.velocityY = 0;
    }

    if(seeker.isTouching(hider4)){
      cage4.visible = true;
    }

    if(seeker.isTouching(hider5)){
      cage5.visible = true;
    }

    if(hider1.isTouching(coin1)){
      coinSound.play();
      coin1.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin2)){
      coinSound.play();
      coin2.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin3)){
      coinSound.play();
      coin3.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin4)){
      coinSound.play();
      coin4.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin5)){
      coinSound.play();
      coin5.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(gold1)){
      goldSound.play();
      gold1.destroy();
      score = score + 10;
    }

    if(hider1.isTouching(gold2)){
      goldSound.play();
      gold2.destroy();
      score = score + 10;
    }

    if(hider1.isTouching(gold3)){
      goldSound.play();
      gold3.destroy();
      score = score + 10;
    }
  }

  if(gameState === "LOSE1"){
    gameOver.play();
    restartButton.x = 400;
    restartButton.y = 400;
  }

  if(mousePressedOver(restartButton)){
    seeker.setVelocity(5,5); // adaptivity for life 2
    restartButton.destroy();
    gameState = "PLAY2"
  }

  if(gameState === "PLAY2"){
    // If the arrow keys are pressed then they move in their respective directions.
    if(keyDown("UP_ARROW ") || mousePressedOver(moveup)){
      hider1.y-= 4;
    }

    if(keyDown("DOWN_ARROW") || mousePressedOver(movedown)){
      hider1.y+= 4;
    }

    if(keyDown("RIGHT_ARROW") || mousePressedOver(moveright)){
      hider1.x+= 4;
      hider1.changeAnimation("hiderRight", hiderRightImg);
    }

    if(keyDown("LEFT_ARROW") || mousePressedOver(moveleft)){
      hider1.x-= 4;
      hider1.changeAnimation("hiderLeft", hiderLeftImg);
    }
    if(seeker.isTouching(hider1)){
      gameOver.play();
      gameState = "LOSE2"
    }

    if(seeker.isTouching(hider2)){
      cage2.visible = true;
      hider2.velocityX = 0;
      hider2.velocityY = 0;
    }
    
    if(seeker.isTouching(hider3)){
      cage3.visible = true;
      hider3.velocityX = 0;
      hider3.velocityY = 0;
    }

    if(seeker.isTouching(hider4)){
      cage4.visible = true;
    }

    if(seeker.isTouching(hider5)){
      cage5.visible = true;
    }

    if(hider1.isTouching(coin1)){
      coinSound.play();
      coin1.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin2)){
      coinSound.play();
      coin2.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin3)){
      coinSound.play();
      coin3.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin4)){
      coinSound.play();
      coin4.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(coin5)){
      coinSound.play();
      coin5.destroy();
      score = score + 1;
    }

    if(hider1.isTouching(gold1)){
      goldSound.play();
      gold1.destroy();
      score = score + 10;
    }

    if(hider1.isTouching(gold2)){
      goldSound.play();
      gold2.destroy();
      score = score + 10;
    }

    if(hider1.isTouching(gold3)){
      goldSound.play();
      gold3.destroy();
      score = score + 10;
    }
  }

  if(gameState === "LOSE2"){
    wallGroup.destroyEach();
    hiderGroup.destroyEach();
    seeker.destroy();
    edgeGroup.destroyEach();
    coin1.destroy();
    coin2.destroy();
    coin3.destroy();
    coin4.destroy();
    coin5.destroy();
    gold1.destroy();
    gold2.destroy();
    gold3.destroy();
    cage1.destroy();
    cage2.destroy();
    cage3.destroy();
    cage4.destroy();
    cage5.destroy();
    movedown.destroy();
    moveleft.destroy();
    moveright.destroy();
    moveup.destroy();
    textSize(100)
    text("GAME OVER!", 400, 400);
  }

  if(gameState === "WIN"){
    wallGroup.destroyEach();
    hiderGroup.destroyEach();
    seeker.destroy();
    edgeGroup.destroyEach();
    coin1.destroy();
    coin2.destroy();
    coin3.destroy();
    coin4.destroy();
    coin5.destroy();
    gold1.destroy();
    gold2.destroy();
    gold3.destroy();
    cage1.destroy();
    cage2.destroy();
    cage3.destroy();
    cage4.destroy();
    cage5.destroy();
    movedown.destroy();
    moveleft.destroy();
    moveright.destroy();
    moveup.destroy();
    textSize(100)
    text("YOU WIN!", 400, 400);
  }

  // Code for the hiders and seekers to bounce off the walls and edges
  hiderGroup.bounceOff(wallGroup);
  hiderGroup.bounceOff(edgeGroup);

  seeker.bounceOff(wallGroup);
  seeker.bounceOff(edgeGroup);

  drawSprites();

}
