var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};


var elForm = $_('.js-form');
var elInput = $_('.js-input');
var elMessageOutput = $_('.message-output');
var elAlert = $_('.js-alert');

elInput.focus();

function getMessage(e) {
  e.preventDefault();


    if(elInput.value === '') {
      elAlert.classList.remove('d-none');
      setTimeout(() => {
        elAlert.classList.add('d-none');
      }, 1500);
    }

  elMessageOutput.textContent = elInput.value.trim();
  elInput.value = '';
}


elForm.addEventListener('submit', getMessage);