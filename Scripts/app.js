const API_Base = "https://rpslsgamebe-ashvazctccbhg5c5.westus3-01.azurewebsites.net/";

const backToGamePageButton = document.getElementById("backToGamePageButton");
const gameRulesPageButton = document.getElementById("gameRulesPageButton");
const paperButton = document.getElementById("paperButton");
const rockButton = document.getElementById("rockButton");
const lizardButton = document.getElementById("lizardButton");
const scissorsButton = document.getElementById("scissorsButton");
const spockButton = document.getElementById("spockButton");
const lizardImg = document.getElementById("lizardImg");
const spockImg = document.getElementById("spockImg");
const paperImg = document.getElementById("paperImg");
const rockImg = document.getElementById("rockImg");
const scissorsImg = document.getElementById("scissorsImg");
const headerText = document.getElementById("headerText");
const subHeaderText = document.getElementById("subHeaderText");

const fetchAPIUrl = async (userChoice) => {
    const response = await fetch(`${API_Base}/RPSLS/RPSLSGame/${userChoice}`);
    const data = await response.text();
    console.log(data);
    return data;
};

paperButton.addEventListener("click", async () => {
    const paper = paperButton.dataset.message;
    const matchResult = await fetchAPIUrl(paper);
    headerText.style.fontSize = "46px";
    headerText.textContent = matchResult;
    subHeaderText.textContent = "";
    subHeaderText.textContent = "Make another choice to play again!"
});

rockButton.addEventListener("click", async () => {
    const rock = rockButton.dataset.message;
    const matchResult = await fetchAPIUrl(rock);
    headerText.style.fontSize = "46px";
    headerText.textContent = matchResult;
    subHeaderText.textContent = "";
    subHeaderText.textContent = "Make another choice to play again!"
});

lizardButton.addEventListener("click", async () => {
    const lizard = lizardButton.dataset.message;
    const matchResult = await fetchAPIUrl(lizard);
    headerText.style.fontSize = "46px";
    headerText.textContent = matchResult;
    subHeaderText.textContent = "";
    subHeaderText.textContent = "Make another choice to play again!"
});

scissorsButton.addEventListener("click", async () => {
    const scissors = scissorsButton.dataset.message;
    const matchResult = await fetchAPIUrl(scissors);
    headerText.style.fontSize = "46px";
    headerText.textContent = matchResult;
    subHeaderText.textContent = "";
    subHeaderText.textContent = "Make another choice to play again!"
});

spockButton.addEventListener("click", async () => {
    const spock = spockButton.dataset.message;
    const matchResult = await fetchAPIUrl(spock);
    headerText.style.fontSize = "46px";
    headerText.textContent = matchResult;
    subHeaderText.textContent = "";
    subHeaderText.textContent = "Make another choice to play again!"
});