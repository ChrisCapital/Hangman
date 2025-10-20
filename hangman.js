var POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenstrate", "obsequious", "dissonant", "toady", "iempotent"];


var word = "";
var guesses = "";

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();

}

function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.value;    
    guesses += letter;
    updatePage();
}




function updatePage(){
    var clueString = "_";
    for (var i = 1; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter)>=0){
            clueString += currentLetter + "";
        }else{
            clueString += " _";
        }
        
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guesses:" + guesses;
}