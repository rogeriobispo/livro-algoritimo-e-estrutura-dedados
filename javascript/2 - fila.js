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

const f = new Fila();

f.adicionar(10)
f.adicionar(11)
f.adicionar(12)
f.adicionar(13)
f.adicionar(14)

console.log(f.proximo())
f.remover()
console.log(f.proximo())
