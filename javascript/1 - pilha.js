class Pilha {
    constructor() {
        this.pilha = [];
    }
    empilhar(elemento) {
      this.pilha.push(elemento)
        
    }
    desempilhar() {
        return this.pilha.pop()
    }
    topo(){
      return this.pilha[this.tamanho() - 1]
    }
    tamanho() {
        return this.pilha.length       
    }
    vazia() {
        return this.pilha.length === 0
    }

    limpar() {
      this.pilha = []
    }

    imprimir()  {
        console.log(this.pilha)
    }
}


class Bases {
  static DECIMAL = 2
  static OCTAL = 8
  static HEXADECIMAL = 16
}


function baseConverter(number, pilha, base) {
  if(number > 0) {
    pilha.empilhar(Math.floor(number % base))
    baseConverter(Math.floor(number / base), pilha, base)
  }  

  return pilha
}

// fila é lifo ou filo 
// ultimo que entra é o primeiro que sai
// ou primeiro que entra é o ultimo que sai

const p = new Pilha()

convPilha = baseConverter(300, p, Bases.HEXADECIMAL)
digitStrings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
while(convPilha.vazia() === false){
  console.log(digitStrings[convPilha.desempilhar()])
}


