const formFeedback = document.querySelector("#formFeedback");
const formButton = document.querySelector(".feedback__btn");

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateForm(formFeedback)) {
    console.log("Форма заполнена!");
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.email)) {
    valid = false;
  }
  if (!validateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;
    addErrorClass(field);
    return false;
  }
  return true;
}

const errorBlock = document.querySelector(".error");
const inputBlocks = document.querySelector(".feedback__input");
//

function addErrorClass(element) {
  element.nextElementSibling.classList.add("error--active");
  element.classList.add("feedback__input-error");
}
