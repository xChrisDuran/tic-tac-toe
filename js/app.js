// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM

  //var playerX = prompt("")
  //interesting variable name
var tttCounter = 0;

///basically your logic is good, but you just need jquery listeners
//winner is player 'x' or player 'o'
var getChampion = function(){
	if (winnerIs('x')){
		console.log("Player x Wins!");
			return 'x';
		} if (winnerIs ('o')) {
			console.log("Player o Wins!");
			return 'o';
		} return null;
	}

//The winner is... !
//'player' can be 'x' or 'o'...
//nice master function here
var winnerIs = function (player){
	return winsRow(player) || winsColum(player) || winsDiagnal(player);
}
var allThree = function(player, boxOne, boxTwo, boxThree){
	return(boxOne === player) && (boxTwo === player) && (boxThree === player);
}

//player wins by row
var winsRow = function(player){
	return allThree(player, boxValue('#a'), boxValue('#b'), boxValue('#c')) ||
	  allThree(player, boxValue('#d'), boxValue('#e'), boxValue('#f')) ||
	    allThree(player, boxValue('#g'), boxValue('#h'), boxValue('#i'));
}

//player wins by column
var winsColumn = function(player){
	return allThree(player, boxValue('#a'), boxValue('#d'), boxValue('#g')) ||
	  allThree(player, boxValue('#b'), boxValue('#e'), boxValue('#h')) ||
	    allThree(player, boxValue('#c'), boxValue('#f'), boxValue('#i'));
}

//player wins by diagnal
var winsDiagnal = function(player){
	return allThree(player, boxValue('#a'), boxValue('#e'), boxValue('#i')) ||
	  allThree(player, boxValue('#c'), boxValue('#e'), boxValue('#g'));
}

var allThree = function(player, boxOne, boxTwo, boxThree){
	return (boxOne === player) && (boxTwo === player) && (boxThree === player);
}
//way for player to win
//player x wins by rows.

//If you aren't gonna use this code maybe remove it...or maybe you are saving for later consideration?
/*var xWinsByRow = function(){
	return tripleXXX(box('a'), box('b'), box('c')) ||
	  tripleXXX(box('d'), box('e'), box('f')) ||
	  tripleXXX(box('g'), box('h'), box('i');
	}
	var tripleXXX = function (boxOne, boxTwo, boxThree){
		console.log("Three in a row. You win, X!");
	}

//player x wins by column
var oWinsByDiagnal = function(){
	return tripleOOO(box('a'), box('e'), box('i')) ||
	  tripleOOO(box('c'), box('e'), box('g'));
	}

//player o wins by rows.
var oWinsByRow = function(){
	return tripleOOO(box('a'), box('b'), box('c')) ||
	  tripleOOO(box('d'), box('e'), box('f')) ||
	  tripleOOO(box('g'), box('h'), box('i');
	}
	var tripleOOO = function (boxOne, boxTwo, boxThree){
		console.log("Three in a row. You win, O!");
	}
//player o wins by column
var oWinsByColomn = function(){
	return tripleOOO(box('a'), box('d'), box('g')) ||
	  tripleOOO(box('b'), box('e'), box('h')) ||
	  tripleOOO(box('c'), box('f'), box('i');
	}
	//player o wins by column
var oWinsByDiagnal = function(){
	return tripleOOO(box('a'), box('e'), box('i')) ||
	  tripleOOO(box('c'), box('e'), box('g'));
	}
*/

*/
