function Game(){
	this.gameStatus = 0; //0 -> Stop / 1-> Game Over / 2-> Running

	this.show = function(){
		if(this.gameStatus == 0){
			this.menu();
		}
		if(this.gameStatus == 1){
			this.gameOver();
		}
	}

	this.menu = function(){
		fill(230,0,0);
		textSize(48);
		textAlign(CENTER);
		text("Snake", width/2, height/2);
	}

	this.gameOver = function(){
		fill(230,0,0);
		textSize(48);
		textAlign(CENTER);
		text("GAME OVER", width/2, height/2);
	}

	this.stopGame = function(){
		this.gameStatus = 0;
	}

	this.endGame = function(){
		this.gameStatus = 1;
	}

	this.startGame = function(){
		this.gameStatus = 2;
	}
}