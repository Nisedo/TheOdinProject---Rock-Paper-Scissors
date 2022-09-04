// Randomly pick the computer choice
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

  let scorePlayer = 0;
  let scoreComputer = 0;
  let ties = 0;

  // Play one round, update the scores and log the winner
  function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    console.log("Computer choose:", computerSelection)
    if (playerSelection == "ROCK" && computerSelection == "Scissors"){
        console.log("You Win! Rock beats Scissors");
        return scorePlayer++;
    } else if (playerSelection == "ROCK" && computerSelection == "Rock"){
        console.log("It's a tie");
    } else if (playerSelection == "ROCK" && computerSelection == "Paper"){
        console.log("You Lose! Paper beats Rock")
        return scoreComputer++;
    } else if (playerSelection == "PAPER" && computerSelection == "Scissors"){
        console.log("You Lose! Scissors beats Paper")
        return scoreComputer++;
    } else if (playerSelection == "PAPER" && computerSelection == "Paper"){
        console.log("It's a tie");
    } else if (playerSelection == "PAPER" && computerSelection == "Rock"){
        console.log("You Win! Paper beats Rock")
        return scorePlayer++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "Scissors"){
        console.log("It's a tie");
    } else if (playerSelection == "SCISSORS" && computerSelection == "Paper"){
        console.log("You Win! Scissors beats Paper")
        return scorePlayer++;
    } else if (playerSelection == "SCISSORS" && computerSelection == "Rock"){
        console.log("You Lose! Scissors beats Rock");
        return scoreComputer++;
        }
    }

    // Ask the user for his choice, play one round, log the scores until 5 games are played then log the winner
    function game(){
        for (let i = 1; i < 6; i++){
            playerSelection = prompt(`Type Rock, Paper, or Scissors:`).toUpperCase();
            playRound(playerSelection, getComputerChoice)
            console.log("Game: " + i + '\n' + "Your Score: "+ scorePlayer + '\n' + "Computer Score: " + scoreComputer);
            if (i == 5){
                if (scorePlayer > scoreComputer){
                    console.log("Congrats, you win !")
                } else if (scorePlayer < scoreComputer){
                    console.log("Too bad, you loose !")
                } else {
                    console.log("It's a tie !")
                }
                }
        }
}

game();