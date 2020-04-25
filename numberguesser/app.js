// Game Values
let min = 1,max  = 10,winning_num = getWinningnum(),guesesLeft = 3;
// UI elements
const UI_game  = document.getElementById('game');
const UI_minNum = document.querySelector('.min-num');
const UI_maxnum = document.querySelector('.max-num');
const UI_guessBtn = document.querySelector('#guess-btn');
const UI_guessInput = document.querySelector('#guess-input');
const UI_message = document.querySelector('.message');

UI_minNum.textContent = min;
UI_maxnum.textContent = max;
console.log(winning_num)
UI_guessBtn.addEventListener('click',function(){
    let guess = parseInt(UI_guessInput.value);
    console.log(guess);
    if(isNaN(guess) || guess < min || guess > max ){
            setMessage(`Please Enter a number between ${min} and ${max}`,'red');
    }
    if(guess === winning_num){
        UI_guessInput.disabled = true;
        UI_guessInput.style.border = '2px solid green';
        setMessage("Well-Done",'green');
        playAgain();
    }else{
        guesesLeft -= 1;
        if(guesesLeft === 0){
            // Game Over
            UI_guessInput.disabled = true;
            UI_guessInput.style.borderColor = 'red';
            setMessage(`Game Over , You Lost.The correct number was ${winning_num}`,'red')
            playAgain();
        }else{
            // Game Continues Answer Over
            setMessage(`Guess isnt correct . Guesses Left -> ${guesesLeft}`,'blue')
            UI_guessInput.value  = "";
        }
    }
})
function setMessage(msg,color) {
    UI_message.textContent = msg;
    UI_message.style.color = color;
}
function playAgain(){
    UI_guessBtn.value = "Play Again";
    UI_guessBtn.className += 'play-again';
    UI_guessBtn.addEventListener('mousedown',function(){
        window.location.reload();
    })
}
function getWinningnum(){
    return parseInt((Math.random()* max  - min + 2));
}