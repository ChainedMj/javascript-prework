const printMessage = function (msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function (){
	document.getElementById('messages').innerHTML = '';
}

const buttonClicked = function (argButtonName) {
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber)
  
  displayResult(argButtonName, computerMove);
}

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


const getMoveName = function(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } 
  }


/**
 * Describe this function...
 */
const displayResult = function(argPlayerMove, argComputerMove) {
  if ((argPlayerMove == 'papier' && argComputerMove == 'kamień')
       || ((argPlayerMove == 'nożyce') && (argComputerMove == 'papier'))
       || ((argPlayerMove == 'kamień') && (argComputerMove == 'nożyce'))) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('remis');
  } else {
    printMessage('przegywasz')
  }

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}