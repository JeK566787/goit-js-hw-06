const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onBtnFormSubmit);

function onBtnFormSubmit(event) {
  event.preventDefault();
  const formObject = {};

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("Всі поля повині бути заповнені");
  } else {
    formObject.email = formElements.email.value;
    formObject.password = formElements.password.value;
    event.target.reset();
  }
  return console.log(formObject);

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.dir(name);
  //     console.log(value);
  //   });
}
