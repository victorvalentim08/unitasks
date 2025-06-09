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

    form.addEventListener('submit', function (event) {

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            erroMsg.textContent = "Por favor, preencha todos os campos.";
            erroMsg.style.color = "red";
            event.preventDefault();
        } else if (!emailRegex.test(email)) {
            erroMsg.textContent = "Por favor, insira um e-mail válido.";
            erroMsg.style.color = "red";
            event.preventDefault();
        } else if (password.length < 6) {
            erroMsg.textContent = "A senha deve ter pelo menos 6 caracteres.";
            erroMsg.style.color = "red";
            event.preventDefault();
        } else if (email === usuarioValido.email && password === usuarioValido.senha) {
            erroMsg.textContent = "Login bem-sucedido!";
            erroMsg.style.color = "green";
            event.preventDefault();
                    
        } else {

        }
    });
});