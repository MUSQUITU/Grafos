
    class dicionario{
    construtor(adjList, vertices){
      this.adjList = adjList
      this.vertices = vertices
      }
      set(adjList, vertices){
      }
      get(adjList, vertices){
      }

      }

  class Graph{
    constructor(ehDirecionado = false){
      //INFORMA SE O GRAFO É DIRECIONADO OU NÃO E POR PADRÃO Ñ SERA DERECIONADO
      this.ehDirecionado = ehDirecionado
      //ARMAZENAR O NOME DE TODOS OS VERTICES
      this.vertices= []
      //ARMAZENAR A LISTA DE ADJACENCIAS [chave=vertices, valor=vertices adj]
      this.adjList = new dicionario()

    }

    //add novo vertice
    addVertex(v){
        if(!this.vertices.includes(v)){
        //adicionar o vertice na lista de vertices
        this.vertices.push(v)
        //listaAdj vazio definindo o valor da chave correspondente ao vertice
        this.adjList.set(v, [])
      }
    }
    //recebe dois vertices que queremos ligar no grafo
    addEdge(v, w){
      //verifica se os vertices tão no grafo, se ñ serão add a lista de vertices
      if(!this.adjList.get(v)){
        this.addVertex(v)
      }
      //mesma coisa aqui
      if(!this.adjList.get(w)){
        this.addVertex(w)
      }
      //add uma aresta do vertice v para o w, acrescenta o w à adjList de v
      this.adjList.get(v).push(w)//grafo DIRECIONADO
      if(!this.ehDirecionado){
      this.adjList.get(w).push(v)//grafo não direcionado
    }
    }
    //retornar a lista de vertices
    getVertices(){
      return this.vertices
    }
    //retornar a lista de adjacentes
    getAdjlList(){
      return this.adjList
    }

    toString(){
      let s =''
      for(let i = 0; i< this.vertices.length; i++){
        s += `${this.vertices[i]} ->`
        const vizinhos = [this.adjList.get(this.vertices[i])]
        for( let j = 0; j < vizinhos.length; j++){
          s += `${vizinhos[j]}`
      }
      s +='\n'
    }
      return s
    }
  }
    //teste
    const graph = new Graph()
    const MeusVertices = ['A','B','C','D','E','F','G','H','I']
    for(let i=0; i < MeusVertices.length; i++){
      graph.addVertex(MeusVertices[i])
    }
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('E', 'I')

    console.log(graph.toString())
