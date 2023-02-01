var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listlength() {
  return item.length;
}

function createListItem() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value;
  function crossOut() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);
  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListItem();
  }
}
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListItem();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

const navbar = document.getElementById("inputs");
let Top = navbar.offsetTop;
let message = document.querySelector(".msg");
function scrollnav() {
  if (window.scrollY >= Top) {
    message.classList.add("msg2");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    message.classList.remove("msg2");
  }
}
window.addEventListener("scroll", scrollnav);
