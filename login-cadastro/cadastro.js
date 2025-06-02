console.log('js carregado');

document.querySelector(".formulario").addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.querySelector('input[name="nome"]').value.trim();
    const matricula = document.querySelector('input[name="matricula"]').value.trim();
    const curso = document.getElementById("curso").value;
    const polo = document.getElementById("polo").value;
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const termos = document.getElementById("termos").checked;

    if(!nome || !matricula || !curso || !polo || !email || !senha){
        alert("Por favor, preencha todos os campos");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (!termos) {
        alert("Você precisa aceitar os termos de uso.");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "../index.html";
});