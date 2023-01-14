let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");

let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! Tum To Bade Heavy Driver Ho.";
let tryAgainMessage = "Beta Tumse Na Ho Payega. Try Again!";

function restartButton(){
    let firstRandomNumber = Math.random() * 1000;
    let secondRandomNumber = Math.random() * 1000;

    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);

    gameResultElement.textContent = "";
    userInputElement.value = "";
}
restartButton()
function checkButton(){
    let firstIntValue = parseInt(firstNumberElement.textContent);
    let secondIntValue = parseInt(secondNumberElement.textContent);
    let userInputSum = parseInt(userInputElement.value);
    let sumOfBothValue = firstIntValue + secondIntValue;

    if (userInputSum === sumOfBothValue){
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "Green";
    }
    else{
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "Blue";
    }
}