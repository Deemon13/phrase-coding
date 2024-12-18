import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `
<div class='container'>
<h1 class='title'>Кодирование строки</h1>
<textarea class='text-block' rows='5' id='text' ></textarea>
<div class='error-block' id='error'></div>
<div><button class='button button-code' type='button' id='code' disabled>Кодировать</button></div>
<div class='result-wrapper'>Результат: <span class='result-field' id='result' ></span></div>
<div><button class='button button-bufer' type='button' id='bufer' disabled>Скопировать в буфер обмена</button></div>
</div>`;

const textArea = document.getElementById("text");
const errorElement = document.getElementById("error");
const resultElement = document.getElementById("result");
const codeButton = document.getElementById("code");
const buferButton = document.getElementById("bufer");

let reg = /^[a-zA-Z]+$/;

let result = "";

const stringCoding = (str) => {
  let uniqueSymbol = str[0];
  let iterator = 0;
  let resString = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === uniqueSymbol) {
      iterator = iterator + 1;
    } else {
      iterator === 1
        ? (resString = resString + uniqueSymbol)
        : (resString = resString + String(iterator) + uniqueSymbol);

      uniqueSymbol = str[i];
      iterator = 1;
    }
  }

  return resString;
};

const handleInput = () => {
  if (!textArea.value) {
    codeButton.setAttribute("disabled", true);
    buferButton.setAttribute("disabled", true);
    resultElement.innerHTML = "";
    errorElement.innerHTML = "";
    navigator.clipboard.writeText("");
  } else if (!textArea.value.match(reg)) {
    errorElement.innerHTML = "must be in english";
    codeButton.setAttribute("disabled", true);
    buferButton.setAttribute("disabled", true);
    resultElement.innerHTML = "";
  } else {
    textArea.value = textArea.value.toUpperCase();
    codeButton.removeAttribute("disabled");
  }
};

const handleCode = () => {
  const stringForCoding = textArea.value;
  resultElement.innerHTML = "";
  result = stringCoding(stringForCoding);
  resultElement.insertAdjacentHTML("afterbegin", result);
  buferButton.removeAttribute("disabled");
};

const handleCopyToBufer = () => {
  navigator.clipboard.writeText(result);
};

textArea.addEventListener("input", handleInput);
codeButton.addEventListener("click", handleCode);
buferButton.addEventListener("click", handleCopyToBufer);
