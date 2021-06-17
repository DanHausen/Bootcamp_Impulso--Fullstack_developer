// São soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um Framwork ou código pronto, mas sim de uma definição de alto nível de como um problema comum pode ser solucionado

//Surgiu com o Pattern Language em 1978. Onde, neste livro, avaliaram mais de 253 tipos de problemas.
// No livro, foi definido o formato de um Pattern:
// Nome. O Pattern precisa de um nome
// Exemplo. Precisa de um exemplo de utilização.
// Contexto. Precisa de um contexto em que pode ser aplicado.
// Problema. Precisa mostrar o problema que o Pattern resolve.
// Solução. Precisa mostrar a forma com que resolve o problema.


// Nos anos seguintes foram lançados outros livros e proposições
// No livro 'Design Patterns' de 1994, categoriza os Patterns em 3 tipos:
// Criação. São aqueles que abstraem ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos ou representados. EXEMPLOS: Abstract Factory, Builder, Factory Method, Prototype, Singleton
// Estruturais. Se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. EXEMPLOS: Adapter, Bridge, Composite, Decorator, Facade, Business Delegade, Flyweight, Proxy
// Comportamentais. Se concentram nos algoritmos e atribuições de responsabilidade entre os objetos. Não descrevem apenas padrões de objetos ou classes, mas também os pradrões de comunicação entre os objetos. EXEMPLOS: Chain of responsability, Command, Interpreter, Iterator, Mediator, Observer, State, Strategy, Template Method, Visitor

//Os patterns mais utilizados no JS são: 
//Factory. São todas as funções que retornam um objeto sem a necessidade de chama-las com o 'new'
//Singleton. O objetivo desse patern é criar uma unica instancia de uma funcao construtora e retorná-la toda vez que for necessário utiliza-la. O jQuery é um exemplo de singleton.
//Decorator. Recebe uma outra função como parametro e estende o seu comportamento sem modificá-la explicitamente. É possível utilizar através do TypeScript.
//Observer. A instancia (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorre uma mudança no estado. O 'Vue' tem essa funcionalidade
//Module. Possibilida melhor organização do codigo, sem a necessidade de expor variaveis globais.