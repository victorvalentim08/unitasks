const chuva = document.getElementById('chuva');
const numGotas = 60;
function criarGota() {
  const drop = document.createElement('div');
  drop.className = 'drop';
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = (Math.random() * 1.5 + 0.5) + 's';
  chuva.appendChild(drop);
  drop.addEventListener('animationend', () => {
    drop.remove();
    criarGota();
  });
}
for (let i = 0; i < numGotas; i++) {
  criarGota();
}
