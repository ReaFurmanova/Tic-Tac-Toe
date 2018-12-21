
const win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const board= document.getElementsByClassName('board')[0];
const player1 = "X";
let player1strike =[];
let player2strike = [];
const player2 = "O";
const resetButton = document.getElementById('button');
const space = document.getElementsByClassName('square');
let gameOver = false;
const whoIsWinner = document.getElementsByClassName('para')[0];
let xOrO = document.getElementById('who');
let currentPlayer = player1;
let click = 0


board.onclick = function(event){
	if (event.target.innerHTML != "") { return }
	event.target.innerHTML = currentPlayer;
	if(currentPlayer == player1){
		player1strike.push(parseInt(event.target.id));
		console.log(player1strike);
		isWin(player1strike,win);
		click += 1
	}
	else{
		player2strike.push(parseInt(event.target.id));
		console.log(player2strike);
		isWin(player2strike,win);
		click += 1
	}
	tie()
	changePlayer();
}

function changePlayer(){
	if(currentPlayer==player1){
		currentPlayer = player2;
	}
	else{
		currentPlayer = player1;
	}
}

function test(playerString,winString){
	if (playerString.includes(winString[0])&&playerString.includes(winString[1])&&playerString.includes(winString[2])){
		return true;
	}
	else
	{
		return false;
	}
}


function isWin(toJeJednoString,winString){
	console.log(win);
	for(let i = 0; i < 8; i++){

		gameOver = test(toJeJednoString, winString[i]);
		// tie();
		if (gameOver==true) {
			// window.alert("WIN Player "+ currentPlayer);
			whoIsWinner.classList.remove('hidden');
			xOrO.innerHTML = currentPlayer;
			} else {
		}

	}
}

function tie(){
	if (click == 9 && gameOver == false) {
		window.alert("This is a tie.");
		}
	}


resetButton.onclick = function(event){
	 	location.reload()
	}


