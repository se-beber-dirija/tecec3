const botaoVoltar = document.getElementById('botao-voltar');

botaoVoltar.addEventListener('click', () => {
    window.location.href = '../../paginaInicial/index.html';
});

const passwordToggle = document.querySelector('.password-toggle');
const passwordInput = document.getElementById('password');
const eyeOpen = document.querySelector('.eye-open');
const eyeClosed = document.querySelector('.eye-closed');

passwordToggle.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

    if (isPassword) {
        eyeOpen.style.opacity = '0';
        eyeClosed.style.opacity = '1';
    } else {
        eyeOpen.style.opacity = '1';
        eyeClosed.style.opacity = '0';
    }
});

function showModal(mensagem) {
    document.getElementById('modal-text').innerText = mensagem;
    document.getElementById('custom-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('custom-modal').style.display = 'none';
    document.getElementById('cadastro').reset();

    document.getElementById('cadastrar-btn').disabled = true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro');
    const nomeInput = document.getElementById('nome');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const cadastrarBtn = document.getElementById('cadastrar-btn');

    function checkFormValidity() {
        const isNomeValid = nomeInput.value.trim() !== '';
        const isUsernameValid = usernameInput.value.trim() !== '';
        const isEmailValid = emailInput.checkValidity() && emailInput.value.trim() !== '';
        const isPasswordValid = passwordInput.value.length >= 8;
        const isFormValid = isNomeValid && isUsernameValid && isEmailValid && isPasswordValid;

        cadastrarBtn.disabled = !isFormValid;
    }

    nomeInput.addEventListener('input', checkFormValidity);
    usernameInput.addEventListener('input', checkFormValidity);
    emailInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);

    checkFormValidity();
});

document.getElementById('cadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const usuario = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;


    if (senha.length < 8) {
        showModal("A senha deve ter no mínimo 8 caracteres.");
        return;
    }

    const dadosUsuario = {
        nome: nome,
        usuario: usuario,
        email: email,
        senha: senha
    };

    showModal("Cadastro de voluntário realizado com sucesso!");
});
