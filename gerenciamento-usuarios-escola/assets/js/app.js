angular.module('app', [])
  .controller('AppController', function($scope) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";

    $scope.usuario = {
      nome: "João",
      tipo: "Professor" // Pode mudar para "Professor" para testar
    };
  });