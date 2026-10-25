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
/* ======================================================================================================================================== */
/* 🔵 3. PASSO REFACTOR 🔵 — Melhoria do código e dos testes

Na última etapa, melhoramos a organização do código, centralizamos os nomes das telas e 
adicionamos uma validação para impedir a navegação para destinos inexistentes. */

const TELAS = Object.freeze({
  LISTAGEM: "ListagemAtividades",
  CADASTRO: "CadastroEdicao",
  CALENDARIO: "CalendarioTreinos",
  HISTORICO: "HistoricoDesempenho",
});

class Navegador {
  constructor() {
    this.telaAtual = TELAS.LISTAGEM;
  }

  irPara(novaTela) {
    const telasValidas = Object.values(TELAS);

    if (!telasValidas.includes(novaTela)) {
      throw new Error("Tela não encontrada");
    }

    this.telaAtual = novaTela;
  }
}

/* Testes do comportamento e da melhoria */

describe("Fluxo de Navegação (Passo REFACTOR)", () => {
  test("Deve iniciar na listagem e permitir ir para o cadastro", () => {
    const nav = new Navegador();

    expect(nav.telaAtual).toBe(TELAS.LISTAGEM);

    nav.irPara(TELAS.CADASTRO);

    expect(nav.telaAtual).toBe(TELAS.CADASTRO);
  });

  test("Não deve permitir navegar para uma tela inexistente", () => {
    const nav = new Navegador();

    expect(() => nav.irPara("TelaInexistente")).toThrow("Tela não encontrada");

    expect(nav.telaAtual).toBe(TELAS.LISTAGEM);
  });
});

/* O que melhorou?

Os nomes das telas foram centralizados em TELAS, facilitando a manutenção.
Object.freeze() impede alterações acidentais nas propriedades do objeto de constantes.
A navegação valida se o destino existe antes de alterar a tela atual.
O teste adicional verifica o tratamento de um destino inválido e confirma que a tela atual permanece inalterada.

Resultado esperado: os testes originais continuam passando, e o novo teste verifica a proteção adicionada. */

/* ============================================================================================================================================== */
/* 
CONCLUSÃO

Este exercício demonstra o ciclo TDD aplicado a uma estrutura de navegação de um aplicativo fictício de atividades físicas.
Na etapa RED, definimos o comportamento esperado; na GREEN, implementamos a solução mínima; e na REFACTOR, melhoramos 
a organização e a validação sem comprometer os comportamentos já testados.
Tudo aqui foi feito de forma ficticia.

A atividade utiliza o Jest como referência para a escrita de testes automatizados e aplica princípios de 
simplicidade, organização e melhoria contínua associados às práticas de XP. */
