# Documentação

## Justificativas da utilização dos princípios DIP, SRP e LSP
> Há também indicações dos princípios no código
* DIP (Dependency Inversion Principle): O princípio DIP está presente no código na linha 116 ao chamar a função run que<br>
inicia o sistema e mostra o menu de opções ao usuário, também porque a classe CLI depende de CompositeContatos que é uma abstração<br>
das funções de adicionar, remover e buscar um contato.
* SRP (Single Responsibility Principle): O princípio SRP já estava presente nas classes BuscaContatosStrategy, BuscaPorNomeStrategy,<br>
CompositeContatos e CLI ao utilizar os padrões de projeto Composite e Strategy que já separava as responsabilidades em classes que<br>
chamam outras classes para a execução de determinadas funções.
* LSP (Liskov Substitution Principle): O princípio LSP está presente indiretamente no código através da hierarquia de herança entre<br>
BuscaContatosStrategy e BuscaPorNomeStrategy.

## Diagrama de Classes
![diagrama_de_classes_lista_2](https://github.com/AugustoBSimionato/Exercicios-de-Arquitetura/assets/72254418/6220e61e-eaa3-4961-99fc-ca1d2782d14f)

* O diagrama de classes foi desenvolvido utilizando as relações entre as classes do código e também houve a criação da classe Contatos<br> 
(não presente no código) para a representação dos dados que são inseridos ao criar um novo contato.
