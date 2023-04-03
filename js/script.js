/*-- Generating Random Number --*/
let randomNumber = Math.floor(Math.random() * 30 + 1);
console.log(randomNumber);

/*-- Function creation to take input and show result --*/
function showResult(){
    let inputNumber = document.querySelector('#inputNumber').value;
    
    let attemptNumber = Number(document.querySelector('#attemptNumber').textContent) + 1; /*-- Here the text inside the element has been taken as input. Then converted it to number value by using Number() method. Then 1 added to the current value. So every time when the function "showResult()" will be called, the value of "attemptNumber" will increase. --*/
    
    let guessNumber = document.querySelector('#guessNumber');
    let trophy = document.querySelector('#trophy');
    let userInput = document.querySelector('#userInput');
    let userAttempt = document.querySelector('#userAttempt');
    let medal = document.querySelector('#medal');
    let position;
    
    //Assigning the attempt number that user will take
    document.querySelector('#attemptNumber').innerHTML = attemptNumber;

    //Assigning the position number that user will gain
    if(attemptNumber < 4){
        position = "1st";
    } else if(attemptNumber >= 3 && attemptNumber <= 6){
        position = "2nd";
    } else{
        position = "3rd";
    }
    document.querySelector('#position').innerHTML = position;

    //Showing output by checking conditions
    if(inputNumber < 1 || inputNumber > 30){
        guessNumber.innerHTML = "Opps! 😟<br/>Please select a number between 1 and 30";
    } else if(inputNumber < randomNumber){
        guessNumber.innerHTML = "You guessed too low! 😎";
    } else if(inputNumber > randomNumber){
        guessNumber.innerHTML = "You guessed too heigh! 😉";
    } else{
        guessNumber.innerHTML = `Congratulations! 🥇<br/>You guessed the right number<br/>It was ${randomNumber}`;
        trophy.style.display = 'block';
        userInput.style.display = 'none';
        userAttempt.style.display = 'block';

        if(attemptNumber < 4){
            medal.innerHTML = "🥇";
        } else if(attemptNumber >= 3 && attemptNumber <= 6){
            medal.innerHTML = "🥈";
        } else{
            medal.innerHTML = "🥉";
        }
    }
}