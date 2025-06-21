const numDice = document.querySelector(".dice_number");
const RollDice = document.querySelector(".dice_rolled");
const imageDice = document.querySelector(".dice_image");
const sumDice = document.querySelector(".sum_dice");  

function rollDice() {
    let values = [];
    let images = []; 

    for (let i = 0; i < numDice.value; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dices/Dice-${value}.png"></img>`);
    }
    
    let sum = 0;
    for (let value of values) {
        sum+=value;
    }
    if (numDice.value <=20) {
        RollDice.textContent = `Dice rolled: ${values.join(', ')}`;
        sumDice.textContent= `Total Score: ${sum}`;
        imageDice.innerHTML = images.join('');
    }
    else {
        RollDice.textContent = `You can only roll a maximum of 20 dice at a time!`;
        imageDice.innerHTML = ``;
    }
}

function reset() {
    let values = [];
    let images = [];
    let sum = 0;

    RollDice.textContent = ``;
    sumDice.textContent= ``;
    imageDice.innerHTML = ``;
}
