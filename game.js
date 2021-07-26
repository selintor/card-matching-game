const cards = document.querySelectorAll('.box');

let move = 20;
const moveSpan = document.querySelector('.moveSpan');
moveSpan.innerHTML = move;
let score = 0;
const scoreSpan = document.querySelector(".scoreSpan");
scoreSpan.innerHTML = score;

const scoreDiv = document.querySelector(".score");
const shipDiv = document.querySelector(".ship");
const finaleScoreSpan = document.querySelector(".endGameSpan");
const moveClass = document.querySelector(".move");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    
    move = move - 1;
    moveSpan.innerHTML = move;
   
    if (move == 0){

        document.querySelector(".game-board").style.pointerEvents = "none";
        document.querySelector(".gameOver").style.pointerEvents = "auto";
        document.getElementById("moveTest").style.color = "red";
        document.getElementById("endGame").style.display= "block";
        finaleScoreSpan.innerHTML = score;
        scoreDiv.style.display = 'none';
        shipDiv.style.display = 'block';
        moveClass.innerHTML = "GAME OVER"
    }
    if (score == 120) {
        moveClass.innerHTML = "🥳🎉🎊 WELL DONE! 🎉🎊🥳"
        document.getElementById("endGame").style.display= "block";
        finaleScoreSpan.innerHTML = score;
    }  

  if (this === firstCard) return;

    this.classList.add('flip');

  if (!hasFlippedCard) {

    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;

}
function shuffle(array) {
    cards.forEach(card => {
            var currentIndex = array.length,  randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    card.style.order = randomIndex;
                    currentIndex--;
                    [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
                return array;
        })
    };
        var arr1 = [1, 2, 3, 4, 5, 6];
        shuffle(arr1);
        
        var arr2 = [7, 8, 9, 10, 11, 12]; 
        shuffle(arr2);

        var arr3 = [13, 14, 15, 16, 17, 18];
        shuffle(arr3);

        var arr4= [19, 20, 21, 22, 23, 24];
        shuffle(arr4);

        var arr5 = [25, 26, 27, 28, 29, 30];
        shuffle(arr5);

        var arr6 = [31, 32, 33, 34, 35, 36];
        shuffle(arr6);

        let ships = [...arr1.slice(0, 2), ...arr2.slice(0, 2), ...arr3.slice(0, 2), ...arr4.slice(0, 2), 
            ...arr5.slice(0, 2),...arr6.slice(0, 2)];

            console.log(ships);

        [...document.querySelectorAll('.box')].forEach(i => {
            i.addEventListener('click',(element) => {
                let clickedId = parseInt(element.target.getAttribute('id'));
                if ( ships.includes(clickedId) ){
                    //element.target.innerHTML = `<img src="shipgame.svg" />`;
                    var img = document.createElement("img");
                    img.src = "ship.svg";
                    element.target.appendChild(img);
                score = score + 10;
                    scoreSpan.innerHTML = score;
                    scoreDiv.style.display = 'block';
                    shipDiv.style.display = 'none';   
                }
            });
        });
cards.forEach(card => card.addEventListener('click', flipCard, {once:true}));