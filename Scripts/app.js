const API_Base = "rpslsgamebe-ashvazctccbhg5c5.westus3-01.azurewebsites.net";

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


const fetchAPIUrl = async (userChoice) => {
    const response = await fetch(`${API_Base}/RPSLS/RPSLSGame/${userChoice}`);
    const data = await response.text();
    console.log(data);
    return data;
}

// const removeIconsandButtons = () => {
//     lizardImg.style.display = "none";
//     lizardButton.style.display = "none";
//     rockImg.style.display = "none";
//     rockButton.style.display = "none";
//     paperImg.style.display = "none";
//     paperButton.style.display = "none";
//     spockImg.style.display = "none";
//     spockButton.style.display = "none";
//     scissorsImg.style.display = "none";
//     scissorsButton.style.display = "none";
// };
paperButton.addEventListener("click", () => {
    // removeIconsandButtons();
    const paper = paperButton.dataset.message;
    fetchAPIUrl(paper);
});
rockButton.addEventListener("click", () => {
    const rock = rockButton.dataset.message;
    fetchAPIUrl(rock);
});
lizardButton.addEventListener("click", () => {
    const lizard = lizardButton.dataset.message;
    fetchAPIUrl(lizard);
});
scissorsButton.addEventListener("click", () => {
    const scissors = scissorsButton.dataset.message;
    fetchAPIUrl(scissors);
});
spockButton.addEventListener("click", () => {
    const spock = spockButton.dataset.message;
    fetchAPIUrl(spock);
});