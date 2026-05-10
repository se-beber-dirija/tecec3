const botaoVoltar = document.getElementById('botao-voltar');

botaoVoltar.addEventListener('click', () => {
    window.location.href = '../../../index.html';
});

// Password toggle functionality
const passwordToggle = document.querySelector('.password-toggle');
const passwordInput = document.getElementById('password');
const eyeOpen = document.querySelector('.eye-open');
const eyeClosed = document.querySelector('.eye-closed');

passwordToggle.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    
    // Smoothly toggle icons
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
}

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
