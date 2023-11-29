document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar o envio do formulário padrão

        // Limpar mensagens de erro
        document.getElementById('email-error').textContent = '';
        document.getElementById('telefone-error').textContent = '';

        // Validar e-mail
        var email = document.getElementById('email').value;
        if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'E-mail inválido';
            return;
        }
        // Checa se é um número positivo
        const isPositiveNumber = (value) => {
            const number = parseFloat(value);
            return !isNaN(number) && number > 0;
        };

        // Validar telefone
        var telefone = document.getElementById('telefone').value;
        if (!isValidTelefone(telefone)) {
            document.getElementById('telefone-error').textContent = 'Número de telefone inválido';
            return;
        }else if (!isPositiveNumber(telefone)) {
            showsError(telefone, 'Preço deve ser um número positivo.');
        } else if (parseInt(telefone) = 10) {
            showsError(telefone, 'Telefone deve ter 10 digitos');

        // Se a validação passar, redirecione para a página de entrada
        window.location.href = '/login/entrar/index.html';
    };
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidTelefone(telefone) {
    var telefoneRegex = /^\d{10}$/; // Exemplo: requer 10 dígitos numéricos
    return telefoneRegex.test(telefone);
}