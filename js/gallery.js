let currentlySelected = 0;
const nodes = document.querySelectorAll(".gallery-img");
// console.log(nodes);
const prevBtn = document.querySelector(".prev");
// console.log(prevBtn);
const nextBtn = document.querySelector(".next");

function previous() {
  nextBtn.disabled = true;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected--;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}

function next() {
  prevBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected++;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected + 1 === nodes.length) {
    nextBtn.disabled = true;
  }
}

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();

