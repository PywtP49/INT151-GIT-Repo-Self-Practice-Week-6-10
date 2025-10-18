const input = document.querySelector("#keyInput");
const log = document.querySelector("#keyLog");

input.addEventListener("keydown", function (event) {
  const p = document.createElement("p");
  p.textContent = `You pressed: ${event.key}`;

  if (event.key === "Enter") {
    p.style.color = "blue";
  } else {
    p.style.color = "black";
  }

  log.appendChild(p);
});