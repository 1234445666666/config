const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const term = document.getElementById("term");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const totalAmount = document.getElementById("totalAmount");
const profit = document.getElementById("profit");

btn.addEventListener("click", () => {
  if (amount.value === "" || rate.value === "" || term.value === "") {
    alert("Пожалуйста, заполните все поля");
    return;
  } else {
    const sum = ((amount.value * (rate.value / 100)) / 365) * term.value;
    let amountFixed = parseFloat(amount.value);
    const total = amountFixed + sum;
    const interest = sum;
    document.getElementById("result").style.display = "block";
    document.getElementById("totalAmount").textContent = total.toLocaleString(
      "ru-RU",
      { style: "currency", currency: "RUB" }
    );
    document.getElementById("profit").textContent = interest.toLocaleString(
      "ru-RU",
      { style: "currency", currency: "RUB" }
    );
  }
});
