const headerText = document.getElementById("headerText");
const playerScoresDiv = document.getElementById("playerScoresDiv");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const lizardButton = document.getElementById("lizardButton");
const spockButton = document.getElementById("spockButton");
const PvPButton = document.getElementById("PvPButton");
const PvPBof5Button = document.getElementById("PvPBof5Button");
const PvPBof7Button = document.getElementById("PvPBof7Button");
const promptUserToPlayAgainTextBox = document.getElementById("promptUserToPlayAgainTextBox");

let player1Score = 0;
let player2Score = 0;
let player1Choice = "";
let player2Choice = "";
let roundsNeededToWin = 1;
let isPlayer1Turn = true; 

PvPButton.addEventListener("click", (event) => {
    promptUserToPlayAgainTextBox.textContent = "";
    event.preventDefault();
    startNewGame(1);
});

PvPBof5Button.addEventListener("click", (event) => {
    promptUserToPlayAgainTextBox.textContent = "";
    event.preventDefault();
    startNewGame(3);
});

PvPBof7Button.addEventListener("click", (event) => {
    promptUserToPlayAgainTextBox.textContent = "";
    event.preventDefault();
    startNewGame(4);
});

function startNewGame(winCondition) {
    player1Score = 0;
    player2Score = 0;
    roundsNeededToWin = winCondition;
    UpdateScore();
    ResetVariables();
}

function RecordPlayersChoice(move) {
    if (isPlayer1Turn === true) {
        player1Choice = move;
        isPlayer1Turn = false;
        headerText.style.fontSize = "52px";
        headerText.textContent = "Player 2, what's your move?";
    } else {
        player2Choice = move;
        ComparePlayerChoices();
    }
}

function ComparePlayerChoices() {
    if (player1Choice === player2Choice) {
        headerText.style.fontSize = "40px";
        headerText.textContent = `Draw! Both players picked ${player1Choice}`;
    }
    else if ((player1Choice === "rock" && (player2Choice === "scissors" || player2Choice === "lizard")) ||
        (player1Choice === "paper" && (player2Choice === "rock" || player2Choice === "spock")) ||
        (player1Choice === "scissors" && (player2Choice === "paper" || player2Choice === "lizard")) ||
        (player1Choice === "lizard" && (player2Choice === "spock" || player2Choice === "paper")) ||
        (player1Choice === "spock" && (player2Choice === "scissors" || player2Choice === "rock"))) 
    {
        player1Score++;
        headerText.style.fontSize = "32px";
        headerText.textContent = `Player 1 wins round! Player 1's ${player1Choice} beats ${player2Choice}`;
    } 
    else {
        player2Score++;
        headerText.style.fontSize = "32px";
        headerText.textContent = `Player 2 wins round! Player 2's ${player2Choice} beats  ${player1Choice}`;
    }

    UpdateScore();
    DisplayWinner();
}

function DisplayWinner() {
    if (player1Score === roundsNeededToWin) {
        headerText.style.fontSize = "40px";
        headerText.textContent = "Congratulations Player 1 You Won!!!";
        promptUserToPlayAgainTextBox.textContent = "Click one of the game buttons to play again!";
    } else if (player2Score === roundsNeededToWin) {
        headerText.style.fontSize = "40px";
        headerText.textContent = "Congratulations Player 2 You Won!!!";
        promptUserToPlayAgainTextBox.textContent = "Click one of the game buttons to play again!";
    } else {
        setTimeout(ResetVariables, 1000);
    }
}

function ResetVariables() {
    player1Choice = "";
    player2Choice = "";
    isPlayer1Turn = true;
    headerText.style.fontSize = "52px";
    headerText.textContent = "Player 1, what's your move?";
}

function UpdateScore() {
    playerScoresDiv.innerHTML = `
        <p class="scoreTextStyled">Player 1 Score: ${player1Score}</p>
        <p class="scoreTextStyled">Player 2 Score: ${player2Score}</p>
    `;
}

rockButton.addEventListener("click", () => RecordPlayersChoice("rock"));
paperButton.addEventListener("click", () => RecordPlayersChoice("paper"));
scissorsButton.addEventListener("click", () => RecordPlayersChoice("scissors"));
lizardButton.addEventListener("click", () => RecordPlayersChoice("lizard"));
spockButton.addEventListener("click", () => RecordPlayersChoice("spock"));