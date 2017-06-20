function getUserChoice() {
  var userInput = prompt('What is your selection?');
  if (userInput.toLowerCase() === 'rock' || 'paper' || 'scissors' ) {
  	    return userInput;
  } else {
    console.log('Error! Enter either Rock, Paper or Scissor.');
  }
}

function getComputerChoice() {
 var randomNumber = Math.floor(Math.random()*2);
  
  	switch (randomNumber) {
    	case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors'; 
    }          
}
  
function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
     return 'This game is a tie.';
  } 
  	if(userChoice === 'rock') {
       if(computerChoice === 'scissors') {
          return 'You win!!!';
       } else {
         	return 'Computer wins!';
       }
    }
      
      if(userChoice === 'paper') {
         if(computerChoice === 'rock') {
            return 'You win!!!';
         } else {
            return 'Computer wins!';
         }
      }
      
      if(userChoice === 'scissors') {
         if(computerChoice === 'paper') {
            return 'You win!!!';
         } else {
            return 'Computer wins!';
         }
      }
  } 

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  	console.log('The computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}
  
 playGame();     
