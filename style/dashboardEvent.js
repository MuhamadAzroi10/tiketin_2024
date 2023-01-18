const optionMenu = document.querySelector(".javascriptone"),
  selectBtn = optionMenu.querySelector(".javascriptselectone"),
  options = optionMenu.querySelectorAll(".javascriptOptionOne"),
  sBtn_text = optionMenu.querySelector(".javascriptTextOne");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-textOne").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// ==================

const optionMenuTwo = document.querySelector(".javascripttwo"),
  selectBtnTwo = optionMenuTwo.querySelector(".javascriptselecttwo"),
  optionTwo = optionMenuTwo.querySelectorAll(".javascriptOptionTwo"),
  btnTextTwo = optionMenuTwo.querySelector(".javascriptTextTwo");

selectBtnTwo.addEventListener("click", () =>
  optionMenuTwo.classList.toggle("active")
);

optionTwo.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-textTwo").innerText;
    btnTextTwo.innerText = selectedOption;

    optionMenuTwo.classList.remove("active");
  });
});

// ==================

const optionenuTree = document.querySelector(".javascripttree"),
  selectBtntree = optionenuTree.querySelector(".javascriptselecttree"),
  optiontree = optionenuTree.querySelectorAll(".javascriptOptionTree"),
  btnTexttree = optionenuTree.querySelector(".javascriptTextTree");

selectBtntree.addEventListener("click", () =>
  optionenuTree.classList.toggle("active")
);

optiontree.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-textTree").innerText;
    btnTexttree.innerText = selectedOption;

    optionenuTree.classList.remove("active");
  });
});
