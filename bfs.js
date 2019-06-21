/* Um objeto Queue para funcionalidade semelhante a fila em matrizes JavaScript. */
let fila = function() {
    this.items = [];
};
fila.prototype.enfileirar = function(obj) {
    this.items.push(obj);
};
        //remove o elemento do array
fila.prototype.dequeue = function() {
    return this.items.shift();
};
fila.prototype.taVazio = function() {
    return this.items.length === 0;
};

/*
 * Executa uma pesquisa inicial em um gráfico
 * @param {number} source -O índice do vértice de origem.
 * @returns {array} Matriz de objetos descrevendo cada vértice, como:
 *     [{distancia: _, antecessor: _ }]
 */
let doBFS = function(graph, source) {
    let bfsInfo = [];

    for (let i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distancia: null,
	        antecessor: null };
    }

    bfsInfo[source].distancia = 0;

    let Fila = new fila();
    Fila.enfileirar(source);

    
    // Enquanto a fila não estiver vazia:
          // Repetidamente desenfileirar um vértice u da fila.
    //  
    //  Para cada vizinho v de u que não foi visitado:
        // Defina a distância para 1 maior que a distância de u
        // Definir antecessor para u
        // Enfileirar v

    
    return bfsInfo;
};


let adjList = [[1,1,0,0,1],
              [0,1,1,1,0],
              [0,0,1,1,0],
              [1,0,0,1,0],
              [0,0,0,1,1]];
let bfsInfo = doBFS(adjList, 3);
for (let i = 0; i < adjList.length; i++) {
    console.log("vertice " + i + ": distancia = " + bfsInfo[i].distancia + ", antecessor = " + bfsInfo[i].antecessor);
}