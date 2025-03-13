const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const exactWeight = Number(weight);
  const exactHeight = Number(height) / 100;

  const result = exactWeight / (exactHeight * exactHeight);

  const exactResult = result.toFixed(2);

  const showResult = document.querySelector(".result");

  if (exactResult < 18.5) {
    showResult.innerHTML = `Result: Underweight(${exactResult})`;
  } else if (exactResult >= 18.5 && exactResult <= 24.9) {
    showResult.innerHTML = `Result: Normal weight(${exactResult})`;
  } else if (exactResult >= 25 && exactResult <= 29.9) {
    showResult.innerHTML = `Result: Overweight(${exactResult})`;
  } else if (exactResult >= 30) {
    showResult.innerHTML = `Result: Obesity(${exactResult})`;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const exactWeight = Number(weight);
    const exactHeight = Number(height) / 100;

    const result = exactWeight / (exactHeight * exactHeight);

    const exactResult = result.toFixed(2);

    const showResult = document.querySelector(".result");

    if (exactResult < 18.5) {
      showResult.innerHTML = `Result: Underweight(${exactResult})`;
    } else if (exactResult >= 18.5 && exactResult <= 24.9) {
      showResult.innerHTML = `Result: Normal weight(${exactResult})`;
    } else if (exactResult >= 25 && exactResult <= 29.9) {
      showResult.innerHTML = `Result: Overweight(${exactResult})`;
    } else if (exactResult >= 30) {
      showResult.innerHTML = `Result: Obesity(${exactResult})`;
    }
  }
});
