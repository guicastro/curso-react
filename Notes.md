# Aula inicial
- Boiler Plate: esqueleto para trabalhar com o projeto
- npm install http-server -g (instala o http-server para utilizar nos projetos do react)
- http-server | rodar dentro da pasta para iniciar o servidor web

# Create React App
- Para iniciar um projeto usando o create-react-app deve-se instalar o pacote, usando npm install create-react-app -g
- Para criar o projeto utilizar create-react-app *NOME_DO_PROJETO*
- Sempre que for utilizar um notação JSX dentro do HTML, deve-se colocar um cojunto de chaves para delimitar o JSX
- O componente precisa ter o método render() para exibir o HTML
- Props são dados transitórios entre componentes
- As props estão presentes dentro do Constructor de cada classe de Componente e podem ser inseridas conforme a necessidade
- As props podem ser passadas na chamada do componente, por exemplo <Componente attr='valor1' attr2='valor2' /> onde attr1 e attr2 são as props. Podem ser recuperadas como objeto this.props
- Pode-se recuperar os valores com this.props.attr ou this.props.attr2 ou pelo método destructor onde const {attr, attr2 } = this.props;

# Props e State
- Props e State são objetos com informações, são pareceidos mas com usos distintos
- State - dados e informações, geralmente utilizado para regras de negócio e dados
- Props - transitório, geralmente utilizado para customização de um componente

# Ciclo de vida do Componente
- É todo o trajeto que o componente vai ter na sua aplicação, do momento em que ele é criado até o momento em que ele deixa de existir
- Um componente deixa de existir quando não é mais utilizado na aplicação, por exemplo um componente que tinha em uma página e em outra não, ou o componente foi removido do DOM
- Os métodos utilizados para ciclo de vida são: componentDidMount, componenteDidUpdate, componenteWilMount, componenteWillUnmount, componentDidCatch, componenteWillReceiveProps
- Uma das formas para atualizar o state é usar o método this.setState
- Sempre que modificar um State a função de render() do componente será acionada

# Eventos
- Observar os eventos que existen no React, semelhante ao HTML, mas com algumas sintaxes diferentes
- Ao chamar um método dentro de um evento no render, utilizar sempre this.nomeDoMetodo e não executar o método e sim chamar (sem o () no final)
- Atenção aos CONTEXTOS entre State, Propos e Componente, são diferentes. Um this dentro de um componente não chama o this.state
- state é uma função assíncrona, ou seja, é possível trabalhar apenas com o state do momento

# Redux
- É uma lib capaz de gerenciar os estados (state) dos formulários
- Utiliza os conceitos e padrões da arquitetura Flux, o Redux é uma implementação do Flux
- Recomendado utilizar para qualquer aplicação que necessitam gerenciar o estado dos componentes
- Importante noemar o formulários Redux, deve ser um nome único
- Em aplicações usando Redux o "form" pode ser chamado de Componente e o que era o componente passa a se chamar de container, pois irá receber os forms redux
- Conforme a aplicação cresce, pode ficar muito grande trabalhar num mesmo arquivo com o componente e com o container, uma das boas práticas é criar pastas separadas para containers e para componentes
- Como funciona a arquitetura Flux: View -> Action -> Dispatcher -> Store -> View
- A Store recebe e ação e determina com os dados serão tratados e como será a interação com a View
- Para uma boa organização da aplicação, concentre sua aplicação em uma única Store
- No Redux não se altera o estado, se retorna um novo estado com as modificações
- Uma boa prática é criar uma estrutura de pastas para utilizar nos projetos do Redux, como Actions, Components, Containers e Reducers

