class Dicionario {
  constructor(){
    this.items = {}
  }

  set(key, value){
    this.items[key] = value
  }

  delete(key) {
    if(this.has(key)) {
      delete this.items[key]
      return true
    }
    
    return false
  }

  has(key) {
    return this.items.hasOwnProperty(key)
  }

  get(key) {
    return this.has(key) ? this.items[key] : null 
  }

  clear(){
    this.items = {}
  }

  size(){
    return Object.keys(items).length
  }

  keys() {
    return Object.keys(items)
  }

  value(){
    return Objexct.values(items)
  }

  getItems(){
    return this.items
  }
}

class Fila {
  constructor() {
    this.fila = [];
  }

  adicionar(elemento) {
    this.fila.push(elemento);
  }

  remover() {
    return this.fila.shift();
  }

  vazia() {
    return this.fila.length === 0;
  }

  proximo() {
    return this.fila[0]
  }

  limpar() {
    this.fila = []
  }

  imprimir()  {
      console.log(this.fila)
  }
}

class Grafos {
  constructor(){
    this.vertices = []
    this.adjList = new Dicionario()
  }

  addVertex(vertice){
    this.vertices.push(vertice)
    this.adjList.set(vertice, [])
  }

  addEdge(vertice, edge){
    this.adjList.get(vertice).push(edge)
    this.adjList.get(edge).push(vertice)
  }

  toString(){
    let str = ''
    for(let i = 0; i < this.vertices.length; i++){
      str += this.vertices[i] + '->'
      var neigbhores = this.adjList.get(this.vertices[i])
      for(let j = 0; j < neigbhores.length; j++){
        str += neigbhores[j] + ' '
      }
      str += '\n'
    }
    return str
  }

  initializeColor(){
    const color = []
    for(let i = 0; i < this.vertices.length; i++){
      color[vertices[i]] = 'white'
    }
    
    return color
  }

  buscaEmProfundidadeDFS(vertice, callback) {
    const color = this.initializeColor()
    for(var i = 0; i < this.vertices.length; i++){
      if(color[vertices[i]] === 'white') {
        this.dfsVisit(vertices[i], color, callback)
      }
    }
  }

  dfsVisit(vertice, color, callback){
    color[vertice] = 'gray'
    callback(vertice)
    var neigbhores = this.adjList.get(vertice)
    for(let i = 0; i < neigbhores.length; i++){
      var w = neigbhores[i]
      if(color[w] === 'white'){
        this.dfsVisit(w, color, callback)
      }
    }
    color[vertice] = 'black'
  }

  buscaEmLarguraBFS(vertice, callback){
    const color = this.initializeColor()
    const queue = new Fila()
    queue.adicionar(vertice)

    while(!queue.vazia()){
      var u = queue.remover()
      neigbhores = this.adjList.get(u)
      color[u] = 'gray'
      for(let i = 0; i < neigbhores.length; i++){
        var w = neigbhores[i]
        if(color[w] === 'white'){
          color[w] = 'gray'
          queue.adicionar(w)
        }
      }
      color[u] = 'black'
      callback(u)
    }
  }
}


function visitedVertice(v){
  console.log(v)
}