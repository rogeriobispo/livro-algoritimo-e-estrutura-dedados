class Set {
  constructor(){
    this.items = {}
  }

  add(item){
    if(!this.has(item)){
      this.items[item] = item
      return true
    }

    return false
  }

  delete(item){
    if(this.has(item)){
      delete this.items[item]
      return true
    }

    return false
  }
  has(item){
    return this.items.hasOwnProperty(item)
  }
  clear(){
    this.items = {}
  }
  size(){
    return Object.keys(this.items).length
  }
  value(){
    return Object.values(this.items)
  }

  uniao(otherSet){
    var result = new Set()
    for(var item in this.items){
      result.add(item)
    }

    for(var item in otherSet.items){
      result.add(item)
    }

    return result
  }

  intersecao(otherSet) {
    var result = new Set()
    for(var item in this.items){
      if(otherSet.has(item)){
        result.add(item)
      }
    }

    return result
  }

  diferenca(otherSet) {
    const result = new Set()
    for(var item in this.items){
      if(!otherSet.has(item)){
        result.add(item)
      }
    }

    return result
  }

  subConjunto(otherSet) {
    if(this.size() > otherSet.size()) return false
    const values = this.values()
    for(var item in values){
      if(!otherSet.has(item)){
        return false
      }
    }
    return true
  }
}