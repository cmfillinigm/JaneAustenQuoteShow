/* Data to Show*/
const data = [
  {
   quote: `“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.
   -Northanger Abbey`, 
   emoji: '♛', 
   image: `url(assets/cristina-gottardi-Bj7Pt0ZMBOk-unsplash.jpg)`
  }, 
  {
   quote: `“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.” 
   -Pride & Prejudice”`, 
   emoji: '♜', 
   image: `url(assets/michelle-tresemer-mmcOPDacI7Q-unsplash.jpg)`
  },  
  {
   quote: `“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.” 
   -Pride & Predjudice`, 
   emoji: '♝' , 
   image: `url(assets/ann-fossa-zuh7_uuUy9c-unsplash.jpg)`
  },
  {
   quote: `“Silly things do cease to be silly if they are done by sensible people in an impudent way.” 
   -Emma`, 
   emoji: '♟' , 
   image: `url(assets/silvestri-matteo-6-C0VRsagUw-unsplash.jpg)`
  },
  {
    quote: `“I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.”
    -Persuasion`, 
    emoji: '♞', 
    image: `url(assets/kadarius-seegars-fknwX4LpSy4-unsplash.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// // Check-Check: change text
// quote.innerHTML = "Colin is quotable.";
// // Check-Check: change emoji text
// emoji.innerHTML = "👍️";

// Check-Check: background image
bgImage.style.backgroundImage= 'url(assets/henry-be-IicyiaPYGGI-unsplash.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', function(){
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
   if ( event.keyCode === 32 ) {
  
   randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  }
});