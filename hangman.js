var POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenstrate", "obsequious", "dissonant", "toady", "idempotent"];

var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;
var gameOver = false;

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    gameOver = false;
    updatePage();

}

function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.value.toLowerCase();
    
    if (!word) {
        document.getElementById("guesses").textContent = "Start a new game first.";
        input.value = "";
        return;
    }
    if (gameOver) { 
        document.getElementById("guesses").textContent = "Game over. Press New Game."; 
        input.value = "";
        return; 
    }
    if (guesses.includes(letter)) { 
        document.getElementById("guesses").textContent = "You already guessed '" + letter + "'."; 
        input.value = "";
        return; 
    }
    if(word.indexOf(letter)<0){
        console.log("Wrong guess!");
        guess_count--;
    }   
    
    console.log(`Current guesscount: ${guess_count}`);
    guesses += letter;
    updatePage();
    input.value = "";
    
    
    if (guess_count <= 0) { 
        document.getElementById("guesses").textContent = "You lost! Word was '" + word + "'.";
        gameOver = true;
        return;
    }

    let allFound = true;
    for (let i = 0; i < word.length; i++) {
        if (!guesses.includes(word[i])) {
            allFound = false;
            break;
        }
    }

    if (allFound) { 
        document.getElementById("guesses").textContent = "You win!"; 
        gameOver = true;
        return;
    }
}


function updatePage(){

    var clueString = "";
    for (var i = 0; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter)>=0){
            clueString += currentLetter + " ";
        }
        else{
            clueString += "_ ";
        }
        
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters:" + guesses;

    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";
}