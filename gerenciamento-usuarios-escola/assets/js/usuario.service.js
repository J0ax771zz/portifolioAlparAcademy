window.app.factory('UsuarioService', function() {
    let _usuarios = [];

    // Carrega os usuários do localStorage se existirem
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (usuariosSalvos) {
        _usuarios = JSON.parse(usuariosSalvos);
    } else {
        // Dados padrão (inicialização)
        _usuarios = [
            {nome: "João", email: "joao@gmail.com", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Pedro", email: "joao@gmail.com", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Carlos", email: "joao@gmail.com", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Álvaro", email: "joao@gmail.com", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Felipe", email: "joao@gmail.com", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Gobbato", email: "joao@gmail.com", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
        ];
        salvar(); // salva no localStorage
    }

    function salvar(tempo = 2000) {
        return new Promise((resolve) => {


            setTimeout(() => {
                localStorage.setItem("usuarios", JSON.stringify(_usuarios))
                resolve()
            }, tempo);

        });    
    }

    return {
        listar() {
            return JSON.parse(localStorage.getItem('usuarios'));
        },

        adicionar(nomeUsuario, emailUsuario, tipoUsuario) {
            _usuarios.push({
                nome: nomeUsuario,
                email: emailUsuario,
                tipo: tipoUsuario,
                dataCadastro: new Date().toLocaleDateString(),
            });
            return salvar();
        },

        remover(index) {
            _usuarios.splice(index, 1);
            return salvar(1000);
        }
    };
});
