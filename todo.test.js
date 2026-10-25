/* Bonus */
/* Como instalar o JEST em um projeto NODE */
/* npm install --save-dev jest

No package.json:
{
  "scripts": {
    "test": "jest"
  }
}

Aí execute:
npm test */

/* Bonus */
/* Como instalar o JEST em um projeto NODE */
/* npm install --save-dev jest

No package.json:
{
  "scripts": {
    "test": "jest"
  }
}

Aí execute:
npm test */

/* Entendendo os comandos do Jest
No código que você escreveu, aparecem quatro elementos importantes.

Para que serve

describe() Agrupa testes relacionados.

test() Define um teste individual.

expect() Declara qual resultado você espera.

.toBe() Verifica se o resultado corresponde exatamente ao valor esperado. */

/* TDD — Gerenciador de Rotas do Aplicativo de Atividades Físicas
🔴 1. PASSO RED — O teste que falha 🔴 */

/* Nesta etapa, escrevemos primeiro o teste para definir o comportamento esperado do gerenciador de rotas.
A implementação ainda não está pronta, de propósito.*/
/* Testar o "Gerenciador de Rotas" (Router) do App */

class Navegador {
  constructor() {
    this.telaAtual = "QualquerTela";
  }

  irPara(novaTela) {
    // Não fazer nada de propósito
  }
}

describe("Fluxo de Navegação (Passo RED)", () => {
  test("Deve iniciar na listagem e permitir ir para o cadastro", () => {
    const nav = new Navegador();

    // Falha: a tela atual é "QualquerTela"
    expect(nav.telaAtual).toBe("ListagemAtividades");

    nav.irPara("CadastroEdicao");

    // Também falha: o método não altera a tela atual
    expect(nav.telaAtual).toBe("CadastroEdicao");
  });
});

/* Resultado esperado: 
O teste falha porque o navegador não inicia na tela correta e ainda não permite navegar para o cadastro.
======================================================================================================================================= */
/* 🟢 2. PASSO GREEN — Implementação mínima 🟢

Agora, modificamos o código apenas o necessário para atender ao teste criado na etapa RED. */

class Navegador {
  constructor() {
    this.telaAtual = "ListagemAtividades";
  }

  irPara(novaTela) {
    this.telaAtual = novaTela;
  }
}

/* O que mudou?

O navegador passa a iniciar na tela ListagemAtividades.
O método irPara() recebe o nome da nova tela e atualiza telaAtual.
A implementação é simples e atende aos dois comportamentos definidos no teste.

Resultado esperado: os dois comandos expect() passam a corresponder aos resultados esperados. */
