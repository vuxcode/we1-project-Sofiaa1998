    //For starting the game
    var myNewGameButton = document.getElementById("newGameButton");
    myNewGameButton.addEventListener("click", newGame);
    
    //Connecting key buttons HTML <--> JavaScript
    var myForButtons = document.getElementById("forButtons")

    var wordBox = document.getElementById("wordBox")
    var keyboardBox = document.getElementById("keyboardBox")

    //Variables
    var guessInfo = "That was correct/wrong";
    var newGameInfo = "New game started!";
    var helloWorld = "Helloooooo World!!";
    var guessWord = '';
    var wrongGuesses = 0;
    var wrongGuessesMax = 6;
    var guessedLetters = []
    
    var guessingWords = [ "kitchen", "library", "couch", "pineapple", "balcony", "rooftop", "computer", "germany", "airplane", "coconut", "millionaire", "spotlight", "diamond", "volcano", "elephant", "giraffe", "crocodile", "hummingbird", "chimpanzee", "christmas", "halloween", "wizard" ]

    // Picks a random word from the guessingWords array.
    // The Math.random function result is multiplied by the length of the array.
    // The result of this multiplication is rounded down with the Math.floor function to get a valid index number to use. 
    var random_index = Math.floor(Math.random() * guessingWords.length);
    var guessWord = guessingWords[random_index]
    //alert(chosenWord);


    // Replaces all letters of the word to guess with an underline
    var hiddenWord = guessWord.replace(/./g, "_");
    //document.write(hiddenWord);

    // Send underline-converted guessWord to the wordBox div in HTML 
    wordBox.innerHTML = hiddenWord;

    // Creates an array of letters from a string.
    // Split seperates each letter individually and join removes commas.
    var keys = 'abcdefghijklmnopqrstuvwxyz'.split('').join('')

    function newGame(){
        wrongGuesses = 0;
        wrongGuessesMax = 6;
        guessedLetters = [];
        alert(newGameInfo)
    }

    function checkGuess(){
        alert(guessInfo);
    }

   function createButtons(keys) {
        for (var i = 0; i < keys.length; i++) {
            var keyButtonElement = document.createElement("button");

            //Enters the key character into the button
            keyButtonElement.innerHTML = keys[i];

            //Sends each key to the keyboardBox div in HTML
            keyboardBox.appendChild(keyButtonElement);

            // What will happen when the user presses a key button?
            //button.addEventListener("click", () => {
            //    alert(helloWorld);
            //}            
        }
   }
   createButtons(keys);
   

    //Variable testing
    //var length = guessingWords.length
    //document.write(length);
    //document.write(buttons[0])
    //document.write(buttons)