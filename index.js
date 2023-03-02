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





// random mystery words
let words =["Pancakes", "Butterflies", "Gallivanting", "Moisturized", "Nostalgia", "Winterized", "Birthday", "Artistic", "Colorful", "Homepage", "Technology", "Zestfulness", "Overzealous","Cynical", "Javascript", "Baconeggandcheese", "The", "And"];

let mysteryWord = ""
let amountOfChances = 8
let chancesTaken= 0


// function to pick a random word from the words array
let getMysteryWord = function(){
    return  words[Math.floor(Math.random() * words.length)];
}
mysteryWord=getMysteryWord()
console.log(mysteryWord)




//for loop that which makes as many underscores as there are letters in the words
let underscores = [];
for(let i=0; i<mysteryWord.length; i++){
    underscores[i] = "_";
}
console.log(underscores)

let remainingLetters= mysteryWord.length

let aThroughM = document.querySelector(".atom")
aThroughM.addEventListener("click", handleClick)

let nThroughz = document.querySelector(".ntoz")
nThroughz.addEventListener("click", handleClick)




//function to remove flowers only if the letter is incorrect
function handleClick(e){

    //if letter if not found remove a flower
   
    if (mysteryWord.toUpperCase().includes(e.target.innerHTML) == true){
        //Update the Array to change letter from underscore
       
    } else {
        let flowers = document.querySelectorAll('.littleflower')
        flowers[flowers.length -1].remove()
    }
   
       

}


// function handleClick(e){
// //     console.log(e.target)

//     //if letter if not found remove a flower
    
//     let flowers= document.querySelectorAll('.littleflower')
//     flowers[flowers.length -1].remove()

// }

let underscoreDisplay= document.querySelector('.mysteryword')
// underscoreDisplay.getMysteryWord()
// underscoreDisplay
// underscoreDisplay.innerHTML= "underscores"

// underscores.createElement


//underscores match the amount of letters in mystery word
for (let i = 0; i<mysteryWord.length;i++){
    let span = document.createElement("span")
    span.innerHTML='_'
    underscoreDisplay.append(span)
}