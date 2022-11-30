





    //Information
    var guessInfo = "That was correct/wrong";
    var newGameInfo = "New game started!"

    var guess = '';
    var wrong_guesses = 0;
    var wrong_guesses_max = 6;
    var guessed_letters = []

    var guessing_words = [
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

    // Picks a random word from the guessing_words array.
    // The Math.random function result is multiplied by the length of the array.
    // The result of this multiplication is rounded down with the Math.floor function to get a valid index number to use. 
    var random_index = Math.floor(Math.random() * guessing_words.length);
    document.write(guessing_words[random_index] )

    // Creates a array of letters from a string.
    // Split seperates each letter individually and join removes commas.
    var buttons = 'abcdefghijklmnopqrstuvwxyz'.split('').join('')

    function newGame(){
        wrong_guesses = 0;
        wrong_guesses_max = 6;
        guessed_letters = []
        alert(newGameInfo);
    }

    function checkLetterGuess(){
        alert(guessInfo);
    }


    //document.write(buttons[0])
    //document.write(buttons)

