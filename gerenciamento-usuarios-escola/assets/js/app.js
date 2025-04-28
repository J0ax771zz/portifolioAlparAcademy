const app = angular.module("usersModule", []);

app.controller("AppController", function ($scope, $filter) {
    $scope.usuarios = [
      {nome: "João", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
      {nome: "Pedro", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
      {nome: "Carlos", tipo: "Aluno", dataCadastro: new Date().toLocaleDateString()},
      {nome: "Álvaro", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
      {nome: "Felipe", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
      {nome: "Gobbato", tipo: "Professor", dataCadastro: new Date().toLocaleDateString()},
    ];
}).controller("UsuariosController", function($scope) {
  
});

