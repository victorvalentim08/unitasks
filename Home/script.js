//Chuva
const chuva = document.getElementById('chuva');
chuva.innerHTML = '';

for (let i = 0; i < 150; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.style.left = `${Math.random() * 100}vw`;
  drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
  drop.style.animationDelay = `${Math.random() * 5}s`;
  chuva.appendChild(drop);
}

// Fuunção carregando...
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    // Feedback visual
    startBtn.textContent = "Carregando...";
    startBtn.disabled = true;
    startBtn.style.opacity = "0.7";
    startBtn.style.cursor = "not-allowed";

    setTimeout(() => {
        window.location.href = "../login-cadastro/cadastro.html";
    }, 1500);
});