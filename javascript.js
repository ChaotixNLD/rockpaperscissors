
const btns = Array.from(document.querySelectorAll(".player-btn"))
const playerChoiceDisplay = document.getElementById("player-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")
const roundWinnerDisplay = document.getElementById("round-winner")
const computerChoices = ["Rock", "Paper", "Scissors"]
let playerChoice = ""
let computerChoice = ""
let humanScore = 0
let computerScore = 0
playerScoreDisplay.innerText = humanScore
computerScoreDisplay.innerText = computerScore

btns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        playRound(btn)
    })
})

function getComputerChoice() {
    computerChoice = computerChoices[Math.floor(Math.random() * 3)]
    computerChoiceDisplay.innerText = computerChoice
}

function playRound(btn){
    playerChoice = btn.id
    playerChoiceDisplay.innerText = playerChoice
    getComputerChoice()
    if(playerChoice === computerChoice){
        roundWinnerDisplay.innerText = "it's a Tie!"
    }
    else if(playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissors" && computerChoice === "Paper"){
        humanScore = humanScore + 1
        roundWinnerDisplay.innerText = "Player Wins Round!"
        playerScoreDisplay.innerText = humanScore
    }
    else{
        computerScore = computerScore + 1
        roundWinnerDisplay.innerText = "Computer Wins Round!"
        computerScoreDisplay.innerText = computerScore
    }
    checkGameOver()   
}


function checkGameOver(){
    if(humanScore === 5){
        alert("Player Won!!!")
        return resetGame()
    }
    else if(computerScore === 5){
        alert("Too Bad... Computer Won...")
        return resetGame()
    }
}
function resetGame() {
    playerChoice = ""
    computerChoice = ""
    humanScore = 0
    computerScore = 0
    playerScoreDisplay.innerText = humanScore
    computerScoreDisplay.innerText = computerScore
    playerChoiceDisplay.innerText = ""
    computerChoiceDisplay.innerText = ""

}