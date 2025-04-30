app
  .controller("AppController", function ($scope, $filter, UsuarioService) {
    $scope.usuarios = UsuarioService.listar();
    $scope.usuarioInput = {
      nome: "",
      tipo: "",
    };

    $scope.addNewUser = () => {
      const nome = $scope.usuarioInput.nome;
      const tipo = $scope.usuarioInput.tipo;
      if (!nome || !tipo) return;

      UsuarioService.adicionar(nome, tipo);
      $scope.usuarios = UsuarioService.listar();

      $scope.usuarioInput = {
        nome: "",
        tipo: "",
      };
      
      var modal = bootstrap.Modal.getInstance(
        document.getElementById("addUserModal")
      );
      modal.hide();
    };

    $scope.removeUser = (usuarioSelecionado) => {
      const index = $scope.usuarios.findIndex(
        (u) =>
          u.nome === usuarioSelecionado.nome &&
          u.tipo === usuarioSelecionado.tipo &&
          u.dataCadastro === usuarioSelecionado.dataCadastro
      );

      if (index !== -1) {
        UsuarioService.remover(index);
        $scope.usuarios = UsuarioService.listar();
      }
    };
  })
  .controller("UsuariosController", function ($scope) {});
