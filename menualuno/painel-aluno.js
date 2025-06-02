// JS unificado do painel do aluno (menualuno)

// Modal de foto do aluno (todas as páginas)
document.addEventListener('DOMContentLoaded', function() {
  const fotoAluno = document.getElementById('foto-aluno');
  if(fotoAluno) {
    fotoAluno.style.cursor = 'pointer';
    fotoAluno.addEventListener('click', () => {
      let modal = document.getElementById('modal-foto');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-foto';
        modal.style.display = 'flex';
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.8)';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = 9999;
        const img = document.createElement('img');
        img.src = fotoAluno.src;
        img.alt = 'Foto do Aluno';
        img.style.maxWidth = '90vw';
        img.style.maxHeight = '90vh';
        img.style.borderRadius = '12px';
        img.style.boxShadow = '0 4px 32px #000a';
        modal.appendChild(img);
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
          if(e.target === modal) modal.remove();
        });
      } else {
        modal.style.display = 'flex';
      }
    });
  }

  // Fórum: envio de formulário (apenas visual)
  const forumForm = document.querySelector('.forum-form');
  if(forumForm) {
    forumForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Funcionalidade de publicação em breve!');
    });
  }

  // Eventos: filtro de eventos por pesquisa
  const pesquisaInput = document.getElementById('pesquisa-evento');
  const eventosLista = document.getElementById('eventos-lista');
  if(pesquisaInput && eventosLista) {
    pesquisaInput.addEventListener('input', function() {
      const termo = this.value.toLowerCase();
      const cards = eventosLista.querySelectorAll('.evento-card');
      cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(termo) ? '' : 'none';
      });
    });
  }
});
