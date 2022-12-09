    //For starting the game
    var myNewGameButton = document.getElementById("newGameButton");
    myNewGameButton.addEventListener("click", newGame);
    
    //Connecting key buttons HTML <--> JavaScript
    var myForButtons = document.getElementById("forButtons")

    var wordBox = document.getElementById("wordBox")
    var keyboardBox = document.getElementById("keyboardBox")

    // Testing variables
    var testing = "testing";
    var testLetterComparison = "LetterComparison started";
    var testCheckLetter = "CheckLetter started";
    var intt = 0;

    //Variables
    var guessCorrect = "That was correct!";
    var guessWrong = "That was wrong...";
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
    
    // TESTING PURPOSES-----------------------------------------------
    document.write(guessWord);


    // Replaces all letters of the word to guess with an underline
    //var hiddenWord = guessWord.replace(/./g, "_");
    var hiddenWord = guessWord.replace(/./g, '<span class="underlines">_</span>');

    //This line is needed for being able to replace underlines with letters.
    var underlines = document.getElementsByClassName("underlines");

    // Seperate individual letters from guessWord into array elements
    var guessWordArray = guessWord.split("");

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
        alert(guessCorrect);
    }

   function createButtons(keys) {
        for (var i = 0; i < keys.length; i++) {
            // The "button" after createElement is what tells the program to create a button element in HTML
            var keyButton = document.createElement("button");
            keyButton.classList.add("buttonList");

            //Enters the key character into the button
            keyButton.innerText = keys[i];
            
            //Sends each key to the keyboardBox div in HTML
            keyboardBox.appendChild(keyButton);

            // What will happen when the user presses a key button?
            // TEST ---------------------------------------------------------------------- DO NOT DELETE
            //keyButton.addEventListener("click", newGame);
            //------------------------------------------------------------------------------------------

            // Starting point for checking if clicked button matches any letter in guessWordArray
            keyButton.addEventListener("click", checkLetter);
            function checkLetter() {                

    
                // Checks if pressed letter key matches any character in the guessWord.
                if (guessWordArray.includes(keyButton.innerText)) {
                    guessWordArray.forEach(letterComparison)

                        // Iterates through every letter in the current guessWord
                        function letterComparison(currentLetter, index) {

                            //TEST---
                            //document.write(index);
                            document.write(currentLetter);

                            document.write(underlines);

                            if (currentLetter === keyButton.innerText) {
                                underlines[index].innerText = currentLetter;
                            }


                        }


                    //alert(guessCorrect);
                    
                    //alert(keyButton.innerText);

                    //if (guessWordArray.includes("a")) {
                    //guessWordArray.forEach((char, index))
                    
                } else {
                    wrongGuesses++;
                    alert("Wrong guesses: " + wrongGuesses);
                }
            }
        }
   }
   
   createButtons(keys);
  
   // Test see if _any_ array element matches _any_ elements in another array
    //var arraytest = guessWordArray.some(letterX => keys.includes(letterX) );
    //document.write(arraytest);
    
   //guessWordArray


    //Variable testing
    //var length = guessingWords.length
    //document.write(length);
    //document.write(buttons[0])
    //document.write(buttons)