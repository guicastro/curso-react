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
- Recomendado utilizar para qualquer aplicação que necessitam gerenciar o estado dos componentes