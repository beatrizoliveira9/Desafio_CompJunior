document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar o envio do formulário padrão

        // Limpar mensagens de erro
        document.getElementById('email-error').textContent = '';
        document.getElementById('password-error').textContent = '';

        // Validar e-mail
        var email = document.getElementById('email').value;
        if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'E-mail inválido';
            return;
        }

        // Validar senha 
        var password = document.getElementById('password').value;
        if (password.length < 6) {
            document.getElementById('password-error').textContent = 'A senha deve ter pelo menos 6 caracteres';
            return;
        }

        window.location.href = '/quemSomos/quemsomos.html'; //levar para a pagina
    });
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}