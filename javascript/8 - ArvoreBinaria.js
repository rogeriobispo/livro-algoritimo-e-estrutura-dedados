class Node {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

class ArvoreBinaria {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    const node = new Node(valor)
    if(this.raiz == null){
      this.raiz = node
    }else{
      this.inserirNode(this.raiz, node);
    }
  }

  inserirNode(raiz, newNode) {
    if(newNode.valor < raiz.valor){
      if(rais.esqueda == null){
        raiz.esquerda = newNode;
      } else {
        this.inserirNode(raiz.esquerda, newNode);
      }
    } else {
      if(raiz.direita == null){
        raiz.direita = newNode;
      } else {
        this.inserirNode(raiz.direita, newNode);
      }
    }
  }

  buscar(valor) {
    return searchNode(this.raiz, valor)
  }
  
  buscarNode(node, valor) {
    if(node == null){
      return false;
    }

    if(node.valor == valor){
      return node;
    }

    if(valor < node.valor) {
      return this.buscarNode(node.esquerda, valor);
    } else if (valor > node.valor) {
      return this.buscarNode(node.direita, valor);
    } else {
      return true
    }
  }

  remover(valor) {
    this.removeNode(this.raiz, valor)
  }

  removeNode(node, valor) {
    if(node == null){
      return null
    }

    if(valor < node.valor){
      node.esqueda = this.removeNode(node.esquerda, valor)
      return node
    } else if (valor > node.valor) {
      node.direita = this.removeNode(node.direita, valor)
      return node
    } else {
      if(node.esquerda == null && node.direita == null){
        node = null
        return null
      } else{
        if(node.esquerda == null){
          node = node.direita
          return node
        } else if(node.direita == null){
          node = node.esquerda
          return node
        }

        const minNode = this.procuraMinNode(node.esquerda)
        node.valor = minNode.valor
        node.esquerda = this.removeNode(node.esquerda, minNode.valor)

        return node
      } 
    }
  }

  minimo(){
    return this.minimoNode(this.raiz)
  }

  minimoNode(node){
    if(node) {
      while(node && node.esquerda !== null){
        node = node.esquerda;
      }
      return node.valor
    }
    
    return null
  }

  procuraMinNode(){
    while(node && node.esquerda !== null){
      node = node.esquerda;
    }
    return node
  }

  maximo(){
    return this.maximoNode(this.raiz)
  }

  maximoNode(node){
    if(node){
      while(node && node.direita !== null){
        node = node.direita;
      }
      return node.valor
    }
    
    return null
  }

  procuraMaxNode(){
    while(node && node.direita !== null){
      node = node.direita;
    }
    return node
  }

  emOrdemTransversal(callBack){
    this.emOrdemTransversalNode(this.raiz, callBack)
  }

  emOrdemTransversalNode(node, callBack){
    if(node ) {
      this.emOrdemTransversalNode(node.esqueda, callBack)
      callBack(node.valor)
      this.emOrdemTransversalNode(node.direita, callBack)
    }
  }

  preOrderTransversal(){
    if(node ) {
      callBack(node.valor)
      this.emOrdemTransversalNode(node.esqueda, callBack)
      this.emOrdemTransversalNode(node.direita, callBack)
    }
  }
  
  postOrderTransversal(){
    if(node ) {
      this.emOrdemTransversalNode(node.esqueda, callBack)
      this.emOrdemTransversalNode(node.direita, callBack)
      callBack(node.valor)
    }
  }
}