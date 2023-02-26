let formElement = document.querySelector(".js__form");
let usdElement = document.querySelector(".js__selectUsdOption");
let eurElement = document.querySelector(".js__selectEurOption");
let inputElement = document.querySelector(".js__moneyAmount");
let resultElement = document.querySelector(".js__result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let amount = inputElement.value;
  let kurs1 = 4.32;
  let kurs2 = 4.71;
  if (usdElement.selected) {
    result = amount * kurs1;
  } else {
    result = amount * kurs2;
  }

  resultElement.innerText = result.toFixed(2);
});

let formElement1 = document.querySelector(".js__form1");
let usdElement1 = document.querySelector(".js__selectUsdOption1");
let eurElement1 = document.querySelector(".js__selectEurOption1");
let inputElement1 = document.querySelector(".js__moneyAmount1");
let resultElement1 = document.querySelector(".js__result1");
let currency = document.querySelector(".js__currencyText");
console.log(currency)

formElement1.addEventListener("submit", (e) => {
  e.preventDefault();
  let amount1 = inputElement1.value;
  let kurs3 = 4.34;
  let kurs4 = 4.71;
  if (usdElement1.selected) {
    result1 = amount1 / kurs3;
    currency.innerText = "USD";
  } else {
    result1 = amount1 / kurs4;
    currency.innerText = "EUR";
  }
  resultElement1.innerText = result1.toFixed(2);
});