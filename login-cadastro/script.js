document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const erroMsg = document.getElementById('erro');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verifica se os campos estão preenchidos
        if (!email || !password) {
            erroMsg.textContent = "Por favor, preencha todos os campos.";
        } else {
            erroMsg.textContent = ""; 
            console.log("Campos preenchidos corretamente!");
            // Aqui você pode enviar para o servidor ou realizar outras ações
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const erroMsg = document.getElementById('erro');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // E-mail e senha fictícios para simulação de login
        const validEmail = "usuario@teste.com";
        const validPassword = "senha123";

        // Verifica se os campos estão preenchidos
        if (!email || !password) {
            erroMsg.textContent = "Por favor, preencha todos os campos.";
        } else if (email === validEmail && password === validPassword) {
            erroMsg.textContent = ""; 
            console.log("Login bem-sucedido!");
            
            // Redireciona para a página home
            window.location.href = 'home.html';  // Simulação de navegação para a Home
        } else {
            erroMsg.textContent = "E-mail ou senha inválidos.";
        }
    });
});