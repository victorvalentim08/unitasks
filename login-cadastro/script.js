// Função esqueceu senha
document.addEventListener('DOMContentLoaded', function() {
    const esqueceuSenha = document.getElementById('esqueceuSenha')
    
    esqueceuSenha.addEventListener('click',function() {
        alert('No momento não conseguimos redefinir sua senha... 😉')
    })
}) 
// Função mostrar ou ocultar senha
document.addEventListener('DOMContentLoaded', function() {
    const senhaInput = document.getElementById('password')
    const mostraSenha = document.getElementById ('mostraSenha')

    mostraSenha.addEventListener('click',function(){
        const isSenha = senhaInput.type === 'password'
        senhaInput.type = isSenha ? 'text' : 'password'   
    })

})
// Função validação de e-mail
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const erroMsg = document.getElementById('erro');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const usuarioValido = {
        email: "teste@gmail.com",
        senha: "123456"
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede que o formulário seja enviado automaticamente

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            erroMsg.textContent = "Por favor, preencha todos os campos.";
            erroMsg.style.color = "red";
        } else if (!emailRegex.test(email)) {
            erroMsg.textContent = "Por favor, insira um e-mail válido.";
            erroMsg.style.color = "red";
        } else if (password.length < 6) {
            erroMsg.textContent = "A senha deve ter pelo menos 6 caracteres.";
            erroMsg.style.color = "red";
        } else if (email === usuarioValido.email && password === usuarioValido.senha) {
            erroMsg.textContent = "Login bem-sucedido!";
            erroMsg.style.color = "green";

            

            // Aguarda 1 segundo antes de redirecionar
            setTimeout(() => {
                if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
                    window.location.href = "../menualuno/menu.html"; // Live Server
                } else {
                    window.location.href = "/unitasks/"; // GitHub Pages
                }
            }, 1000);
        } else {
            erroMsg.textContent = "E-mail ou senha incorretos.";
            erroMsg.style.color = "red";
        }
    });
});