//Create variables here
var dog,foodStock,database;

function preload()
{
	//load images here
  dogImg=loadImage("dogImg.png");
  happyImg=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  database=firebase.database();

  dog = createSprite(250,300,0,0);
  dog.addImage(dogImg);
  dog.scale=0.3;

  database.ref("Food").on("value",readStock);

}

function readStock(data){
  foodStock=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x-=1;
  }
  database.ref("/").set({Food:x});
}

function draw() { 
  background(46,139,87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(happyImg);
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("black");
  textAlign(CENTER);
  text("Press UP arrow to feed your dog",250,25);
  text("Food remaining: "+foodStock,250,150);
}
    


