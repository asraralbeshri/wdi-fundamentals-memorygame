const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
const cardsInPlay = [];

const reset = document.getElementsByName('reset')[0];
reset.addEventListener('click', resetGame);

const submit = document.getElementsByName('send')[0];
submit.addEventListener('click', submitSent);

const score = document.getElementsByClassName('score')[0];
let scores = 0;

const result = document.getElementsByClassName('result')[0];


function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        const cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        // score.textContent=scores;
        result.textContent = "You found a match!";
    }
    else {
        // alert("Sorry, try again.");
        scores -= 50;
        score.textContent = scores;
        result.textContent = "Sorry, try again.";
    }
}
function flipCard() {
    if (cardsInPlay.length == 2) {
        alert("You cannot choose more than two cards.!");
        return;
    }
    let cardId = this.getAttribute('data-id');

    console.log("User flipped " + cards[cardId].rank);

    console.log(cards[cardId].cardImage);

    this.setAttribute('src', cards[cardId].cardImage);
    scores += 50;
    score.textContent = scores;

    console.log(cards[cardId].suit);

    cardsInPlay.push(cards[cardId].rank);

    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

function resetGame() {
    score.textContent = 0;
    result.textContent = " ";
    if (cardsInPlay.length === 0) {
        alert("Game is already reset.!");
    }
    else {
        while (cardsInPlay.length != 0) {
            for (let i = 0; i < cards.length; i++) {
                document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
            }
            cardsInPlay.pop();
        }
    }
}

function submitSent() {
    alert("Thank you for your response..");
}

createBoard();


