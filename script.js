const form = document.querySelector("form");
const btn = document.getElementById("subBtn");
const firstName = document.querySelector(".FirstName");
const lastName = document.querySelector(".LastName");
const email = document.querySelector(".EmailAddress");
const query = document.querySelector(".query");
const general = document.querySelector(".general");
const support = document.querySelector(".support");
const checkBox1 = document.querySelector("#general").checked;
const checkBox2 = document.querySelector("#support").checked;
const message = document.querySelector(".EmailAddress");
const textArea = document.querySelector("textarea");
const check = document.getElementById("box");
const Err = document.querySelector(".Error");
const success = document.querySelector(".success");

general.classList.remove("eff");
support.classList.remove("eff");

const name_error = document.querySelector(".name_error");
const email_error = document.querySelector(".email_error");
const query_error = document.querySelector(".query_error");
const msg_error = document.querySelector(".msg_error");
const check_error = document.querySelector(".check_error");

const clearError = () => {
  name_error.style.opacity = 0;
  email_error.style.opacity = 0;
  query_error.style.opacity = 0;
  msg_error.style.opacity = 0;
  check_error.style.opacity = 0;
  Err.innerHTML = "";
};
clearError();

firstName.classList.remove("errr");
lastName.classList.remove("errr");
email.classList.remove("errr");
textArea.classList.remove("errr");

let valid = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateEmail(email) {
  const checkEmail =
    /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
  return checkEmail.test(String(email).toLowerCase());
}
function changeRadioBg() {
  if (document.querySelector("#general").checked) {
    general.classList.add("eff");
  } else if (document.querySelector("#support").checked) {
    general.classList.remove("eff");
    support.classList.add("eff");
  }
}
// changeRadioBg()
function validateForm() {
  const first = firstName.value.trim();
  const last = lastName.value.trim();
  const e = email.value.trim();
  const t = textArea.value.trim();

  if (firstName.value == null || firstName.value == "") {
    name_error.innerHTML = "This field is required";
    name_error.style.opacity = 1;
    firstName.classList.add("errr");
  } else {
    firstName.classList.remove("errr");
    name_error.style.opacity = 0;
  }
  if (lastName.value == null || lastName.value == "") {
    Err.innerHTML = "This field is required";
    Err.style.opacity = 1;
    lastName.classList.add("errr");
    console.log("checking");
    valid = false;
  } else {
    lastName.classList.remove("errr");
    Err.innerHTML = "";
    valid = true;
  }

  if (email.value == "") {
    email_error.innerHTML = "This field is requried";
    email_error.style.opacity = 1;
    email.classList.add("errr");
    valid = false;
  } else if (!validateEmail(e)) {
    email_error.innerHTML = "Please enter a valid email address";
    email_error.style.opacity = 1;
    email.classList.add("errr");
    valid = false;
  } else {
    email.classList.remove("errr");
    email_error.style.opacity = 0;
    console.log("?");
    valid = true;
  }
  if (document.querySelector("#general").checked) {
    console.log("checkbox1 checked");
    query_error.style.opacity = 0;
    valid = true;
  } else if (document.querySelector("#support").checked) {
    // general.classList.remove("eff");
    // support.classList.add("eff");
    query_error.style.opacity = 0;
    valid = true;
  } else {
    query_error.innerHTML = "Please select a query type";
    query_error.style.opacity = 1;
    valid = false;
  }
  if (textArea.value == "") {
    msg_error.innerHTML = "This field is required";
    message.classList.add("errr");
    msg_error.style.opacity = 1;
    valid = false;
  } else {
    msg_error.style.opacity = 0;
    message.classList.remove("errr");
    valid = true;
  }
  if (!check.checked) {
    check_error.innerHTML =
      "To submit this form, please consent to be contacted";
    check_error.style.opacity = 1;
    valid = false;
  } else {
    check_error.style.opacity = 0;
    valid = true;
  }
  if (valid) {
    success.classList.remove("hide");
  }
}

btn.addEventListener("click", (c) => {
  console.log("clicked");
});
