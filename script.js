    //For starting the game
    var myNewGameButton = document.getElementById("newGameButton");
    myNewGameButton.addEventListener("click", newGame);
    
    //Connecting key buttons HTML <--> JavaScript
    var myForButtons = document.getElementById("forButtons")

    var wordBox = document.getElementById("wordBox")
    var keyboardBox = document.getElementById("keyboardBox")

    //This line is needed for being able to replace underlines with letters
    var underlines = document.getElementsByClassName("underlines");

    var letterBtn = document.getElementById("letterBtn");

    var guessesLeftBox = document.getElementById("guessesLeftBox");
    var winOrLoseBox = document.getElementById("winOrLoseBox");
    var guessedLettersBox = document.getElementById("guessedLettersBox");

    //Variables
    var newGameInfo = "New game started!";
    var gameOver = "Game over!";
    var gameWon = "Congrats! You win!";
    var guessWord = '';(guessWord)
    var guessesLeft = 7;
    var guessedLetters = [];
    var testing = "testing";
    
    var guessingWords = [ "zebra", "kitchen", "library", "couch", "pineapple", "balcony", "rooftop", "computer", "germany", "airplane", "coconut", "millionaire", "spotlight", "diamond", "volcano", "elephant", "giraffe", "crocodile", "hummingbird", "chimpanzee", "christmas", "halloween", "wizard" ]

    // Picks a random word from the guessingWords array.
    // The Math.random function result is multiplied by the length of the array.
    // The result of this multiplication is rounded down with the Math.floor function to get a valid index number to use. 
    var random_index = Math.floor(Math.random() * guessingWords.length);
    var guessWord = guessingWords[random_index]

    // Test to see the word
    //document.write(guessWord);

    // Replaces all letters of the word to guess with an underline
    var currentMatches = guessWord.replace(/./g, "_");
    var currentMatchesArray = currentMatches.split("");//.join("");

    // Seperate individual letters from guessWord into array elements
    var guessWordArray = guessWord.split("");

    // Publish underline-converted guessWord to the wordBox div in HTML 
    wordBox.innerHTML = currentMatchesArray.join("");

    // Shows guesses left
    guessesLeftBox.innerHTML = "Lives left: " + guessesLeft;
    guessedLettersBox.innerHTML = "Guessed letters: ";

    

    ////////////////////////////////////////////////////////////////////////////////////////
    // Starting point for checking if entered letter matches any letter in guessWordArray //
    ////////////////////////////////////////////////////////////////////////////////////////

    letterBtn.addEventListener('click', function(){

        // Saves user input into userGuess variable
        var userGuess = document.getElementById("letter").value;

        // Allow users to guess with uppercase letters by changing it to lowercase
        userGuess = userGuess.toLowerCase();

        // Only continue with the game if the user has entered any letter before clicking Submit. 
        if ( userGuess ) {
            

            // If the guessed letter is anywhere within the word to guess, start the replace process.
            if (guessWordArray.includes(userGuess)) {
                for (var i = 0; i < guessWordArray.length; i++) {
                    if (guessWordArray[i] === userGuess) {          
                        // Replace current index (i), with one (1) element, which will be the user's guessed letter (userGuess)
                        currentMatchesArray.splice( i, 1, userGuess)
                    }
                }

                // Show guessing progress
                wordBox.innerHTML = currentMatchesArray.join("");

                // When the shown letters on screen does not contain any underlines, show that the user has won the game.
                if ( !currentMatchesArray.includes('_') ) {
                    winOrLoseBox.innerHTML = gameWon;
                }
            }
             else {

                if (guessedLetters.includes(userGuess)) {

                    // If guessed letter already has been guessed. 
                    // Do the same as below but without guessedLetters.push(userGuess); and guessesLeft--;
                    guessIfAlreadyGuessed();

                } else {
                    guessedLetters.push(userGuess);
                    guessedLettersBox.innerHTML = "Guessed letters: " + guessedLetters;

                    // Subtract guessesLeft if you have any guess left, so it doesn't become negative numbers.
                    if ( guessesLeft > 0 ) {
                        guessesLeft--;
                        // Update value on screen
                        guessesLeftBox.innerHTML = "Lives left: " + guessesLeft;
                    }

                    if ( guessesLeft <= 0 ) {
                        alert(gameOver + " The word was " + guessWord + ".");
                        newGame();
                    }
                }
            }   

            // Clears the box from guessed letter after user has made the guess
            clearBox();
        }
    });

    function guessIfAlreadyGuessed() {

        guessedLettersBox.innerHTML = "Guessed letters: " + guessedLetters;

        // Subtract guessesLeft if you have any guess left, so it doesn't become negative numbers.
        if ( guessesLeft > 0 ) {
            //guessesLeft--;
            // Update value on screen
            guessesLeftBox.innerHTML = "Lives left: " + guessesLeft;
        }

        if ( guessesLeft <= 0 ) {
            alert(gameOver + " The word was " + guessWord + ".");
            newGame();
        }
    }

    function newGame() {
        // Run the same commands as before. New guesses, remove "Game over" text, generate new word and update with the new hidden word.
        guessesLeft = 7;
        guessesLeftBox.innerHTML = "Lives left: " + guessesLeft;
        winOrLoseBox.innerHTML = "";
        random_index = Math.floor(Math.random() * guessingWords.length);
        guessWord = guessingWords[random_index]
        currentMatches = guessWord.replace(/./g, "_");
        currentMatchesArray = currentMatches.split("");//.join("");
        guessWordArray = guessWord.split(""); 
        wordBox.innerHTML = currentMatchesArray.join("");
        guessedLettersBox.innerHTML = guessedLetters = [];
        guessedLettersBox.innerHTML = "Guessed letters: "
        clearBox();
    }

    // Just before the user should make a new guess, clear the input box by checking: if box does not equals "", set it to "".
    function clearBox() {
        userGuess = document.getElementById("letter")
        if (userGuess.value != "") {
            userGuess.value = "";
        }
    }