var POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenstrate", "obsequious", "dissonant", "toady", "iempotent"];


var word = "";


function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    var clueString = "_";
    for (var i = 1; i < word.length; i++){
        clueString += " _";
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

}