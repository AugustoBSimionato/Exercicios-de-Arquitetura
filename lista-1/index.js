// Leitura das informações que o usuário insere no terminal a cada operação
const readline = require('readline');

// Utilização do Strategy para buscar contatos
class BuscaContatosStrategy {
    buscar(contatos, termo) {}
}

// Filtro de busca por nome
class BuscaPorNomeStrategy extends BuscaContatosStrategy {
    buscar(contatos, termo) {
        return contatos.filter(contato => contato.nome.includes(termo));
    }
}

// Utilização do Composite para adicionar e remover contatos
class CompositeContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    buscarContato(termo, buscaStrategy) {
        return buscaStrategy.buscar(this.contatos, termo);
    }
}

// Processamento de entradas e saídas durante as operações
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função auxiliar para imprimir o menu quando o usuário iniciar o programa ou após realizar alguma operação
function printMenu() {
    console.log('\nMenu:');
    console.log('1 - Listar todos os contatos');
    console.log('2 - Adicionar contato');
    console.log('3 - Remover contato por nome');
    console.log('4 - Buscar contato por nome');
    console.log('5 - Sair');
}

// CLI
function runCLI(compositeContatos, buscaStrategy) {
    printMenu();

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                console.log('Contatos:');
                console.log(compositeContatos.contatos);
                break;
            case '2':
                rl.question('Nome: ', (nome) => {
                    rl.question('Telefone: ', (telefone) => {
                        rl.question('Email: ', (email) => {
                            compositeContatos.adicionarContato({ nome, telefone, email });
                            console.log('Contato adicionado com sucesso!');
                            runCLI(compositeContatos, buscaStrategy);
                        });
                    });
                });
                return;
            case '3':
                rl.question('Nome do contato a ser removido: ', (nome) => {
                    compositeContatos.removerContato(nome);
                    console.log('Contato removido com sucesso!');
                    runCLI(compositeContatos, buscaStrategy);
                });
                return;
            case '4':
                rl.question('Forneça o nome a ser buscado: ', (termo) => {
                    const contatosEncontrados = compositeContatos.buscarContato(termo, buscaStrategy);
                    if (contatosEncontrados.length > 0) {
                        console.log('Contatos encontrados:', contatosEncontrados);
                    } else {
                        console.log('Nenhum contato encontrado.');
                    }
                    runCLI(compositeContatos, buscaStrategy);
                });
                return;
            case '5':
                console.log('Saindo...');
                rl.close();
                return;
            default:
                console.log('Opção inválida!');
        }

        runCLI(compositeContatos, buscaStrategy);
    });
}

//Inicialização do programa
const compositeContatos = new CompositeContatos();
const buscaStrategy = new BuscaPorNomeStrategy();
runCLI(compositeContatos, buscaStrategy);
