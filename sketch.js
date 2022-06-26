var chef;
var eggGroups, flourGroups, chocoGroups, jackfruitGroups;
var eggCount = 0;
var flourCount = 0;
var chocoCount = 0;
var gameState = PLAY;
const END=0;
const PLAY=1;

function preload(){
   
}

function setup(){
createCanvas(1100,600)
chef = createSprite(900,450,100,100);
eggGroups = new Group()
flourGroups =  new Group()
chocoGroups = new Group()
jackfruitGroups = new Group()

}


function draw(){
    background(0)
    if(gameState === PLAY)
    {
    text("eggCount"+eggCount,50,100)
    text("flourCount"+flourCount,50,50)
    text("chocoCount"+chocoCount,50,150)
    if(keyDown("LEFT")){
        chef.x-=5  
    }

    if(keyDown("RIGHT")){
        chef.x += 5
    }    

    if(eggGroups.isTouching(chef)){
        eggCount +=2
    }

    if(flourGroups.isTouching(chef)){
        flourCount +=2
    }

    if(chocoGroups.isTouching(chef)){
        chocoCount +=1
    }
    if(jackfruitGroups.isTouching(chef)){
        eggCount -=4
        flourCount -=4
        chocoCount -=4
    }

    if(eggCount === -100 || flourCount === -100 || chocoCount === -100){
        gameState = END
    }
    }
    else if(gameState === END){
        eggGroups.setVelocityYEach(0);
        flourGroups.setVelocityYEach(0);
        chocoGroups.setVelocityYEach(0);
        jackfruitGroups.setVelocityYEach(0);
        eggCount = 0;
        flourCount = 0;
        chocoCount = 0;
        eggGroups.destroyEach();
        flourGroups.destroyEach();
        chocoGroups.destroyEach();
        jackfruitGroups.destroyEach();
    }

    
    flours();
    eggs();
    chocos();
    jackfruits();
    drawSprites()
}

function flours(){
    if(frameCount % 50 === 0 ){
    var flour = createSprite(Math.round(random(200,1000)),50,20,50);
    flour.velocityY = 7;
    flour.lifetime = 150;
    flourGroups.add(flour);
    }
}
 function eggs(){
     if(frameCount % 30 === 0){
         var egg = createSprite(Math.round(random(200,1000)),20,15,20);
         egg.velocityY = 6;
         egg.lifetime = 150;
         eggGroups.add(egg);
     }
 }
 function chocos(){
     if(frameCount % 30 === 0){
         var choco = createSprite(Math.round(random(100,500)),20,20,20);
         choco.velocityY = 4;
         choco.lifetime = 150;
         chocoGroups.add(choco);

     }
 }  
 function jackfruits(){
     if(frameCount % 60 === 0){
         var jackfruit = createSprite(Math.round(random(150,1000)),50,50,50);
         jackfruit.velocityY = 3;
         jackfruit.lifetime = 150;
         jackfruitGroups.add(jackfruit);
     }
 }