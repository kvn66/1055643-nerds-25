var popup = document.querySelector(".modal-write-us");
var overlay = document.querySelector(".overlay");
var openPopupButton = document.querySelector(".modal-write-us-open");
var closePopupButton = popup.querySelector(".modal-write-us-close");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === "QuotaExceededError" ||
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            (storage && storage.length !== 0);
    }
}

var toggleModal = function() {
  overlay.classList.toggle("overlay--show");
  popup.classList.toggle("modal--show");
}

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleModal();

  if (storageAvailable("localStorage")) {
    if(localStorage.getItem("fullname")) {
      fullname.value = localStorage.getItem("fullname");
      email.focus();
    }
    if(localStorage.getItem("email")) {
      email.value = localStorage.getItem("email");
      message.focus();
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (fullname.value && email.value) {
    if (storageAvailable("localStorage")) {
      localStorage.setItem("fullname", fullname.value);
      localStorage.setItem("email", email.value);
    }
  }
});

closePopupButton.addEventListener("click", function () {
  toggleModal();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    toggleModal();
    if (popup.classList.contains("modal-show")) {
      toggleModal();
    }
  }
});

overlay.addEventListener("click", function () {
  toggleModal();
});

