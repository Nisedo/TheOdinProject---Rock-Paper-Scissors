const getComputerChoice= () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
      return 'Rock';
    }
    else if (randomNumber === 1){
      return 'Paper';
    }
    else if (randomNumber === 2){
    return 'Scissors';
    }
      }
  // console.log(getComputerChoice());

  function playRound(playerSelection, computerSelection){
    player1 = prompt("Rock, Paper or Scissors ?: ").toUpperCase();
    player2 = getComputerChoice();
    console.log(player2)
    if (player1 == "ROCK" && player2 == "Scissors")
        console.log("You Win! Rock beats Scissors");
    else if (player1 == "ROCK" && player2 == "Rock")
        console.log("It's a tie");
    else if (player1 == "ROCK" && player2 == "Paper")
        console.log("You Lose! Paper beats Rock");
    else if (player1 == "PAPER" && player2 == "Scissors")
        console.log("You Lose! Scissors beats Paper");
    else if (player1 == "PAPER" && player2 == "Paper")
        console.log("It's a tie");
    else if (player1 == "PAPER" && player2 == "Rock")
        console.log("You Win! Rock beats Rock");
    else if (player1 == "SCISSORS" && player2 == "Scissors")
        console.log("It's a tie");
    else if (player1 == "SCISSORS" && player2 == "Paper")
        console.log("You Win! Rock beats Paper");
    else if (player1 == "SCISSORS" && player2 == "Rock")
        console.log("You Lose! Scissors beats Rock");
        
  }

  playRound()

  function game(){
    playRound()
    for (let i = 0; i < 5; i++) {
        // your code here!
     }
  }
