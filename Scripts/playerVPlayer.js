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
        headerText.style.fontSize = "72px";
        headerText.textContent = "Player 2, what's your move?";
    } else {
        player2Choice = move;
        ComparePlayerChoices();
    }
}

function ComparePlayerChoices() {
    if (player1Choice === player2Choice) {
        headerText.textContent = `Draw! Both players picked ${player1Choice}`;
    }
    else if ((player1Choice === "rock" && (player2Choice === "scissors" || player2Choice === "lizard")) ||
        (player1Choice === "paper" && (player2Choice === "rock" || player2Choice === "spock")) ||
        (player1Choice === "scissors" && (player2Choice === "paper" || player2Choice === "lizard")) ||
        (player1Choice === "lizard" && (player2Choice === "spock" || player2Choice === "paper")) ||
        (player1Choice === "spock" && (player2Choice === "scissors" || player2Choice === "rock"))) 
    {
        player1Score++;
        headerText.textContent = `Player 1 wins round! Player 1's ${player1Choice} beats ${player2Choice}`;
    } 
    else {
        player2Score++;
        headerText.textContent = `Player 2 wins round! Player 2's ${player2Choice} beats  ${player1Choice}`;
    }

    UpdateScore();
    DisplayWinner();
}

function DisplayWinner() {
    if (player1Score === roundsNeededToWin) {
        headerText.textContent = "Congratulations Player 1 You Won!!!";
        promptUserToPlayAgainTextBox.textContent = "Click one of the game buttons to play again!";
    } else if (player2Score === roundsNeededToWin) {
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
    headerText.style.fontSize = "72px";
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



// Old Code
//
// const backToGamePageButton = document.getElementById("backToGamePageButton");
// const gameRulesPageButton = document.getElementById("gameRulesPageButton");
// const paperButton = document.getElementById("paperButton");
// const rockButton = document.getElementById("rockButton");
// const lizardButton = document.getElementById("lizardButton");
// const scissorsButton = document.getElementById("scissorsButton");
// const spockButton = document.getElementById("spockButton");
// const lizardImg = document.getElementById("lizardImg");
// const spockImg = document.getElementById("spockImg");
// const paperImg = document.getElementById("paperImg");
// const rockImg = document.getElementById("rockImg");
// const scissorsImg = document.getElementById("scissorsImg");
// const headerText = document.getElementById("headerText");
// const PvPButton = document.getElementById("PvPButton");
// const PvPBof5Button = document.getElementById("PvPBof5Button");
// const PvPBof7Button = document.getElementById("PvPBof7Button");
// const playerScoresDiv = document.getElementById("playerScoresDiv");

// let hasPlayer1Chose = false;
// let hasPlayer2Chose = false;

// let player1Choice = "";
// let player2Choice = "";

// let player1Score = 0;
// let player2Score = 0;

// let bestOf5winCondition = 3;
// let bestOf7WinCondition = 4;

// PvPButton.addEventListener("click", () => {
//     console.log("firing")
//     headerText.style.fontSize = "40px";
//     headerText.textContent = "Player 1, what's your move?";
//     if(headerText.textContent === "Player 1, what's your move?" && bestOf5winCondition <= 3){
//         player1Choosing();
//         headerText.style.fontSize = "40px";
//         headerText.textContent = "Player 2, what's your move?";
//         if(hasPlayer1Chose === true){
//             player2Choosing();
//         }
//     }
//     if(hasPlayer1Chose === true && hasPlayer2Chose === true){
//         PlayerVsPlayer(player1Choice, player2Choice);
//     }
// });

// PvPBof5Button.addEventListener("click", () => {

// });

// PvPBof7Button.addEventListener("click", () => {
//     headerText.style.fontSize = "46px";
//     headerText.textContent = "Player 1, what's your move?"
// });

// const player1Choosing = (hasPlayer1Chose) => {
//     if (hasPlayer1Chose === false) {
//         spockButton.addEventListener("click", () => {
//             player1Choice = spockButton.dataset.message;
//             hasPlayer1Chose = true;
//             return player1Choice;
//         });

//         rockButton.addEventListener("click", () => {
//             player1Choice = rockButton.dataset.message;
//             hasPlayer1Chose = true;
//             return player1Choice;
//         });
//         scissorsButton.addEventListener("click", () => {
//             player1Choice = scissorsButton.dataset.message;
//             hasPlayer1Chose = true;
//             return player1Choice;
//         });

//         lizardButton.addEventListener("click", () => {
//             player1Choice = lizardButton.dataset.message;
//             hasPlayer1Chose = true;
//             return player1Choice;
//         });
//         paperButton.addEventListener("click", () => {
//             player1Choice = paperButton.dataset.message;
//             hasPlayer1Chose = true;
//             return player1Choice;
//         });
//     };
// };

// const player2Choosing = (hasPlayer2Chose) => {
//     if (player2Choice === false) {
//         spockButton.addEventListener("click", () => {
//             player2Choice = spockButton.dataset.message;
//             hasPlayer2Chose = true;
//             return player2Choice;
//         });

//         rockButton.addEventListener("click", () => {
//             player2Choice = rockButton.dataset.message;
//             hasPlayer2Chose = true;
//             return player2Choice;
//         });
//         scissorsButton.addEventListener("click", () => {
//             player2Choice = scissorsButton.dataset.message;
//             hasPlayer2Chose = true;
//             return player2Choice;
//         });

//         lizardButton.addEventListener("click", () => {
//             player2Choice = lizardButton.dataset.message;
//             hasPlayer2Chose = true;
//             return player2Choice;
//         });
//         paperButton.addEventListener("click", () => {
//             player2Choice = paperButton.dataset.message;
//             hasPlayer2Chose = true;
//             return player2Choice;
//         });
//     };
// };

// const PlayerVsPlayer = (player1, player2) => {
//     if (player1 == player2) {
//         console.log(`It's a Draw! Both players picked ${player1}`)
//         return `It's a Draw! Both players picked ${player1}`;
//     }

//     if ((player1 == "rock" && (player2 == "scissors" || player2 == "lizard")) ||
//         (player1 == "paper" && (player2 == "rock" || player2 == "spock")) ||
//         (player1 == "scissors" && (player2 == "paper" || player2 == "lizard")) ||
//         (player1 == "lizard" && (player2 == "spock" || player2 == "paper")) ||
//         (player1 == "spock" && (player2 == "scissors" || player2 == "rock"))) {
//         return `Player 1 Wins! Player 1 chose ${player1} and Player 2 chose ${player2}`;
//     }
//     else {
//         return `Player 2 Wins! Player 1 chose ${player1} and Player 2 chose ${player2}`;
//     }
// }

// const PvPBestOf5Game = () => {
//     if (player1Score <= 3 || player2Score <= 3) {
//         if (player1 == player2) {
//             return `It's a Draw! Both players picked ${player1}. No points awarded.`;
//         }

//         if ((player1 == "rock" && (player2 == "scissors" || player2 == "lizard")) ||
//             (player1 == "paper" && (player2 == "rock" || player2 == "spock")) ||
//             (player1 == "scissors" && (player2 == "paper" || player2 == "lizard")) ||
//             (player1 == "lizard" && (player2 == "spock" || player2 == "paper")) ||
//             (player1 == "spock" && (player2 == "scissors" || player2 == "rock"))) {
//             player1Score++;
//             return `Player 1 wins this round! Player 1 chose ${player1} and Player 2 chose ${player2}. Current score Player 1: ${player1Score} player 2: ${player2Score}`;
//         }
//         else {
//             player2Score++;
//             return `Player 2 wins this round! Player 1 chose ${player1} and Player 2 chose ${player2}. Current score Player 1: ${player1Score} player 2: ${player2Score}`;
//         }
//     }
//     return "Broken, if you see this";
// };

// const PvPBestOf7Game = () => {
//     if (player1Score <= 4 || player2Score <= 4) {
//         if (player1 == player2) {
//             return `It's a Draw! Both players picked ${player1}. No points awarded.`;
//         }

//         if ((player1 == "rock" && (player2 == "scissors" || player2 == "lizard")) ||
//             (player1 == "paper" && (player2 == "rock" || player2 == "spock")) ||
//             (player1 == "scissors" && (player2 == "paper" || player2 == "lizard")) ||
//             (player1 == "lizard" && (player2 == "spock" || player2 == "paper")) ||
//             (player1 == "spock" && (player2 == "scissors" || player2 == "rock"))) {
//             player1Score++;
//             return `Player 1 wins this round! Player 1 chose ${player1} and Player 2 chose ${player2}`;
//         }
//         else {
//             player2Score++;
//             return `Player 2 wins this round! Player 1 chose ${player1} and Player 2 chose ${player2}`;
//         }
//     }
//     return "Broken, if you see this";
// };

// const resetPlayerScores = () => {
//     player1Score = 0;
//     player2Score = 0;
// };