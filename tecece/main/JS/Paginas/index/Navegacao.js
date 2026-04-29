const botaoDiretoria = document.getElementById('botao-pag-diretoria');
const botaoVoluntario = document.getElementById('botao-pag-voluntario');
const botaoVoltar = document.getElementById('botao-voltar');

botaoDiretoria.addEventListener('click', () =>{
    window.location.href = 'Paginas/login diretoria/loginD.html';
});

botaoVoluntario.addEventListener('click', () => {
    window.location.href = './Paginas/login voluntario/loginVoluntario.html';
});

botaoVoltar.addEventListener('click', () =>{
    window.location.href = '../../index.html';
});