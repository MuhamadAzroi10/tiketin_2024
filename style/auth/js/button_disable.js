// register 1
const input = document.getElementById("myInput");
const button = document.getElementById("myButton");

input.addEventListener("input", function () {
  if (input.value !== "") {
    button.disabled = false;
    button.classList.add("btn_auth_active");
  } else {
    button.disabled = true;
    button.classList.remove("btn_auth_active");
  }
});
