const addToDo = document.querySelector(".addToDO");
const low = document.querySelectorAll(".low");
const li = document.querySelectorAll("li");
const number = document.querySelector(".numbers");
const contain = document.querySelector(".topB");
const closes = document.querySelectorAll(".mainCLose");
let gets = 0;
const miniCont = document.querySelectorAll(".in");
const body = document.querySelector("body");
const topImage = document.querySelector(".topImage");
const mode = document.querySelector(".mode");
const check = document.querySelectorAll(".check");

const eve = function (eve) {
  if (addToDo.value.length > 0 && eve.keyCode === 13) {
    let p = document.createElement("p");
    let div = document.createElement("div");
    let inner = document.createElement("div");
    let out = document.createElement("div");
    let close = document.querySelector(".please");
    close.classList.add("mainClose");
    close.classList.remove("closed");

    inner.classList.add("in");
    out.classList.add("out");
    p.appendChild(document.createTextNode(addToDo.value));
    p.classList.add("todo");
    div.classList.add("tick");
    div.classList.add("check");
    inner.appendChild(div);
    inner.appendChild(p);

    out.appendChild(inner);
    out.appendChild(close);
    contain.appendChild(out);
    addToDo.value = "";
    console.log(contain.length);

    gets += 1;
    number.textContent = `${gets}  `;

    div.addEventListener("click", function () {
      console.log("ahhhhhhhhss");
      div.classList.toggle("checked");
      div.textContent = "✓";
    });
  }
};
addToDo.addEventListener("keydown", eve);

mode.addEventListener("click", function () {
  mode.classList.toggle("dim");
  body.classList.toggle("white");
  topImage.classList.toggle("dark");
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
