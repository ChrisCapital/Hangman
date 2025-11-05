var POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenstrate", "obsequious", "dissonant", "toady", "iempotent"];


var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;
gameWon = false;

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    updatePage();

}

function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.value.toLowerCase();
    if(word.indexOf(letter)<0){
        console.log("Wrong guess!");
        guess_count--;
    }   
    guesses += letter;
    updatePage();
    input.value = "";
    if (!word){
        document.getElementById("guessess").textContent = "Start a new game first"; 
        return;
    }
    if (typeof gameOver === 'undefined') {
        gameOver = false;
    }
    if (gameover){
        document.getElementById("guesses").textContent = "The game is over. Please start a new game.";
        return;
    }
    if (guessess.includes(letter)){
        document.getElementById("guesses").textContent = "You have already guessed that letter.";
        return;
    }
    let allFound = true;
    for (let i = 0; i < word.length; i++){
        if (!guesses.includes(word[i])){
            allFound = false;
        }
        if (allFound){
            document.getElementById("guesses").textContent = "Congratulations! You've won!";
            gameOver = true;
            return;
        }
        if (guess_count <= 0){
            document.getElementById("guesses").textContent = "Game over! The word was: " + word;
            gameOver = true;
            return;
    }
}


function updatePage(){

    var clueString = "_";
    for (var i = 0; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter)>=0){
            clueString += currentLetter + "";
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