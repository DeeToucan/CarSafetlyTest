//creates car and wall
var car;
var wall;

//creates the varibles
var speed,weight;
var TS;


function setup() {
  createCanvas(windowWidth,windowHeight);

  //defines the car and wall
  car=createSprite(50,height/2,50,50);
  wall=createSprite(width-50,height/2,60,height/2);

  //sets the TS(test state) to s(start) when you load the website
  TS="s";


  
}

function draw() {
  background(255,255,255); 
  
  //defines what happens when the TS(test state) is a s(start)
  if (TS=="s"){
    //creates a random varible for the speed and weight of the car
    speed=Math.round(random(55,90));
    weight=Math.round(random(400,1500));

    //creates the text that says "Press SPACE to launch the car"
    textSize(30);
    text("Press SPACE to launch the car",width/2,height-30);

    //resets the car's x and y postion
    car.x=50;
    car.y=height/2;
    
    //resets the car's color
    car.shapeColor=color(123);
    wall.shapeColor=color(123);


    //defines what happens when you press space 
    if (keyDown("space")){
      //switches the state to l(launch)
      TS="l";
    }
  }

  //defines what happen when the TS(test state) is l(launch)
  if (TS=="l"){
  
    //sets the car's speed
    car.velocityX=speed;

    //defines what happens when the car collides with the wall
    if (car.isTouching(wall)){
      //sets the TS(test state) to c(crash)
      TS="c";
    }
  }

  if (TS=="c"){

    //stops the car
    car.velocityX=0;


    //creates the text documenting the deformation and how to reset the tes
    textSize(30);
    text("Press R to reset the test",width/2,height-60);
    textSize(15);
    text("The deformation was: " + CarSafetlyTest(weight,speed),width/2,height-30);

    //defines what the color of the wall and car is
    if (CarSafetlyTest(weight,speed)<100){
      //green
      car.shapeColor=color(0,255,0);
      wall.shapeColor=color(0,255,0);
    } else {
      if (CarSafetlyTest(weight,speed)>180){
        //red
        car.shapeColor=color(255,0,0);
        wall.shapeColor=color(255,0,0);
      } else {
        //yellow
        car.shapeColor=color(230,230,0);
        wall.shapeColor=color(230,230,0);
      }
    }

    //defines what happpens when the R is pressed
    if (keyDown("r")){
      //sets the TS(test state) to s(start)
      TS="s";
    }

  }

  //makes sprites visable
  drawSprites();
}

//the function for calculating the car's deformation
function CarSafetlyTest(weight,speed){

  //the equation used for calculating the car's deformation
  return Math.floor(0.5*weight*speed*speed/22500);
  
}