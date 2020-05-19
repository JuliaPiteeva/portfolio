const formFeedback = document.querySelector("#formFeedback");
const send = document.querySelector(".feedback__btn");
const closeOverlayMessage = document.querySelector(".close-overlay-message");
const body = document.querySelector("body");

send.addEventListener("click", (event) => {
  event.preventDefault();

  if (validateForm(formFeedback)) {
    var formData = new FormData();
    formData.append("name", formFeedback.elements.name.value);
    formData.append("phone", formFeedback.elements.email.value);
    formData.append("comment", formFeedback.elements.comment.value);
    formData.append("to", "a@a.a");

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
    xhr.send(formData);
    xhr.addEventListener("load", () => {
      overlay.addClass(xhr.status);
      console.log("1 " + xhr.status);

      if (xhr.response.status) {
        overlay.open();
        body.classList.add("lock");
        overlay.setContent(xhr.response.message);
        overlay.setMessage(xhr.response.message);

        formFeedback.elements.name.value = "";
        formFeedback.elements.email.value = "";
        formFeedback.elements.comment.value = "";
      } else {
        overlay.open();
        body.classList.add("lock");
        overlay.setContent("Письмо не отправлено");
        overlay.setMessage(xhr.response.message);
      }
    });
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
  } else {
    removeErrorClass(field);
  }
  return true;
}

const errorBlock = document.querySelector(".error");
const inputBlocks = document.querySelector(".feedback__input");

function addErrorClass(element) {
  element.nextElementSibling.classList.add("error--active");
  element.classList.add("feedback__input-error");
}
function removeErrorClass(element) {
  element.nextElementSibling.classList.remove("error--active");
  element.classList.remove("feedback__input-error");
}

const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);
function createOverlay(template) {
  const fragment = document.createElement("div");

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".content");
  const closeElement = fragment.querySelector(".overlay-close");
  const closeMessage = fragment.querySelector(".close-overlay-message");
  const messageElement = fragment.querySelector(".overlay-message");

  overlayElement.addEventListener("click", (e) => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  closeMessage.addEventListener("click", (e) => {
    if (e.target === closeOverlayMessage) {
      closeElement.click();
    }
  });

  closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
    body.classList.remove("lock");
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(content) {
      contentElement.innerHTML = content;
    },
    setMessage(message) {
      messageElement.innerHTML = message;
    },
    addClass(statusGet) {
      // console.log(statusGet == 200);
      if (statusGet === 200) {
        messageElement.classList.add("overlay-message--green");
      } else if (statusGet === 503) {
        messageElement.classList.add("overlay-message--orange");
      } else {
        messageElement.classList.add("overlay-message--red");
      }
    },
  };
}
