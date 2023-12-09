const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', onformRefInput);
const localStorageKey = 'feedback-form-state';

let inputName;
let inputValue;

const inputData = {
  email: '',
  message: '',
};

function onformRefInput(e) {
  inputName = e.target.type;
  inputValue = e.target.value;

  if (inputName === 'email') {
    inputData.email = inputValue;
  } else if (inputName === 'textarea') {
    inputData.message = inputValue;
  }
  //   console.log(inputData);

  localStorage.setItem(localStorageKey, JSON.stringify(inputData));
}

formRef.addEventListener('submit', onformRefSubmit);

const savedInputData = localStorage.getItem(localStorageKey);
const parsedInputData = JSON.parse(savedInputData);

// console.log(parsedInputData);

const textarea = formRef.elements.message;
textarea.value =
  parsedInputData !== null && parsedInputData !== undefined
    ? parsedInputData.message
    : '';

const email = formRef.elements.email;
email.value =
  parsedInputData !== null && parsedInputData !== undefined
    ? parsedInputData.email
    : '';

function onformRefSubmit(e) {
  e.preventDefault();

  const submitData = {
    email: email.value,
    message: textarea.value,
  };

  console.log(submitData);
  localStorage.removeItem(localStorageKey);
  formRef.reset();
}
