    var guessingWords = [
        "kitchen",
        "library",
        "couch",
        "pineapple",
        "balcony",
        "rooftop",
        "computer",
        "germany",
        "airplane",
        "coconut",
        "millionaire",
        "spotlight",
        "diamond",
        "volcano",
        "elephant",
        "giraffe",
        "crocodile",
        "hummingbird",
        "chimpanzee",
        "christmas",
        "halloween",
        "wizard"
    ]

    //Variables
    var guessInfo = "That was correct/wrong";
    var newGameInfo = "New game started!";
    var guess = '';
    var wrongGuesses = 0;
    var wrongGuessesMax = 6;
    var guessedLetters = []

    //
    var myTestKey = document.getElementById("testKey");
    myTestKey.addEventListener("click", checkGuess);

    //For starting the game
    var myNewGameButton = document.getElementById("newGameButton");
    myNewGameButton.addEventListener("click", newGame);

    //Connecting key buttons HTML <--> JavaScript
    var myForButtons = document.getElementById("forButtons")


    //TEST
    //const letterContainer = document.getElementById("letter-container");

    // Picks a random word from the guessing_words array.
    // The Math.random function result is multiplied by the length of the array.
    // The result of this multiplication is rounded down with the Math.floor function to get a valid index number to use. 
    var random_index = Math.floor(Math.random() * guessingWords.length);
    document.write(guessingWords[random_index])

    // Creates a array of letters from a string.
    // Split seperates each letter individually and join removes commas.
    var keys = 'abcdefghijklmnopqrstuvwxyz'.split('').join('')

    function newGame(){
        wrong_guesses = 0;
        wrong_guesses_max = 6;
        guessed_letters = [];
        alert(newGameInfo)
    }

    function checkGuess(){
        alert(guessInfo);
    }

   function createButtons(keys) {
        for (var i = 0; i < keys.length; i++) {
            var keyButtonElement = document.createElement("Button");
            
            //Enters the key character into the button
            keyButtonElement.innerHTML = keys[i];

            document.body.appendChild(keyButtonElement);
        }
   }
   createButtons(keys);

    //Variable testing
    //var length = guessingWords.length
    //document.write(length);
    //document.write(buttons[0])
    //document.write(buttons)