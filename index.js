// pick a random word or phrase
// have letters on the game screen
// finish when player guesses the word or when all the flowers are gone
// gray out letters that the user has guessed
// quit game
// need loops to do the same thing multiple times

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





// random mystery words
let words = ["Pancakes", "Butterflies", "Gallivanting", "Moisturized", "Nostalgia", "Winterized", "Birthday", "Artistic", "Colorful", "Homepage", "Technology", "Zestfulness", "Overzealous", "Cynical", "Javascript", "Baconeggandcheese", "The", "And"];

let mysteryWord = ""
let amountOfChances = 7
let chancesTaken = 0


// function to pick a random word from the words array
let getMysteryWord = function () {
    return words[Math.floor(Math.random() * words.length)];
}
mysteryWord = getMysteryWord()
console.log(mysteryWord)




//for loop that which makes as many underscores as there are letters in the words
let underscores = [];
for (let i = 0; i < mysteryWord.length; i++) {
    underscores[i] = "_";
}
console.log(underscores)

let remainingLetters = mysteryWord.length

let aThroughM = document.querySelector(".atom")
aThroughM.addEventListener("click", handleClick)

let nThroughz = document.querySelector(".ntoz")
nThroughz.addEventListener("click", handleClick)




//function to remove flowers only if the letter is incorrect
function handleClick(e) {

    //if letter if not found remove a flower
if(amountOfChances<1){
    confirm("Oh no! You Lose!")
}else{


    if (mysteryWord.toUpperCase().includes(e.target.innerHTML) == true) {
        //Update the Array to change letter from underscore

    } else {
        let flowers = document.querySelectorAll('.littleflower')
        amountOfChances-=1
        flowers[flowers.length - 1].remove()
       
        console.log(flowers)
        console.log(flowers.length)
        console.log(amountOfChances)
    }
}


}


// function handleClick(e){
// //     console.log(e.target)

//     //if letter if not found remove a flower

//     let flowers= document.querySelectorAll('.littleflower')
//     flowers[flowers.length -1].remove()

// }

let underscoreDisplay = document.querySelector('.mysteryword')
// underscoreDisplay.getMysteryWord()
// underscoreDisplay
// underscoreDisplay.innerHTML= "underscores"

// underscores.createElement


//underscores match the amount of letters in mystery word
for (let i = 0; i < mysteryWord.length; i++) {
    let span = document.createElement("span")
    span.innerHTML = '_'
    span.classList.add('underscore');
    underscoreDisplay.append(span)
}


//change color of letters after click

let theAlphabet = document.querySelectorAll("span")

for (let i = 0; i < theAlphabet.length; i++) {

    theAlphabet[i].addEventListener("click", function() {
    
    selectedLetter(theAlphabet[i].innerText)
    
    theAlphabet[i].style.background="#d3d3d3"
    
    });
    
    }
    

    //function to replace underscores with letters
   function selectedLetter(letter){
// decrement the amount of chances
// amountOfChances = amountOfChances - 1 // decrements amount of choices
//  console.log(amountOfChances)
const lowerCaseLetter = letter.toLowerCase()

const lowerCaseMysteryWord = mysteryWord.toLowerCase()


// "pancakes"
// letter exists in the mystery word
// "p"

//put code in for loop
let letterExistsOnMysteryWord = lowerCaseMysteryWord.includes(lowerCaseLetter)

if(letterExistsOnMysteryWord) {
// <span class="underscore"></span>
let underscoresToReplace = document.querySelectorAll(".underscore")
// "pancakes"
// "p"
// 
let letterIndexInTheMysteryWord = lowerCaseMysteryWord.indexOf(lowerCaseLetter) // 0
// let underScoresToReplace =  [<span>_</span>,<span>_</span>,<span>_</span>]
// underscoresToReplace[5]
underscoresToReplace[letterIndexInTheMysteryWord].innerText = lowerCaseLetter.toUpperCase()
// If player successfully select all the words
if((letterIndexInTheMysteryWord +1) == underscoresToReplace.length){

confirm("Congratulations! You win!")

}else if (amountOfChances < 1){
 console.log(amountOfChances)
confirm("Oh no! You Lose!")

}

}

}



        
        

