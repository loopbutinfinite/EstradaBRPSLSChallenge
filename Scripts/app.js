const API_Base = "http://localhost:5225";

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

const fetchAPIUrl = async () => {
    const response = await fetch("http://localhost:5225/RPSLS/SayHello");
    const data = await response.json();
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
});
rockButton.addEventListener("click", () => {
    fetchAPIUrl();
    console.log("Firing");
});
lizardButton.addEventListener("click", () => {
    
});
scissorsButton.addEventListener("click", () => {
    
});
spockButton.addEventListener("click", () => {
    
});