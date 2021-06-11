var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	redBox1 = createSprite(width/2,650,200,20)
	redBox1.shapeColor ="red"
    
	redBox2 = createSprite(width/2-100,610,20,100)
	redBox2.shapeColor="red"

	redBox3 = createSprite(width/2+100,610,20,100)
	redBox3.shapeColor="red"
 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	 
	redBox1Body = Bodies.rectangle(width/2,650,200,20,{isStatic: true})
	redBox2Body = Bodies.rectangle(width/2-100,610,20,100,{isStatic: true})
    redBox3Body = Bodies.rectangle(width/2+100,610,20,100,{isStatic: true})
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, redBox1Body)
	World.add(world, redBox2Body)
	World.add(world, redBox3Body)
 	World.add(world, ground);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed(){
if(keyCode === DOWN_ARROW){
	Body.setStatic(packageBody, false);
}

}