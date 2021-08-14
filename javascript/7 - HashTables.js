class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class ListaLigada {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  append(value){
    const node = new Node(value)
    let current = null
    if(this.head === null) {
      this.head = node
    } else {
      current = this.head
      while(current.next){
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  insert(position, element){
    if(position >= 0 && position <= this.length){
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0
      if(position === 0){
        node.next = current
        this.head = node
      } else {
        while(index++ < position){
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  removeAt(position){
    if(position > -1 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if(position === 0) { 
        this.head = current.next
      } else {
        while( index++ < position){
          previous = current
          current = current.next
         
        }
        previous.next = current.next
      }

      this.length--
      return current.value
    } else {
      return null
    }
  }

  remove(element){
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(value){
    let current = this.head
    let index = 0 
    while(current) {
      if(current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
  
  isEmpty(){
    return this.length === 0;
  }

  size(){
    return this.length
  }

  toString(){
    this.print(this.head)
  }

  getHead() {
    return this.head
  }

  print(current){
    if(current === null) return;
    console.log(current.value);
    this.print(current.next);
  }
}

class valuePair{
  constructor(value, key){
    this.value = value;
    this.key = key;
  }
  
  toString() {
    return `[${this.key} - ${this.value}]`
  }
}


class HashTables {
  constructor(){
    this.table = []
    this.key = null
    this.value = null
  }

  put(key, value){
    const postion = this.loselosehashcode(key)
    if(this.table[postion] === null){
      this.table[postion] = new ListaLigada()
    }
  
    this.table[postion].append(new valuePair(value, key))
  }

  remove(key){
    const position = this.loselosehashcode(key)
    if(this.table[position] !== null){
      const current = this.table[position].getHead()
      while(current.next) {
        if(current.element.key === key){
          table[position].remove(current.element)
          if(table[position].isEmpty()){
            table[position] = null
          }
          return true
        }
        current = current.next
      }
      if(current.element.key === key) {
        table[position].remove(current.element)
        if(table[position].isEmpty()){
          table[position] = null
        }
        return true
      }
    }
    return false
  }

  get(key){
    const position = this.loselosehashcode(key)
    if(table[position] === null){ 
      const current = table[position].getHead()

      while(current.next) {
        if(current.element.key === key){
          return current.element.value
        }
        current = current.next
      }
      if(current.element.key === key){
        return current.element.value
      }
    }
    return null
  }

  loselosehashcode(key){
    var hash = 0
    for(var i = 0; i < key.length; i++){
      hash = (hash << 5) - hash + key.charCodeAt(i)
      hash = hash & hash
    }

    return hash % 37
  }

  print(){
    for(var i = 0; i < this.table.length; i++){
      if(this.table[i] != null){
        console.log(this.table[i])
      }
    }
  }
}

