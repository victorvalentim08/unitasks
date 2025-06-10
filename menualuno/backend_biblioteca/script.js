document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".biblioteca-form");
  const inputs = form.querySelectorAll("input");
  const conteudoInput = document.querySelector(".input-grande");
  let numeroCadeiraSelecionada = null;

  // Abrir modal ao clicar em uma cadeira
  document.querySelectorAll(".btn-cadeira").forEach(botao => {
    botao.addEventListener("click", () => {
      numeroCadeiraSelecionada = botao.getAttribute("data-cadeira");

      const chave = `cadeira_${numeroCadeiraSelecionada}`;
      const anotacoes = JSON.parse(localStorage.getItem(chave)) || [];
      const listaAnotacoes = document.getElementById("lista-anotacoes");
      const modalNumero = document.getElementById("modal-cadeira-numero");

      listaAnotacoes.innerHTML = "";
      modalNumero.textContent = numeroCadeiraSelecionada;

      if (anotacoes.length === 0) {
        listaAnotacoes.innerHTML = "<p>Nenhuma anotação salva.</p>";
      } else {
        anotacoes.forEach((item) => {
          const div = document.createElement("div");
          div.classList.add("bloco-anotacao");
          div.innerHTML = `
            <strong>${item.titulo}</strong>
            <p>${item.conteudo}</p>
          `;
          listaAnotacoes.appendChild(div);
        });
      }

      document.getElementById("modal-anotacoes").style.display = "flex";
    });
  });

  // Salvar anotação
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!numeroCadeiraSelecionada) {
      alert("Por favor, selecione uma cadeira antes de salvar.");
      return;
    }

    const titulo = inputs[2].value.trim();
    const conteudo = conteudoInput.value.trim();

    if (!titulo || !conteudo) {
      alert("Preencha o título e o conteúdo da anotação.");
      return;
    }

    const chave = `cadeira_${numeroCadeiraSelecionada}`;
    const dadosAntigos = JSON.parse(localStorage.getItem(chave)) || [];

    dadosAntigos.push({ titulo, conteudo });
    localStorage.setItem(chave, JSON.stringify(dadosAntigos));

    // Atualiza o nome do botão com o último título salvo
    const botao = document.querySelector(`.btn-cadeira[data-cadeira="${numeroCadeiraSelecionada}"]`);
    botao.textContent = titulo;

    alert(`Anotação salva na Cadeira ${numeroCadeiraSelecionada}`);
    form.reset();
    numeroCadeiraSelecionada = null;
  });

  // Fechar modal
  document.querySelector(".fechar").addEventListener("click", () => {
    document.getElementById("modal-anotacoes").style.display = "none";
  });

  // Botões "Excluir"
  document.querySelectorAll(".btn-excluir").forEach(botao => {
    botao.addEventListener("click", () => {
      const numero = botao.getAttribute("data-cadeira");
      const confirmar = confirm(`Tem certeza que deseja excluir todas as anotações da Cadeira ${numero}?`);
      if (!confirmar) return;

      // Remover do localStorage
      localStorage.removeItem(`cadeira_${numero}`);

      // Restaurar texto do botão
      const botaoCadeira = document.querySelector(`.btn-cadeira[data-cadeira="${numero}"]`);
      botaoCadeira.textContent = `Cadeira ${numero}`;

      alert(`Cadeira ${numero} excluída com sucesso!`);
    });
  });

  // Atualiza os botões ao carregar a página
  document.querySelectorAll(".btn-cadeira").forEach(botao => {
    const numero = botao.getAttribute("data-cadeira");
    const chave = `cadeira_${numero}`;
    const anotacoes = JSON.parse(localStorage.getItem(chave)) || [];

    if (anotacoes.length > 0) {
      botao.textContent = anotacoes[anotacoes.length - 1].titulo;
    }
  });
});
