// array of words
// have user pick a word
//change background
//have categories
//have icons instead of the hanged man
//8 to 10 incorrect





// pick a random word or phrase
// have letters on the game screen
// finish when player guesses the word or when the whole hang man has been made
// gray out letters that the user has guessed
// quit game
// need loops to do the same thing multiple times

// start with a prompt for the player?

// pseudo code:
// pick a random word
// if player guesses wrong remaining Letters, add another body part to the hanged man
// else add the letter to the mystery word
// continue to get guesses from player until hanged man is completed.
// if player clicks "quit game" exit and go back to home screen
// allow player to pick a new word if they want
// if the player guesses the correct word congratulate them and show the word
// if player loses tell them game over and show them what the correct word was 
// loop should: take input from player, update game state, display the current state of the game to the play
// option to play music?


// a phrases option
// let phrases = ["Once in a blue moon", "A piece of Cake", "Don't judge a book by its cover", "Bite The bullet", "It's brick outside", "You be aight"]



// random mystery words
let words =["Pancakes", "Butterflies", "Gallivanting", "Moisturized", "Nostalgia", "Winterized", "Birthday", "Artistic", "Colorful", "Homepage", "Technology", "Zestfulness", "Overzealous","Cynical", "Javascript", "Baconeggandcheese", "The"];

//code to pick a word at random from the words array
words = words[Math.floor(Math.random() * words.length)];


//for loop that which makes as many underscores as there are letters in the words
// let answerArray = [];
// for(let i=0; i<words.length; i++){
//     answerArray[i] = "_";
// }

// let remainingLetters = words.length;

// console.log(words)

// while (remainingLetters > 0){
//     alert(answerArray.join(" "));
// }

// let playersGuess = prompt(`pick a letter or quit game?`)


