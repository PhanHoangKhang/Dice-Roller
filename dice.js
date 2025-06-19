const numDice = document.querySelector(".dice_number");
const RollDice = document.querySelector(".dice_rolled");
const imageDice = document.querySelector(".dice_image");

function rollDice() {
    let values = [];
    let images = []; 

    for (let i = 0; i < numDice.value; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dices/Dice-${value}.png"></img>`);
    }
    if (numDice.value <=20) {
        RollDice.textContent = `Dice rolled: ${values.join(', ')}`;
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

    RollDice.textContent = ``;
    imageDice.innerHTML = ``;
}