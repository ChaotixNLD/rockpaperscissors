/*
first run at creating rock paper scissors;
what should the game do:
    ask for player input
        store player input
    get computer input
        store computer input
    compare player and computer input
        declare a winner, player or computer
        count number of wins

*/
const computerChoices = ["Rock", "Paper", "Scissors"]
let playerChoice = ""
let computerChoice = ""
let humanScore = 0
let computerScore = 0

function getPlayerChoice() {
    let userInput = prompt("Please type: Rock, Paper, or Scissors")
    if (userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "scissors"){
    playerChoice = userInput
    console.log(playerChoice)
    }
    else {
        console.log("Invalid input")
        return getPlayerChoice()
    }
}

function getComputerChoice() {
    computerChoice = computerChoices[Math.floor(Math.random() * 3)]
    console.log(computerChoice)
}

function playRound(){
    getPlayerChoice()
    getComputerChoice()
    if(playerChoice === computerChoice.toLowerCase()){
        console.log("it's a Tie!")
    }
    else if(playerChoice === "rock" && computerChoice === "Scissors" || playerChoice === "paper" && computerChoice === "Rock" || playerChoice === "scissors" && computerChoice === "Paper"){
        humanScore = humanScore + 1
        console.log("Player Wins Round!")
        console.log("player: " + humanScore + " - " + computerScore + ": computer")
    }
    else{
        computerScore = computerScore + 1
        console.log("Computer Wins Round!")
        console.log("player: " + humanScore + " - " + computerScore + " :computer")
    }
}


function playGame(){
    for(let i = 1; i<=5; i++){
        playRound()
    }
    
    if (humanScore > computerScore){
        console.log("Player Wins the Game!!!")
    }
    else if (computerScore > humanScore){
        console.log("Computer Wins the Game!!")
    }
    else if (humanScore === computerScore){
        console.log("Unbelievable!! It's A Tie!!!")
    }
}
playGame()