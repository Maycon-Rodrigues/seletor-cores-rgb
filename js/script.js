window.addEventListener('load', start);

var inputRed = null;
var inputGreen = null;
var inputBlue = null;

function start() {
  render();
}

function render() {
  var rangeRed = document.querySelector('#rangeRed');
  var rangeGreen = document.querySelector('#rangeGreen');
  var rangeBlue = document.querySelector('#rangeBlue');
  var div = document.querySelector('.result');

  function changeValue() {
    inputRed.value = rangeRed.value;
    inputGreen.value = rangeGreen.value;
    inputBlue.value = rangeBlue.value;

    div.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
  }

  inputRed = document.querySelector('#inputRed');
  inputRed.value = 0;
  rangeRed.addEventListener('input', changeValue);

  inputGreen = document.querySelector('#inputGreen');
  inputGreen.value = 0;
  rangeGreen.addEventListener('input', changeValue);

  inputBlue = document.querySelector('#inputBlue');
  inputBlue.value = 0;
  rangeBlue.addEventListener('input', changeValue);
}
