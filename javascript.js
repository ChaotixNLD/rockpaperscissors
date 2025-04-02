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
let playerScore = 0
let computerScore = 0

function getPlayerChoice() {
    let userInput = prompt("Please type: Rock, Paper, or Scissors")
    if (userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "scissors"){
    playerChoice = userInput
    getComputerChoice()
    }
    else {
        console.log("Invalid input")
        return getPlayerChoice()
    }
}
getPlayerChoice()

function getComputerChoice() {
    computerChoice = computerChoices[Math.floor(Math.random() * 3)]
}

