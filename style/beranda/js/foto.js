var tm_pilih = document.getElementById("pilih");
var file = document.getElementById("file");
var gambarPriview = document.getElementById("gambar");
tm_pilih.addEventListener("onClick", function () {
  file.click();
});
file.addEventListener("change", function () {
  gambar(this);
});
function gambar(a) {
  if (a.files && a.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("gambar").src = e.target.result;
    };
    reader.readAsDataURL(a.files[0]);

    tm_pilih.classList.add("hide");
    gambarPriview.classList.remove("hide");
  } else {
    tm_pilih.classList.remove("hide");
    gambarPriview.classList.add("hide");
  }
}

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("check-5");
  // Get the output text
  var text = document.getElementById("input_hide");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.classList.add("hide");
  } else {
    text.classList.remove("hide");
  }
}
