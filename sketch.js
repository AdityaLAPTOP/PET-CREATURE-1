//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  var a = loadImage("images/dogImg.png")
  var b = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(800, 700);
  
  database=firebase.database();
  var dog=createSprite(10,200,250,250);
foodStock=database.ref('food');
foodStock.on("value",readStock)


}


function draw() {  
if(keyWentDown(UP_ARROW)){
  dog.addImage(a);
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

