    //For starting the game
    var myNewGameButton = document.getElementById("newGameButton");
    myNewGameButton.addEventListener("click", newGame);
    
    //Connecting key buttons HTML <--> JavaScript
    var myForButtons = document.getElementById("forButtons")

    var wordBox = document.getElementById("wordBox")
    var keyboardBox = document.getElementById("keyboardBox")

    //This line is needed for being able to replace underlines with letters.
    var underlines = document.getElementsByClassName("underlines");

    var letterBtn = document.getElementById("letterBtn");


    // Testing variables
    var testing = "testing";

    //Variables
    var newGameInfo = "New game started!";
    var guessWord = '';
    var wrongGuesses = 0;
    var wrongGuessesMax = 6;
    var guessedLetters = []
    
    var guessingWords = [ "zebra", "kitchen", "library", "couch", "pineapple", "balcony", "rooftop", "computer", "germany", "airplane", "coconut", "millionaire", "spotlight", "diamond", "volcano", "elephant", "giraffe", "crocodile", "hummingbird", "chimpanzee", "christmas", "halloween", "wizard" ]

    // Picks a random word from the guessingWords array.
    // The Math.random function result is multiplied by the length of the array.
    // The result of this multiplication is rounded down with the Math.floor function to get a valid index number to use. 
    var random_index = Math.floor(Math.random() * guessingWords.length);
    var guessWord = guessingWords[random_index]
    
    // Testing purposes-----------------------------------------------
    document.write(guessWord);

    // Replaces all letters of the word to guess with an underline
    var currentMatches = guessWord.replace(/./g, "_");
    var currentMatchesArray = currentMatches.split("");//.join("");

    // Seperate individual letters from guessWord into array elements
    var guessWordArray = guessWord.split("");

    // Publish underline-converted guessWord to the wordBox div in HTML 
    wordBox.innerHTML = currentMatchesArray.join("");

    function newGame(){
        wrongGuesses = 0;
        wrongGuessesMax = 6;
        guessedLetters = [];
        alert(newGameInfo)
    }

    function checkGuess(){
        alert(guessCorrect);
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    // Starting point for checking if entered letter matches any letter in guessWordArray //
    ////////////////////////////////////////////////////////////////////////////////////////

    letterBtn.addEventListener('click', function(){

        // Saves user input into myGuess variable
        var userGuess = document.getElementById("letter").value;

        if (guessWordArray.includes(userGuess)) {

                for (var i = 0; i < guessWordArray.length; i++) {
                    if (guessWordArray[i] === userGuess) {          
                        // Replace current index (i), with one (1) element, which will be the user's guessed letter (userGuess)
                        currentMatchesArray.splice( i, 1, userGuess)
                    }                 
                }

            // Publish current guessing progress
            wordBox.innerHTML = currentMatchesArray.join("");
            
        } else {
            wrongGuesses++;
            alert("Wrong guesses: " + wrongGuesses);
        }
    });