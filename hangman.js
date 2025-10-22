var POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenstrate", "obsequious", "dissonant", "toady", "iempotent"];


var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();

}

function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.value;
    if(word.indexOf(letter)<0){
        console.log("Wrong guess!");
        guess_count--;
    }   
    guesses += letter;
    updatePage();
    input.value = "";
}


function updatePage(){

    var clueString = "_";
    for (var i = 1; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter)>=0){
            clueString += currentLetter + "";
        }
        else{
            clueString += " _";
        }
        
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters:" + guesses;

    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";
}