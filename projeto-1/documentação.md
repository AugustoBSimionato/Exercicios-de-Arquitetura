## Justificativas para Escolhas de Padrões de Projeto
> Aluno: Augusto Baroni Simionato RA: 2418185

#### Padrão Criacional: Factory Method
**Justificativa:**
O Factory Method foi escolhido para encapsular a lógica de criação dos formatadores, permitindo que novos tipos de formatadores sejam adicionados sem modificar o código existente por meio da criação do `ReportFormatterFactory`. O que também acaba implementando o OCP do SOLID, que facilita a manutenção do código.

#### Padrão Estrutural: Decorator
**Justificativa:**
Tentei utilizar o Decorator, porém não consegui implementá-lo de forma correta.

#### Padrão Comportamental: Strategy
**Justificativa:**
O padrão Strategy já estava presente ao clonar o projeto pelo link no moodle, mas ele está sendo utilizado para definir diferentes estratégias de formatação por meio do `FormaterHTML.js` e `FormaterTXT.js`. Isso permite a criação de um menu para que o usuário possa escolher qual usar, o que valida o comportamento de "separação de comportamento".

### Refatorações usando os princípios do SOLID

#### 1. Princípio de Responsabilidade Única (SRP)
**Refatoração:**
A classe `CitiesReporter` foi refatorada para ter uma única responsabilidade, que é gerenciar o processo de leitura, parsing e geração de relatórios. Anteriormente, ela estava sobrecarregada com múltiplas responsabilidades. Porém, a leitura do arquivo e o parsing do JSON foram mantidos dentro da classe, enquanto a formatação foi delegada a estratégias específicas.

#### 2. Princípio Aberto/Fechado (OCP)
**Refatoração:**
A implementação do Factory Method em ReportFormatterFactory permite que novos formatadores sejam adicionados sem modificar o código existente da aplicação principal. Isso segue o OCP, pois o sistema está aberto para extensão.

#### 3. Princípio da Inversão de Dependência (DIP)
**Refatoração:**
A dependência de CitiesReporter foi invertida para depender do AbstractFormater. Isso facilita a substituição de componentes e a aplicação de diferentes estratégias de formatação com o tempo.