//random mystery word displays
//player to pick letters
//if the letter is correct, it fills in in the mystery word section
//if the letters are incorrect, lose a flower
//player gets 8 turns/8 flowers
//if the player wins, a congrats message
//player loses, a you lost message
//letters gray out whenever a player chooses the letter
//if a word has multiple of the same letter, it fills in 


// This is the mystery word
let mysteryWord="Pans"
// The amount of chances the player has
let amountOfChances= 8
// The chances taken by the player
let chanceTaken = 0
// Container for the spans
let underscoreDisplay = document.querySelector('.mysteryword')

function createSpans() {
    for (let i = 0; i < mysteryWord.length; i++) {
        let span = document.createElement("span")
        span.innerHTML = '_'
        span.classList.add('underscore');
        underscoreDisplay.append(span)
    }
}
// This will create spans equal to the length of the mystery word.

createSpans()

/// need to get all the span elements. make the letters clickable
const letters = document.querySelectorAll('.letter')

letters.forEach((span)=>{
   span.addEventListener('click',function(e){
    // getting the value from the divs
    // checking whether the first letter matches what the user clicked on
    // Pancakes
    
    // uancakes
    if(mysteryWord.includes(e.target.innerText)){
      // it its the right letter don't lose flowers
      // Replace an underscore with the letter
      // _   _ _
      
    }
   })
})

// mystery word = "Pancakes"
// if the letter the user clicked on is equal to our first letter => P


