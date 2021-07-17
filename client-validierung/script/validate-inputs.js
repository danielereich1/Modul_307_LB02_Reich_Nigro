const form = document.getElementById('form');
const email = document.getElementById('email');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phonenumber = document.getElementById('phonenumber');
const acceptcontact = document.getElementById('acceptcontact')
const password = document.getElementById('password');
;

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} muss ausgefüllt werden`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'keine richtige Email');
  }
}


function checkPhonenumber(input) {
  const re = /^([0|\+[0-9]{1,5})?([0-9][0-9]{9})$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'keine richtige Telefonnummer');
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
        input,
        `${getFieldName(input)} Muss mindestens ${min} Zeichen beinhalten`
    );
  } else if (input.value.length > max) {
    showError(
        input,
        `${getFieldName(input)} Muss weniger als ${max} Zeichen haben`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
  if(!checkRequired([fname, lname, email, password, phonenumber])){
    checkLength(fname, 2, 20);
    checkLength(lname, 3, 20);
    checkLength(password, 7, 25);
    checkPhonenumber(phonenumber);
    checkEmail(email);
    checkAcceptContact(acceptcontact)
  }
}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  validateForm();
});
