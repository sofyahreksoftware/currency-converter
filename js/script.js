// let formElement1 = document.querySelector(".js__form1");
// let usdElement1 = document.querySelector(".js__selectUsdOption1");
// let eurElement1 = document.querySelector(".js__selectEurOption1");
// let inputElement1 = document.querySelector(".js__moneyAmount1");
// let resultElement1 = document.querySelector(".js__result1");
// let currency = document.querySelector(".js__currencyText");

// formElement1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let amount1 = inputElement1.value;
//   let kurs3 = 4.34;
//   let kurs4 = 4.71;
//   if (usdElement1.selected) {
//     result1 = amount1 / kurs3;
//     currency.innerText = "USD";
//   } else {
//     result1 = amount1 / kurs4;
//     currency.innerText = "EUR";
//   }
//   resultElement1.innerText = result1.toFixed(2);
// });

const switchResultText = (result) => {
  const resultElement = document.querySelector(".js__result");
  resultElement.innerText = result.toFixed(2);
};

const calculateRusult = () => {
  const usdElement = document.querySelector(".js__selectUsdOption");
  let inputElement = document.querySelector(".js__moneyAmount");

  const amount = inputElement.value;
  const kurs1 = 4.32;
  const kurs2 = 4.71;

  if (usdElement.selected) {
    result = amount * kurs1;
  } else {
    result = amount * kurs2;
    return result;
  }
};

const onFormSubmit = (event) => {
  event.preventDefault();
  calculateRusult();
  switchResultText(result);
};

const welcome = () =>
  console.log("Witam wszystkich deweloperów,którzy tutaj zaglądają😜");

const init = () => {
  const formElement = document.querySelector(".js__form");

  formElement.addEventListener("submit", onFormSubmit);
  welcome();
};

init();
