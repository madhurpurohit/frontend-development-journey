const correctAnswer = {
  q1: "Brian Lara",
  q2: "Muttiah Muralitharan",
  q3: "AB de Villiers",
  q4: "Chris Gayle",
  q5: "Mohammad Ashraful",
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const getData = new FormData(form);
  const answer = Array.from(getData.entries());

  let result = 0;

  for (let [key, value] of answer) {
    if (value === correctAnswer[key]) result++;
  }

  const score = document.getElementById("result");
  score.innerHTML = `${result} out of 5 is correct.`;
});
