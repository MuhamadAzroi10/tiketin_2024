var marker = document.querySelector("#marker");
var item = document.querySelectorAll(".timeLine span");
var timeContent1 = document.querySelector(".timeContent1");
var timeContent2 = document.querySelector(".timeContent2");
var textContent1 = document.querySelector(".textContent1");
var textContent2 = document.querySelector(".textContent2");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

function first() {
  timeContent1.classList.remove("d-none");
  textContent1.classList.add("active");

  timeContent2.classList.add("d-none");
  textContent2.classList.remove("active");
}
function two() {
  timeContent2.classList.remove("d-none");
  textContent2.classList.add("active");

  timeContent1.classList.add("d-none");
  textContent1.classList.remove("active");
}
