const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const option = document.getElementById("regime");

  const income = document.getElementById("income");

  let amount = Number(income.value);

  let tax = 0;
  let surcharge = 0;

  const output = document.getElementById("result");
  output.style.display = "block";

  if (amount <= 0) {
    output.innerHTML = `Please enter a valid income.`;
    return;
  }

  if (option.value === "Old-tax-regime") {
    amount -= 250000;
    if (Number(income.value) > 500000) {
      if (amount > 0) {
        tax += Math.min(amount, 250000) * 0.05;
        amount -= 250000;
      }
      if (amount > 0) {
        tax += Math.min(amount, 500000) * 0.2;
        amount -= 500000;
      }
      if (amount > 0) {
        tax += amount * 0.3;
      }
    }
  } else {
    amount -= 300000;
    if (Number(income.value) > 700000) {
      if (amount > 0) {
        tax += Math.min(amount, 300000) * 0.05;
        amount -= 300000;
      }
      if (amount > 0) {
        tax += Math.min(amount, 300000) * 0.1;
        amount -= 300000;
      }
      if (amount > 0) {
        tax += Math.min(amount, 300000) * 0.15;
        amount -= 300000;
      }
      if (amount > 0) {
        tax += Math.min(amount, 300000) * 0.2;
        amount -= 300000;
      }
      if (amount > 0) {
        tax += amount * 0.3;
      }
    }
  }

  if (Number(income.value) > 5000000) {
    surcharge = tax * 0.37;
  }

  tax += surcharge;
  tax += tax * 0.04;

  output.innerHTML = `Total payable tax amount is: ${tax.toFixed(2)}`;
});
