// 1
changeText.onclick = () => {
  title.textContent = "🕯️ Nuevo reto DOM";
};

// 3
let c = 0;
btnCount.onclick = () => {
  count.textContent = ++c;
};

// 4
toggle.onclick = () => {
  text.style.display = text.style.display === "none" ? "block" : "none";
};

// 5
add.onclick = () => {
  const li = document.createElement("li");
  li.textContent = inputList.value;

  li.onclick = () => li.classList.toggle("completed");

  li.ondblclick = () => li.remove();

  list.appendChild(li);
  inputList.value = "";
};

clear.onclick = () => list.innerHTML = "";

// 6
createCard.onclick = () => {
  const card = document.createElement("div");
  card.className = "card";

  const h = document.createElement("h3");
  h.textContent = cardTitle.value;

  const p = document.createElement("p");
  p.textContent = cardDesc.value;

  card.appendChild(h);
  card.appendChild(p);

  cards.appendChild(card);
};

// 7
moverBtn.onmouseover = () => {
  moverBtn.style.position = "absolute";
  moverBtn.style.top = Math.random() * 400 + "px";
  moverBtn.style.left = Math.random() * 400 + "px";
};

// 8
timerCount = 0;
setInterval(() => {
  timer.textContent = ++timerCount;
}, 1000);

// 9
const retos = [
  "Crear lista",
  "Modo oscuro",
  "Contador",
  "Cards",
  "Timer"
];

random.onclick = () => {
  reto.textContent = retos[Math.floor(Math.random() * retos.length)];
};

// dark mode
darkMode.onclick = () => {
  document.body.classList.toggle("dark");
};