const switchResultText1 = (result1) => {
  const resultElement1 = document.querySelector(".js__result1");
  resultElement1.innerText = result1.toFixed(2);
};

const switchResultText = (result) => {
  const resultElement = document.querySelector(".js__result");
  resultElement.innerText = result.toFixed(2);
};

const calculateRusult1 = () => {
  const usdElement1 = document.querySelector(".js__selectUsdOption1");
  const inputElement1 = document.querySelector(".js__moneyAmount1");
  const currency = document.querySelector(".js__currencyText");
  const amount1 = inputElement1.value;
  const kurs1 = 4.32;
  const kurs2 = 4.71;

  if (usdElement1.selected) {
    result1 = amount1 / kurs1;
    currency.innerText = "USD";
  } else {
    result1 = amount1 / kurs2;
    currency.innerText = "EUR";
    return result1;
  }
};

const calculateRusult = () => {
  const usdElement = document.querySelector(".js__selectUsdOption");
  const inputElement = document.querySelector(".js__moneyAmount");
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

const onFormSubmit1 = (event) => {
  event.preventDefault();
  calculateRusult1();
  switchResultText1(result1);
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
  const formElement1 = document.querySelector(".js__form1");

  formElement.addEventListener("submit", onFormSubmit);
  formElement1.addEventListener("submit", onFormSubmit1);
  welcome();
};

init();
