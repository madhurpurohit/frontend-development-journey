const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const firstNumber = document.getElementById("first");
  const firstValue = firstNumber.value; // This will get the value that is entered into input, But it gives into string format.

  const secondNumber = document.getElementById("second");
  const secondValue = secondNumber.value;

  //? What if the value we get is not a number, than we can't calculate this?
  if (isNaN(Number(firstValue)) || isNaN(Number(secondValue))) return;

  const showResult = document.getElementById("show-result");

  const result = Number(firstValue) + Number(secondValue);

  showResult.innerHTML = `Result: ${result}`;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const firstNumber = document.getElementById("first");
    const firstValue = firstNumber.value; // This will get the value that is entered into input, But it gives into string format.

    const secondNumber = document.getElementById("second");
    const secondValue = secondNumber.value;

    const showResult = document.getElementById("show-result");

    const result = Number(firstValue) + Number(secondValue);

    showResult.innerHTML = `Result: ${result}`;
  }
});
