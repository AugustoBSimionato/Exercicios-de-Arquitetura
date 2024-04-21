const readline = require("readline");

// Princípio SRP - A classe tem uma única responsabilidade que é de executar o método de busca.
class BuscaContatosStrategy {
  buscar(contatos, termo) {}
}

// Princípio SRP - A classe tem uma única responsabilidade: realizar a busca por nome (termo).
class BuscaPorNomeStrategy extends BuscaContatosStrategy {
  buscar(contatos, termo) {
    return contatos.filter((contato) => contato.nome.includes(termo));
  }
}

// Princípio SRP - A classe tem uma única responsabilidade: gerenciar contatos de acordo com as escolhas do usuário.
class CompositeContatos {
  constructor(buscaStrategy) {
    this.contatos = [];
    this.buscaStrategy = buscaStrategy;
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
  }

  removerContato(nome) {
    this.contatos = this.contatos.filter((contato) => contato.nome !== nome);
  }

  buscarContato(termo) {
    return this.buscaStrategy.buscar(this.contatos, termo);
  }
}

// Princípio SRP - A classe tem uma única responsabilidade: construir o CLI enquanto o sistema está funcionando.
class CLI {
  constructor(compositeContatos) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.compositeContatos = compositeContatos;
  }

  printMenu() {
    console.log("\nMenu:");
    console.log("1 - Listar todos os contatos");
    console.log("2 - Adicionar contato");
    console.log("3 - Remover contato por nome");
    console.log("4 - Buscar contato por nome");
    console.log("5 - Sair");
  }

  // Princípio SRP - A função tem uma única responsabilidade: executar a interface do usuário.
  run() {
    this.printMenu();

    this.rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          console.log("Contatos:");
          console.log(this.compositeContatos.contatos);
          break;
        case "2":
          this.rl.question("Nome: ", (nome) => {
            this.rl.question("Telefone: ", (telefone) => {
              this.rl.question("Email: ", (email) => {
                this.compositeContatos.adicionarContato({
                  nome,
                  telefone,
                  email,
                });
                console.log("Contato adicionado com sucesso!");
                this.run();
              });
            });
          });
          return;
        case "3":
          this.rl.question("Nome do contato a ser removido: ", (nome) => {
            this.compositeContatos.removerContato(nome);
            console.log("Contato removido com sucesso!");
            this.run();
          });
          return;
        case "4":
          this.rl.question("Forneça o nome a ser buscado: ", (termo) => {
            const contatosEncontrados =
              this.compositeContatos.buscarContato(termo);
            if (contatosEncontrados.length > 0) {
              console.log("Contatos encontrados:", contatosEncontrados);
            } else {
              console.log("Nenhum contato encontrado.");
            }
            this.run();
          });
          return;
        case "5":
          console.log("Saindo...");
          this.rl.close();
          return;
        default:
          console.log("Opção inválida!");
      }
      this.run();
    });
  }
}

// Inicialização do programa
const buscaStrategy = new BuscaPorNomeStrategy();
const compositeContatos = new CompositeContatos(buscaStrategy);
const cli = new CLI(compositeContatos);

// Princípio DIP - A classe CLI depende de CompositeContatos durante a execução do sistema.
cli.run();
