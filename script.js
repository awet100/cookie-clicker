const clickButton = document.querySelector('.button');
let counterLabel = document.querySelector('.counter');
let scoreCard = 0;
let multiplier = 1;
let multiplePrice = 10;
const multiplierBtn = document.querySelector("#multiplier");
const upgradePrice = document.querySelector(".upgradePrice");

let pointsPerClick = 0;
multiplierBtn.onclick = () => {
    if (scoreCard >= multiplePrice) {
        pointsPerClick = 1;
        pointsPerClick *= multiplier;
        multiplier += 2;
        multiplierBtn.innerHTML = `X${multiplier -1}`;
        scoreCard -= multiplePrice;
        multiplePrice += Math.floor(0.2*multiplePrice);
        upgradePrice.innerHTML = multiplePrice;
    } else {
        alert("The score is not enough!")
    }
}

clickButton.onclick = () => {
    scoreCard++;
    scoreCard += pointsPerClick;
    counterLabel.innerHTML = `${scoreCard}`;
}

/*

points per click = 1

button multiplier (starts at 2)

click button = > points per click 2

 */