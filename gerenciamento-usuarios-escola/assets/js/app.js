app
  .controller("AppController", function ($scope, $filter, UsuarioService) {
    $scope.usuarios = UsuarioService.listar();
    $scope.usuarioInput = {
      nome: "",
      email: "",
      tipo: "",
    };
    $scope.isSalvando = false;
    $scope.mensagem = "";

    $scope.addNewUser = () => {
      const { nome, email, tipo } = $scope.usuarioInput;
      if (!nome || !email || !tipo) return;

      $scope.isSalvando = true;
      $scope.mensagem = "";

      UsuarioService.adicionar(nome, email, tipo).then(() => {
        $scope.usuarios = UsuarioService.listar();

        $scope.mensagem = "Usuário cadastrado com sucesso";

        // Limpa os dados e o estado do formulário
        $scope.usuarioInput = {};
        $scope.isSalvando = false;

        var modal = bootstrap.Modal.getInstance(
          document.getElementById("addUserModal")
        );
        modal.hide();

        $scope.$apply();
      });
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

    // Evento para resetar modal ao abrir
    const modal = document.getElementById("addUserModal");
    modal.addEventListener("show.bs.modal", function () {
      $scope.usuarioInput = {};
      $scope.mensagem = "";
      $scope.isSalvando = false;

      if ($scope.form) {
        $scope.form.$setPristine();
        $scope.form.$setUntouched();
      }

      $scope.$apply();
    });
  })
  .controller("UsuariosController", function ($scope) {});
