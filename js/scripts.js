
window.addEventListener('load', start);

var globalInputRange = null;
var globalInputCurrentNumber = null;
var globalInputNumberInFull = null;

function start() {
  activateInputRange();
  getInputCurrentNumber();
  getInputNumberInFull();
}

function getInputCurrentNumber() {
  globalInputCurrentNumber = document.querySelector('#inputCurrentNumber');
}

function getInputNumberInFull() {
  globalInputNumberInFull = document.querySelector('#inputNumberInFull');
}

function activateInputRange() {
  function handleRangeEvent(event) {
    var currentNumber = event.target.value;
    showCurrentNumber(currentNumber);
    showCurrentNumberInFull(currentNumber);
  }

  globalInputRange = document.querySelector('#inputRange');
  globalInputRange.value = 0;
  globalInputRange.addEventListener('input', handleRangeEvent);
}

function showCurrentNumber(number) {
  globalInputCurrentNumber.value = number;
}

function showCurrentNumberInFull(number) {

  var numberInFull = '';
  if(number.length <= 2) {
    numberInFull = getNumberInFullUntilTwoCharacteres(number);
  }
  else {
    if(number == 100) {
      numberInFull = 'Cem';
    }
    else {
      firstDigit = number.substr(0, 1);
      lastTwoDigits = number.substr(1, 2);
      // console.log(lastTwoDigits);
      numberInFull = getHundredDescription(firstDigit);
      if(lastTwoDigits > 0) {
        numberInFull += ' e ' + getNumberInFullUntilTwoCharacteres(lastTwoDigits);
      }
    }
  }
  globalInputNumberInFull.value = numberInFull;
  // console.log(numberInFull);
}

function getNumberInFullUntilNineteen(index) {
  var arrayNumbers = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Doze', 'Treze', 'Catorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];
  return arrayNumbers[index];
}

function getDozenDescription(firstDigit) {
  var arrayDozens = ['Dez', 'Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
  return arrayDozens[firstDigit - 1];
}

function getHundredDescription(firstDigit) {
  var arrayHundreds = ['Cento', 'Duzentos', 'Trezentos', 'Quatrocentos', 'Quinhentos', 'Seiscentos', 'Setecentos', 'Oitocentos', 'Novecentos'];
  return arrayHundreds[firstDigit - 1];
}

function getNumberInFullUntilTwoCharacteres(number) {
  var numberInFull = '';
  var firstDigit = 0;
  var secondDigit = 0;
  if(number <= 19) {
    numberInFull = getNumberInFullUntilNineteen(parseInt(number));
  }
  else {
    if(number.length === 2) {
      firstDigit = number.substr(0, 1);
      secondDigit = number.substr(1, 1);
      numberInFull = getDozenDescription(firstDigit);
      if(secondDigit > 0) {
        numberInFull += ' e ' + getNumberInFullUntilNineteen(secondDigit);
      }
    }
  }
  return numberInFull;
}