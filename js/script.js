let course = {
    name : "Sohail",
    chips : 200
}

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";

console.log(cards);
let playerEl = document.getElementById("player-el");
playerEl.textContent = course.name + " : $ " + course.chips;

let startEl = document.querySelector("#start-el").addEventListener('click', startGame);
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let newCardEl = document.getElementById("newCard-el").addEventListener('click', newCard);

function getRendomCard() {

    let rendomNumber = Math.floor(Math.random() * 13) + 1;
    if (rendomNumber > 10) {
        return 10;
    } else if (rendomNumber === 1) {
        return 11;
    } else {
        return rendomNumber;
    }

}

function startGame() {
    isAlive = true;
    let firstCard = getRendomCard();
    let secondCard = getRendomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();


    console.log(renderGame());
}


function renderGame() {
    sumEl.textContent = "Sum : " + sum;

    cardEl.textContent = "Card : "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    };
    messageEl.textContent = message;
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let card = getRendomCard();
        sum += card;
        cards.push(card);

        renderGame();
    }

}