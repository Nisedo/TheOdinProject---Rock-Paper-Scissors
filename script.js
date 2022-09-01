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

  let scorePlayer1 = 0;
  let scorePlayer2 = 0;

  function playRound(playerSelection, computerSelection){
    
    player1 = prompt("Rock, Paper or Scissors ?: ").toUpperCase();
    console.log("Player 1 choose:", player1)
    console.log(typeof player1)
    while (player1 != "ROCK" || player1 != "PAPER" || player1 != "SCISSORS"){
        prompt("Rock, Paper or Scissors ?: ").toUpperCase();
    }

    player2 = getComputerChoice();
    console.log("Computer choose:", player2)

    if (player1 == "ROCK" && player2 == "Scissors"){
        console.log("You Win! Rock beats Scissors");
        return scorePlayer1++;
    } else if (player1 == "ROCK" && player2 == "Rock"){
        console.log("It's a tie");
    } else if (player1 == "ROCK" && player2 == "Paper"){
        console.log("You Lose! Paper beats Rock")
        return(scorePlayer2++);
    } else if (player1 == "PAPER" && player2 == "Scissors"){
        console.log("You Lose! Scissors beats Paper")
        return(scorePlayer2++);
    } else if (player1 == "PAPER" && player2 == "Paper"){
        console.log("It's a tie");
    } else if (player1 == "PAPER" && player2 == "Rock"){
        console.log("You Win! Paper beats Rock")
        return scorePlayer1++;
    } else if (player1 == "SCISSORS" && player2 == "Scissors"){
        console.log("It's a tie");
    } else if (player1 == "SCISSORS" && player2 == "Paper"){
        console.log("You Win! Scissors beats Paper")
        return(scorePlayer1++);
    } else if (player1 == "SCISSORS" && player2 == "Rock"){
        console.log("You Lose! Scissors beats Rock");
        return(scorePlayer2++);
        }
    }

  // playRound();

  function game(){  
  for (let i = 0; i < 5; i++) {
            playRound();
            console.log("Score Player 1: ", scorePlayer1, "Score Computer: ", scorePlayer2);
        }
    }
    game();
