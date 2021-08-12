class ArrayList{
  constructor(){
    this.array = []
  }

  add(item){
    this.array.push(item)
  }

  bubleSort(){
    for(let i = 0; i < this.array.length; i++){
      for(let j = 0; j < this.array.length - 1; j++){
        if(this.array[j] > this.array[j + 1]){
          let temp = this.array[j]
          this.array[j] = this.array[j + 1]
          this.array[j + 1] = temp
        }
      }
    }
  }
    }
  }
}