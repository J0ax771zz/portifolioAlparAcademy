window.app.factory('UsuarioService', function() {
    let _usuarios = [];

    // Carrega os usuários do localStorage se existirem
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (usuariosSalvos) {
        _usuarios = JSON.parse(usuariosSalvos);
    } else {
        // Dados padrão (inicialização)
        _usuarios = [
            {nome: "João", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Pedro", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Carlos", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Álvaro", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Felipe", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
            {nome: "Gobbato", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
        ];
        salvar(); // salva no localStorage
    }

    function salvar() {
        localStorage.setItem("usuarios", JSON.stringify(_usuarios));
    }

    return {
        listar() {
            return JSON.parse(localStorage.getItem('usuarios'));
        },

        adicionar(nomeUsuario, tipoUsuario) {
            _usuarios.push({
                nome: nomeUsuario,
                tipo: tipoUsuario,
                dataCadastro: new Date().toLocaleDateString(),
            });
            salvar();
        },

        remover(index) {
            _usuarios.splice(index, 1);
            salvar();
        }
    };
});
