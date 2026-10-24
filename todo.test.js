/* Testar o "Gerenciador de Rotas" (Router) do App */

/* 🔴 1. PASSO RED (O Teste que Falha) */
class Navagador {
    constructor() {
        this.telaAtual = 'QualquerTela';
    }
    irPara(novaTela) {
        //Nao fazer nada de proposito
    }
}

describe ('Fluxo de Navegação (Passo RED)', () => {
    test('Deve iniciar na listagem e permitir ir para o cadastro', () => {
        const nav = new Navegador();
        //Vai falhar aqui; Esperava 'ListagemAtividades', mas vai receber 'QualquerTela'
        expect(nav.telaAtual).toBe('ListagemAtividades');

        nav.irPara('CadastroEdicao');
        expect(nav.telaAtual).toBe('CadastroEdicao');
    });
});