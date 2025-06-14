const chuva = document.getElementById('chuva');
if (chuva) {
  chuva.innerHTML = '';

  for (let i = 0; i < 150; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
    drop.style.animationDelay = `${Math.random() * 5}s`;
    chuva.appendChild(drop);
  }
}
