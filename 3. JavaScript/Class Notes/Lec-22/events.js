//* What is event in JS?
//? In JavaScript, events are actions or occurrences that happen in the browser, which the browser or user interacts with. Events are how JavaScript communicates with the HTML content. For example, when a user clicks a button, types in a form, or hovers over an image, these actions trigger events.

const quotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Your time is limited, so don't waste it living someone else's life.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The best way to predict the future is to create it.",
  "Strive not to be a success, but rather to be of value.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "You miss 100% of the shots you don't take.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is never too late to be what you might have been.",
  "The only person you are destined to become is the person you decide to be.",
  "Life is what happens when you're busy making other plans.",
  "The purpose of our lives is to be happy.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "You must be the change you wish to see in the world.",
  "Life is either a daring adventure or nothing at all.",
  "Happiness is not something ready made. It comes from your own actions.",
  "The way to get started is to quit talking and begin doing.",
];

function quoteGenerate() {
  let quoteSpace = document.getElementById("quote-show");

  let guessIndex = Math.floor(Math.random() * quotes.length);
  quoteSpace.innerHTML = quotes[guessIndex];
}

//? How to add event?
//! Method:- element.addEventListener("event", callback Function);
const btn = document.getElementById("button-1");

//* Mouse Events
//? click event:- When we clicked the element.
btn.addEventListener("click", quoteGenerate);

//? mousemove event:- When we move a little bit inside the element.
const text = document.getElementById("quote-show");
text.addEventListener("mousemove", quoteGenerate);

//? mouseover event:- When pointer goes over element.
const container = document.getElementById("container");
container.addEventListener("mouseover", quoteGenerate);

//* Keyboard event.
//! Method:- document.addEventListener("event", callback function);
// Here document means whole web page of our website. & document is an object.

//? keydown event:- When we press any key.
document.addEventListener("keydown", quoteGenerate);

//? keyup event:- When we released any pressed key.
document.addEventListener("keyup", quoteGenerate);

//* Event Object:- The event object in JavaScript is an automatically created object that gets passed to the event listener's callback function whenever an event is triggered. It contains information about the event, such as the type of event, the target element, and other useful details to help you handle the event effectively.
/* Method:- document.addEventListener("event",(e)=>{
                console.log(event);
            })
*/

//? event.key:- This will print the key which we pressed.
document.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(event.key); // This will give the pressed key.
});

//todo We want that if Enter key is pressed than change the quote, otherwise don't change even if any key is pressed.
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    quoteGenerate();
  }
});

//? event.target:- This will give the target from which the event is triggered.
//? event.type:- It gives Type of event.
btn.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.type);
});

//? event.clientX:- It gives the X coordinates of the mouse pointer relative to the viewport.
//? event.clientY:- It gives the Y coordinates of the mouse pointer relative to the viewport.
btn.addEventListener("click", (event) => {
  console.log(event.clientX);
  console.log(event.clientY);
});
