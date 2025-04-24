class CentralDeLuzes {
    static _instance = null;
    constructor() {
        if(CentralDeLuzes._instance) {
            throw new Error("A CentralDeLuzes é Singleton!!!");
        }
        CentralDeLuzes._instance = this;
    }

    static getInstance(){
        if(!CentralDeLuzes._instance) {
            CentralDeLuzes._instance = new CentralDeLuzes();
        }
        return CentralDeLuzes._instance;
    }

    ligarLuz(comodo){
        this.atualizarLuzComodo(comodo, true);
    }

    desligarLuz(comodo){
        this.atualizarLuzComodo(comodo, false);
    }

    atualizarLuzComodo(comodo, estado){
        const comodoEl = document.getElementById(comodo);
        const mensgemEl = document.getElementById('mensagem');

        if(comodoEl && mensgemEl){
            if(estado){
                comodoEl.classList.add('ligado');
                mensgemEl.textContent = `Luz do ${comodo} ligada`;
            }else{
                comodoEl.classList.remove('ligado');
                mensgemEl.textContent = `Luz do ${comodo} desligada`;
            }
        }
    }
}

const centralDeLuzes = CentralDeLuzes.getInstance(); // Correção aqui: não redeclarar CentralDeLuzes

document.addEventListener('DOMContentLoaded', () => {
    const botoesLigarDesligar = document.querySelectorAll('.ligar-desligar-btn');
    const mensagemElement = document.getElementById('mensagem');

    botoesLigarDesligar.forEach(botao => {
        botao.addEventListener('click', function() {
            const comodo = this.dataset.comodo;
            const acao = this.dataset.acao;

            if (acao === 'ligar') {
                centralDeLuzes.ligarLuz(comodo);
            } else if (acao === 'desligar') {
                centralDeLuzes.desligarLuz(comodo);
            }
        });
    });
});