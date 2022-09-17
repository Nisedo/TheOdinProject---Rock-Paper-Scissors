function rockSelection() {
    playerSelection = "ROCK";
    game();
}

function paperSelection() {
    playerSelection = "PAPER";
    game();
}

function scissorsSelection() {
    playerSelection = "SCISSORS";
    game();
}

const btnrock = document.querySelector("#btnrock");
btnrock.addEventListener('click', () => {
  rockSelection();
});

const btnpaper = document.querySelector("#btnpaper");
btnpaper.addEventListener('click', () => {
  paperSelection();
});

const btnscissors = document.querySelector("#btnscissors");
btnscissors.addEventListener('click', () => {
  scissorsSelection();
});


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
  let result = "";

  const body = document.body
  const div = document.createElement("div")
  body.append(div)

  // Play one round, update the scores and log the winner
  function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    console.log("Computer choose:", computerSelection)
    if (playerSelection == "ROCK" && computerSelection == "Scissors"){
        result = "You Win! Rock beats Scissors";
        console.log("You Win! Rock beats Scissors");
        return scorePlayer++;
    
    } else if (playerSelection == "ROCK" && computerSelection == "Rock"){
        result = "It's a tie";
        console.log("It's a tie");
    
    } else if (playerSelection == "ROCK" && computerSelection == "Paper"){
        result = "You Lose! Paper beats Rock";
        console.log("You Lose! Paper beats Rock")
        return scoreComputer++;
    
    } else if (playerSelection == "PAPER" && computerSelection == "Scissors"){
        result = "You Lose! Scissors beats Paper";
        console.log("You Lose! Scissors beats Paper")
        return scoreComputer++;
    
    } else if (playerSelection == "PAPER" && computerSelection == "Paper"){
        result = "It's a tie";
        console.log("It's a tie");
    
    } else if (playerSelection == "PAPER" && computerSelection == "Rock"){
        result = "You Win! Paper beats Rock";
        console.log("You Win! Paper beats Rock")
        return scorePlayer++;
    
    } else if (playerSelection == "SCISSORS" && computerSelection == "Scissors"){
        result = "It's a tie";
        console.log("It's a tie");
    
    } else if (playerSelection == "SCISSORS" && computerSelection == "Paper"){
        result = "You Win! Scissors beats Paper";
        console.log("You Win! Scissors beats Paper")
        return scorePlayer++;
    
    } else if (playerSelection == "SCISSORS" && computerSelection == "Rock"){
        result = "You Lose! Scissors beats Rock";
        console.log("You Lose! Scissors beats Rock");
        return scoreComputer++;
        }
    }



    // Ask the user for his choice, play one round, log the scores until 5 games are played then log the winner
    function game(){
            i = 0
            playRound(playerSelection, getComputerChoice)
            console.log("Your Score: "+ scorePlayer + '\n' + "Computer Score: " + scoreComputer);

            div.innerText = result + "\nYour score: " + scorePlayer + "\nComputer score: " + scoreComputer +"\n"+"\n"

            if (scorePlayer == 5 || scoreComputer == 5)  {
                if (scorePlayer > scoreComputer){
                    alert("Congrats, you win !");
                    scorePlayer = 0;
                    scoreComputer = 0;
                    console.clear();
                } else if (scorePlayer < scoreComputer){
                    alert("Too bad, you loose !");
                    scorePlayer = 0;
                    scoreComputer = 0;
                    console.clear();
                } else {
                    alert("It's a tie !")
                    scorePlayer = 0;
                    scoreComputer = 0;
                    console.clear();
                }
            }
        }

