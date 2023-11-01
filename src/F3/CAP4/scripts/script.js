function add() {
  let firstValue = document.querySelector("#first-value").value;
  let secondValue = document.querySelector("#second-value").value;
  let result = document.querySelector("#result");

  if (firstValue == "" || secondValue == "") {
    result.innerHTML = "Dados em branco, favor digitar algo!";
  } else {
    let addition = +firstValue + +secondValue;
    result.innerHTML = addition;
  }
}

function subtract() {
  let firstValue = document.querySelector("#first-value").value;
  let secondValue = document.querySelector("#second-value").value;
  let result = document.querySelector("#result");

  if (firstValue == "" || secondValue == "") {
    result.innerHTML = "Dados em branco, favor digitar algo!";
  } else {
    let subtraction = +firstValue - +secondValue;
    result.innerHTML = subtraction;
  }
}

function divide() {
  let firstValue = document.querySelector("#first-value").value;
  let secondValue = document.querySelector("#second-value").value;
  let result = document.querySelector("#result");

  if (firstValue == "" || secondValue == "") {
    result.innerHTML = "Dados em branco, favor digitar algo!";
  } else if (secondValue == 0) {
    result.innerHTML = "Não há divisão por zero";
  } else {
    let division = +firstValue / +secondValue;
    result.innerHTML = division;
  }
}

function multiply() {
  let firstValue = document.querySelector("#first-value").value;
  let secondValue = document.querySelector("#second-value").value;
  let result = document.querySelector("#result");

  if (firstValue == "" || secondValue == "") {
    result.innerHTML = "Dados em branco, favor digitar algo!";
  } else {
    let multiplication = +firstValue * +secondValue;
    result.innerHTML = multiplication;
  }
}
