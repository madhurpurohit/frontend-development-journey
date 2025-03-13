const body = document.querySelector("body");

body.addEventListener("click", (event) => {
  const element = document.createElement("div");

  //? How to add class in element?
  // element.setAttribute("class", "circle");
  // element.className = "circle";
  element.classList.add("circle");

  //? How to show circle on pointer location?
  const xPosition = event.clientX;
  const yPosition = event.clientY;

  // Here we subtract 25 because our circle size is 50 so when we click it will make circle on pointer's location.
  element.style.left = `${xPosition - 25}px`;
  element.style.top = `${yPosition - 25}px`;

  //? How to add color in circle?
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  element.style.backgroundColor = `rgb(${red},${green},${blue})`;

  const text = [
    "Hii",
    "Hello",
    "Kaise Ho",
    "Wahh",
    "Wow",
    "Awesome",
    "Wallah",
    "Kya Hua",
  ];

  const randomText = Math.floor(Math.random() * 8);
  element.innerHTML = text[randomText];

  //? Another method to get access of body & document also?
  document.body.prepend(element);

  //? How to remove this element after 5 seconds, so that our HTML file is not meshed with this element?
  setTimeout(() => {
    element.remove();
  }, 5010);
});
