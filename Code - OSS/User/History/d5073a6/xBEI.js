// function calculateInterest() {
//   const amount = parseFloat(document.getElementById("amount").value);
//   const rate = parseFloat(document.getElementById("rate").value);
//   const term = parseFloat(document.getElementById("term").value);

//   if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
//     alert("Пожалуйста, введите корректные числовые значения");
//     return;
//   }

//   const interest = (amount * rate * (term / 12)) / 100;
//   const total = amount + interest;

//   document.getElementById("result").style.display = "block";
//   document.getElementById("totalAmount").textContent = total.toLocaleString(
//     "ru-RU",
//     { style: "currency", currency: "RUB" }
//   );
//   document.getElementById("profit").textContent = interest.toLocaleString(
//     "ru-RU",
//     { style: "currency", currency: "RUB" }
//   );
// }


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
    }
    else {
        const sum = (amount.value * (rate.value / 100) /365) * term.value;
        const total = amount.value + sum;
        const interest = sum;
        document.getElementById("result").style.display = "block";
        document.getElementById("totalAmount").textContent = total
        document.getElementById("profit").textContent = interest
        );
//     }
// })
