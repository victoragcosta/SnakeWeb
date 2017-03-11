var tile = 20;
var snake;
var food;
var game;

function setup() {
	createCanvas(600, 600);	
	
	snake = new Snake(tile);
	snake.startOver();

	food = new Food(tile);
	food.randomPos();
	frameRate(8);

	game = new Game();
}

function draw() {
	background(51);
	noStroke();

	game.show();

	snake.update();
	snake.eat(food);
	if(snake.collide()){
		food.randomPos();
	}
	food.show();
	snake.show2();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		snake.dir(0,-1);
	} else if(keyCode === DOWN_ARROW){
		snake.dir(0, 1);
	} else if(keyCode === LEFT_ARROW){
		snake.dir(-1, 0);
	} else if(keyCode === RIGHT_ARROW){
		snake.dir(1,0);
	}
}