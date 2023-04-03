/*-- Generating Random Number --*/
let randomNumber = Math.floor(Math.random() * 30 + 1);

/*-- Function creation to take input and show result --*/
function showResult(){
    let inputNumber = document.querySelector('#inputNumber').value;
    let attemptNumber = Number(document.querySelector('#attemptNumber').textContent) + 1; /*-- Here the text inside the element has been taken as input. Then converted it to number value by using Number() method. Then 1 added to the current value. So every time when the function "showResult()" will be called, the value of "attemptNumber" will increase. --*/
    let guessNumber = document.querySelector('#guessNumber');
    
    //Assigning the attempt number that user will take
    document.querySelector('#attempt').innerHTML = attemptNumber;

    //Showing output by checking conditions
    if(inputNumber == " "){
        guessNumber.innerHTML = "Opps! No number found 😟";
    } else if(inputNumber < 1 || inputNumber > 30){
        guessNumber.innerHTML = "Sorry!😟 Please select between 1 and 30";
    } else if(inputNumber < randomNumber){
        guessNumber.innerHTML = "You guessed too low! 😄";
    } else if(inputNumber < randomNumber){
        guessNumber.innerHTML = "You guessed too heigh! 😉";
    }
}