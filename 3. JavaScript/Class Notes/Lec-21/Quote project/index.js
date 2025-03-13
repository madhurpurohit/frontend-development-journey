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

setInterval(quoteGenerate, 5000);

function changeBackground() {
  const bodyBackground = document.getElementById("root");

  const redColor1 = Math.floor(Math.random() * 256);
  const redColor2 = Math.floor(Math.random() * 256);

  const greenColor1 = Math.floor(Math.random() * 256);
  const greenColor2 = Math.floor(Math.random() * 256);

  const blueColor1 = Math.floor(Math.random() * 256);
  const blueColor2 = Math.floor(Math.random() * 256);

  bodyBackground.style.backgroundImage = `linear-gradient(to top right, rgb(${redColor1}, ${greenColor1}, ${blueColor1}), rgb(${redColor2}, ${greenColor2}, ${blueColor2}))`;
}

setInterval(changeBackground, 5000);
