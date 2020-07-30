var bullet1, bullet1Img;
var bullet2, bullet2Img;
var bullet3, bullet3Img;
var bullet4, bullet4Img;

var wall, wallImg;

var start1, start1Img;
var start2, start2Img;
var start3, start3Img;
var start4, start4Img;

var bullet1Deformation, bullet2Deformation, bullet3Deformation, bullet4Deformation;

var bullet1Weight, bullet2Weight, bullet3Weight, bullet4Weight;

var bullet1Speed, bullet2Speed, bullet3Speed, bullet4Speed;

var line, lineImg;

var a,b,c,aImg,bImg,cImg

function preload() {
    //To load Images

   
    wallImg = loadImage("wall.jpg");
    
    start1Img = loadImage("start.png");
    start2Img = loadImage("start.png");
    start3Img = loadImage("start.png");
    start4Img = loadImage("start.png");

    lineImg = loadImage("line.jpg");

    aImg = loadImage("A.png");
    bImg = loadImage("B.png");
    cImg = loadImage("C.png");
}

function setup() {
  createCanvas(1000, 600);
 
  //To create sprites

  bullet1 = createSprite(100,70,20,20);
 

  bullet2 = createSprite(100,225,20,20);
  

  bullet3 = createSprite(100,370,20,20);
  

  bullet4 = createSprite(100,530,20,20);



  wall = createSprite(947, 300);
  wall.addImage("Wall", wallImg);
  wall.scale = 0.63;


  start1 = createSprite(947, 70);
  start1.addImage("start1", start1Img);
  start1.scale = 0.2;

  start2 = createSprite(947, 225);
  start2.addImage("start2", start2Img);
  start2.scale = 0.2;

  start3 = createSprite(947, 370);
  start3.addImage("start3", start3Img);
  start3.scale = 0.2;

  start4 = createSprite(947, 530);
  start4.addImage("start4", start4Img);
  start4.scale = 0.2;


  line = createSprite(445, 1);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445, 150);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445,300);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445,450);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  line = createSprite(445,599);
  line.addImage("Line", lineImg);
  line.scale = 0.9;

  //To assign weights

  bullet1Weight = random(400,1500);
  bullet2Weight = random(400,1500);
  bullet3Weight = random(400,1500);
  bullet4Weight = random(400,1500);

}

function draw() {
  background(128, 200, 119);
 
  //To add velocity to the sprites when mouse pressed over start button

  if (mousePressedOver(start1)) {
    bullet1.velocityX = random(5,9);
    bullet1Speed = bullet1.velocityX*1;
    bullet1Deformation = round (0.5*bullet1Weight*bullet1Speed*bullet1Speed / 22500);
  }
  
  if (mousePressedOver(start2)) {
    bullet2.velocityX = random(5,9);
    bullet2Speed = bullet2.velocityX*1;
    bullet2Deformation = round (0.5*bullet2Weight*bullet2Speed*bullet2Speed / 22500);
  }

  if (mousePressedOver(start3)) {
    bullet3.velocityX = random(5,9);
    bullet3Speed = bullet3.velocityX*1;
    bullet3Deformation = round (0.5*bullet3Weight*bullet3Speed*bullet3Speed / 22500);
  }

  if (mousePressedOver(start4)) {
    bullet4.velocityX = random(5,9);
    bullet4Speed = bullet4.velocityX*1;
    bullet4Deformation = round (0.5*bullet4Weight*bullet4Speed*bullet4Speed / 22500);
  }




  drawSprites();


  //To assign the functions when the bullets hit the walls and the output reply

 if (bullet1.isTouching(wall)) {
   bullet1.velocityX = 0;
  
   if (bullet1Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,70);
    c = createSprite(947, 70);
    c.addImage("c", cImg);
    c.scale = 0.7;

   }
  
   if (bullet1Deformation > 100 && bullet1Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,70);
    b = createSprite(947, 70);
    b.addImage("b", bImg);
    b.scale = 0.7;

   }
  
   if (bullet1Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,70);
    a = createSprite(947, 70);
    a.addImage("a", aImg);
    a.scale = 0.7;

   }

 }




 if (bullet2.isTouching(wall)) {
   bullet2.velocityX = 0;

   start2.destroy();

   if (bullet2Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,225);
    c = createSprite(947, 225);
    c.addImage("c", cImg);
    c.scale = 0.7;

   }
  
   if (bullet2Deformation > 100 && bullet2Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,225);
    b = createSprite(947, 225);
    b.addImage("b", bImg);
    b.scale = 0.7;

   }
  
   if (bullet2Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,225);
    a = createSprite(947, 225);
    a.addImage("a", aImg);
    a.scale = 0.7;

   }

 }




 if (bullet3.isTouching(wall)) {
   bullet3.velocityX = 0;

    start3.destroy();

   if (bullet3Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,370);
    c = createSprite(947, 370);
    c.addImage("c", cImg);
    c.scale = 0.7;

   }
  
   if (bullet3Deformation > 100 && bullet3Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,370);
    b = createSprite(947, 370);
    b.addImage("b", bImg);
    b.scale = 0.7;

   }
  
   if (bullet3Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,370);
    a = createSprite(947, 370);
    a.addImage("a", aImg);
    a.scale = 0.7;

   }
 }




 if (bullet4.isTouching(wall)) {
   bullet4.velocityX = 0;

   

   if (bullet4Deformation > 180) {
    textFont("STENCIL");
    fill("RED");
    textSize(40);
    text ("Rate C : LETHAL",100,530);
    c = createSprite(947, 530);
    c.addImage("c", cImg);
    c.scale = 0.7;
    
   }
  
   if (bullet4Deformation > 100 && bullet4Deformation < 180) {
    textFont("STENCIL");
    fill("YELLOW");
    textSize(40);
    text ("Rate B : AVERAGE",100,530);
    b = createSprite(947, 530);
    b.addImage("b", bImg);
    b.scale = 0.7;
    
   }
  
   if (bullet4Deformation < 100) {
    textFont("STENCIL");
    fill("GREEN");
    textSize(40);
    text ("Rate A : GOOD",100,530);
    a = createSprite(947, 530);
    a.addImage("a", aImg);
    a.scale = 0.7;
    
   }
 }
}