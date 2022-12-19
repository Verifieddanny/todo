const addToDo = document.querySelector(".addToDO");
const low = document.querySelectorAll(".low");
const li = document.querySelectorAll("li");
const number = document.querySelector(".numbers");
const contain = document.querySelector(".topB");

let gets = 0;
const miniCont = document.querySelectorAll(".in");
const body = document.querySelector("body");
const topImage = document.querySelector(".topImage");
const mode = document.querySelector(".mode");
const bottom = document.querySelector(".bottom");
const middle = document.querySelector(".middle");
const adds = document.querySelector(".adds");
let check = document.querySelectorAll(".check");

let ticked = document.querySelectorAll(".ticked");
let closes = document.querySelectorAll(".mainClose");
let outs = document.querySelectorAll(".out");
let outs2 = document.querySelectorAll(".out");
let tickedArr = [];
let checkArr = [];

let closesArr = [];
let outsArr = [];

let eventing = true;
const eve = function (eve) {
  // console.log(contain);
  const vavs = `
  <div class="out">
  <div class="in">
    <div class="tick check"><p class="ticked">✓</p></div>
    <p class="todo">${addToDo.value}</p>
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    class="mainClose"
   
  >
    <path
      fill="currentcolor"
      fill-rule="evenodd"
      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      class="close"
    />
  </svg>
  </div>`;
  const addsUp = function () {
    contain.insertAdjacentHTML("beforeend", vavs);
  };

  if (addToDo.value.length > 0) {
    if (eve.keyCode === 13 || eve.target.id === "button") {
      addsUp();
      addToDo.value = "";
      check = document.querySelectorAll(".check");

      ticked = document.querySelectorAll(".ticked");
      closes = document.querySelectorAll(".mainClose");
      outs = document.querySelectorAll(".out");
      tickedArr = [...ticked];
      checkArr = [...check];

      closesArr = [...closes];
      outsArr = [...outs];
    }
  }
};
addToDo.addEventListener("keydown", eve);
adds.addEventListener("click", eve);
function works() {
  checkArr.forEach(function (check, i) {
    check.addEventListener("click", function () {
      check.classList.toggle("checked");
      tickedArr[i].classList.toggle("✅");
    });
  });

  closesArr.forEach(function (close, i) {
    close.addEventListener("click", function () {
      outsArr[i].remove();
    });
  });
  low[1].addEventListener("click", function () {
    outsArr.forEach(function (outs, i) {
      outs.remove();
    });
  });
}

setInterval(works, 100);

mode.addEventListener("click", function () {
  mode.classList.toggle("dim");
  body.classList.toggle("white");
  topImage.classList.toggle("dark");
  bottom.classList.toggle("light");
  middle.classList.toggle("light");
});

for (const lows of low) {
  lows.addEventListener("click", function () {
    lows.classList.toggle("lows");
  });
}

for (const lis of li) {
  lis.addEventListener("click", function () {
    lis.classList.toggle("lis");
  });
}

const items = function () {
  outs2 = document.querySelectorAll(".out");
  low[0].innerHTML = `${outs2.length} item(s) left.`;
};

setInterval(items, 100);
