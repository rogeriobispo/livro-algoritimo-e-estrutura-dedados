
class Elemento {
  constructor(elemento, prioridade) {
    this.elemento = elemento;
    this.prioridade = prioridade;
  }
}

  
class FilaPrioridade {
  constructor() {
    this.fila = [];
  }
 
  adicionar(elemento, prioridade) {
    const elem = new Elemento(elemento, prioridade);
    let added = false

    for (let i = 0; i < this.fila.length; i++) {
      if ( elem.prioridade < this.fila[i].prioridade ) {
        this.fila.splice(i, 0, elem);
        added = true
        break
      }
    }

    if ( !added ) this.fila.push(elem)
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

const fila = new FilaPrioridade();
fila.adicionar(1, 10)
fila.adicionar(1, 8)
fila.adicionar(1, 5)
fila.adicionar(1, 1)
fila.adicionar(1, 4)

console.log(fila.remover())
console.log(fila.remover())
console.log(fila.remover())
console.log(fila.remover())
console.log(fila.remover())

