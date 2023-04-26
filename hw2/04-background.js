// Add your code here
const userInput = document.getElementById("interval");
const button = document.querySelector("button");
const body = document.querySelector("body");
let toggle;

function toggleBg() {
  let interval = userInput.value;
  console.log(`toggling interval with ${interval} seconds`);
  if(!toggle) {
    toggle = setInterval(setBackground, interval * 1000);
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
    button.textContent = "Stop";
  }
  else {
    clearInterval(toggle);
    toggle = null;
    button.classList.add("btn-primary");
    button.classList.remove("btn-danger");
    button.textContent = "Start";
  }
}

function generateBg() {
  let red   = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue  = Math.floor(Math.random() * 255);
  let alpha = Math.random();

  return `rgba(${red},${green},${blue},${alpha})`;
}

function setBackground() {
  let rgbaString = generateBg();
  body.style.backgroundColor = rgbaString;
}
