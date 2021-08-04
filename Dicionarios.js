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