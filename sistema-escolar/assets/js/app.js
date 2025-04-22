class Usuario {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }

    exibirPerfil() {
      return `
        <p><strong>Nome:</strong> ${this.nome}</p>
        <p><strong>Email:</strong> ${this.email}</p>
      `;
    }
  }

  class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
      super(nome, email, senha);
      this.turma = turma;
    }

    exibirPerfil() {
      return super.exibirPerfil() + `<p><strong>Turma:</strong> ${this.turma}</p>`;
    }
  }

  class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
      super(nome, email, senha);
      this.materias = materias;
    }

    exibirPerfil() {
      return (
        super.exibirPerfil() +
        `<p><strong>Matérias:</strong> ${this.materias.join(", ")}</p>`
      );
    }
  }

  const usuarioData = JSON.parse(localStorage.getItem("usuarioLogadoAtual"));

  let usuario;
  if (usuarioData.turma) {
    usuario = new Aluno(usuarioData.nome, usuarioData.email, usuarioData.senha, usuarioData.turma);
  } else if (usuarioData.materias) {
    usuario = new Professor(usuarioData.nome, usuarioData.email, usuarioData.senha, usuarioData.materias);
  } else {
    usuario = new Usuario(usuarioData.nome, usuarioData.email, usuarioData.senha);
  }

document.getElementById("perfil").innerHTML = usuario.exibirPerfil();