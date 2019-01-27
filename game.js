//Declare initial variabes
var letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let wins = 0
let losses = 0
let guessLeft = 9
let guessed = []



//Grabbing p Tags
let winsTab = document.getElementById('wins');
let lossesTab = document.getElementById('losses');
let guessesTab = document.getElementById('guessLeft');
let guessedTab = document.getElementById('guessed');

//Display functions
winsTab.innerText = 'Wins: ' + wins;
lossesTab.innerText = 'Losses: ' + losses;
guessesTab.innerText = 'Guesses Left: ' + guessLeft;
guessedTab.innerText = 'You Guessed: ' + guessed;

//Letter randomizer
var randomizer = letters[Math.floor(Math.random() * letters.length)];

    console.log(randomizer);

//Key stroke function
document.onkeypress = function(event) {
    const userGuess = event.key;

//Reset function
function reset() {
    guessLeft = 9;
    guessesTab.innerText = 'Guesses Left: ' + guessLeft;
    guessed = [];
    guessedTab.innerText = 'You Guessed: ' + guessed;
    randomizer = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomizer);
}

//if else statements    
    
if(userGuess === randomizer){
    wins++;
    winsTab.innerText = 'Wins: ' + wins;
    alert("Congratulations! You've Guessed Correctly!")
    reset();
    }

else if (guessLeft <= 1){
    losses++;
    lossesTab.innerText = 'Losses: ' + losses;
    alert("Better Luck Next Time!")
    reset();
    }    

else  {
    guessLeft--;
    guessesTab.innerText = 'Guesses Left: ' + guessLeft;
    guessed.push(userGuess);
    guessedTab.innerText = 'You Guessed: ' + guessed;
    }

}