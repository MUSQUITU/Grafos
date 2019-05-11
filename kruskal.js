const kruskal = function graph () {
  const { length } = graph
  const parent = []

  let ar = 0
  let a
  let b
  let x
  let y
  
  const cont = inicioCont (graph)
  while (ar < length - 1){
    for (let i = 0, CUST_MIN = infor; i < length; i++)
      for ( let j = 0; j < length; j++) {
        if (cont[i][j] < CUST_MIN) {
          CUST_MIN = cont [i][j]
          a = x = i
          b = y = j
        }
      }
  }
      x = find( x , parent )
      y = find( y, parente )
      if (union(x, y, parente)) {
        ar++
      }
      return parent
}
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