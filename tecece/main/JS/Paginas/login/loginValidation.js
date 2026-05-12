// Login validation script for volunteer and director login pages
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('box-login');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const entrarBtn = document.getElementById('entrar-btn');

    function checkFormValidity() {
        const isUsernameValid = usernameInput.value.trim() !== '';
        const isEmailValid = emailInput.checkValidity() && emailInput.value.trim() !== '';
        const isSenhaValid = senhaInput.value.trim() !== '';
        const isFormValid = isUsernameValid && isEmailValid && isSenhaValid;

        entrarBtn.disabled = !isFormValid;
    }

    usernameInput.addEventListener('input', checkFormValidity);
    emailInput.addEventListener('input', checkFormValidity);
    senhaInput.addEventListener('input', checkFormValidity);

    // Initial check
    checkFormValidity();
});