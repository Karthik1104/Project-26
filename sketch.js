const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
//var backgroundImg,platform;
var bird, slingShot;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    backgroundColor = "blue"
    //backgroundColor="blue"
       
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;




    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(755,355,30,40);
    box2 = new Box(755,355,30,40);
    
    

    box3 = new Box(755,355,30,40);
    box4 = new Box(755,355,30,40);
    

    

    box5 = new Box(755,355,30,40);
    box6 = new Box(755,355,30,40);
    box7 = new Box(755,355,30,40);


    
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);



    

    bird = new Bird(100,100);

    
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    //background(backgroundImg);
    
    background("Darkgrey");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();


   
    

    box5.display();
    

    bird.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}