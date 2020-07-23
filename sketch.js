class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 70;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  };
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  //set background to white
  background("aqua");
  
  //player Paddle
  var playerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
  
  //computer paddle
  var computerpaddle= new Paddle();
  computerpaddle.yPosition=200
  computerpaddle.display();
  
  
}
