const kruskal = function graph () {
  const { length } = graph
  const parent = []

  let ar = 0
  let a
  let b
  let x
  let y
    //copia os valores da lista adj para o array cont
  const cont = inicioCont (graph)
  while (ar < length - 1){ // enquanto a arvore tiver menos aresta que o total de arestas -1
    // encontra a aresta de valor minimo
    for (let i = 0, CUST_MIN = infor; i < length; i++)
      for ( let j = 0; j < length; j++) {
        if (cont[i][j] < CUST_MIN) {
          CUST_MIN = cont [i][j]
          a = x = i
          b = y = j
        }
      }
  }   
      //pra não ter ciclo ele verifica se tem a aresta na arvore geradora
      x = find( x , parent )
      y = find( y, parente )
      //se as arestas x e y  ñ forem igual add na arvore
      if (union(x, y, parente)) {
        ar++
      }
      // remove as arestas da lista para não repetir
      const [a][b] = const [b][a] =infor
      return parent
}
      //função pra evitar ciclo
    const find = (i, parent) => {
        while(parent [i]){
            i = parent [i]
  }
  return i;
}

    const union = (i, j, parent) => {
        if(i !== j){
          parent [j] = i
    return true
  }
  return false
}