const emailUsuario = document.getElementById('emailUsuario');
const senhaUsuario = document.getElementById('senhaUsuario');
const btnLogin = document.getElementById('btnLogin');
const erro = document.getElementById('erro');



const usuarios = [
    new Aluno("João Moscardi", "joao.moscardi@alpar.com", "abc123", "2A"),
    new Aluno("Larissa Santos", "larissasantos123@gmail.com", "larissa2025", "9B"),
    new Professor("Alváro Carvalho", "alvaro.carvalho05@cruzeirodosul.edu.br", "alvaroCS", ["Sistemas Operacionais", "Algoritmos"]),
    new Professor("José Claúdio", "jose.claudio@cruzeirodosul.edu.br", "tasi1", ["Tópicos Avançados em SI"])
];

function verificarUsuario(email, senha) {
    return usuarios.find(user => user.email === email && user.senha === senha);
};



btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const email = emailUsuario.value;
    const senha = senhaUsuario.value;
    const usuarioEncontrado = verificarUsuario(email, senha);

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogadoAtual', JSON.stringify(usuarioEncontrado));
        window.location.href = '/portifolioAlparAcademy/sistema-escolar/assets/pages/perfil.html';
    } else {
        console.log("Email ou senha inválidos");
        erro.classList.remove('d-none'); // Corrigido aqui
        emailUsuario.value = '';
        senhaUsuario.value = '';
    }
    
})
