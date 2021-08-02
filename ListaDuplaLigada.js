class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.previous = null
  }
}

class ListaDuplamenteLigada {
  constructor(){
    this.head = null;
    this.length = 0;
    this.tail
  }

  append(value){
    const node = new Node(value)
    let current = null
    if(this.head === null) {
      this.head = node
      this.tail = node
    } else {
      current = this.head
      while(current.next){
        current = current.next
      }
      current.next = node
      this.tail = node
    }
    this.length++
  }

  insert(position, element){
    const node = new Node(element)
    let current = this.head
    let previous = null
    let index = 0
    if(position >= this.length) {
      this.append(element)
    } else if(position === 0) {
      node.next = current
      this.head = node
    } else {
      while(index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    this.length++
  }

  removeAt(position) {
    let current = this.head
    let previous = null
    let index = 0
    if(position === 0) {
      this.head = current.next
    } else {
      while(index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.value
  }

  remove(element){
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(value) {
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


const list = new ListaDuplamenteLigada();

list.append(10)
list.append(20)
list.append(30)
list.insert(0, 'valor posicao0')
list.append(40)
list.insert(5, 'ultima posicao')
list.removeAt(0)
// console.log(list.size())
list.toString()
console.log(list.indexOf(10))
console.log(list.indexOf('ultima posicao'))
console.log(list.indexOf('valor posicao0'))