class ArrayList{
  constructor(){
    this.array = []
  }

  add(item){
    this.array.push(item)
  }

  toString(){
    return this.array.join(', ')
  }

  bubleSort(){
    for(let i = 0; i < this.array.length - 1; i++){
      for(let j = 0; j < this.array.length - 1; j++){
        if(this.array[j] > this.array[j + 1]){
          let temp = this.array[j]
          this.array[j] = this.array[j + 1]
          this.array[j + 1] = temp
        }
      }
    }
  }

  selectionSort(){
    let minValue = null
    for(let i = 0; i < this.array.length - 1; i++){
      minValue = i
      for(let j = i + 1; j < this.array.length; j++){
        if(this.array[minValue] > this.array[j]){
          minValue = j
        }
      }
      if(minValue != i){
        let temp = this.array[i]
        this.array[i] = this.array[minValue]
        this.array[minValue] = temp
      }
    }
  }

  insertionSort(){
    var j, temp
    for(let i = 1; i < this.array.length; i++){
      j = i 
      temp = this.array[i]

      while(j > 0 && this.array[j - 1] > temp){
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }

  mergeSort(){
    this.array = this.mergeSortRec(this.array)
  }

  mergeSortRec(array){
    let length = array.length
    if(length === 1){
      return array
    }

    let mid = Math.floor(length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid, length)

    return this.merge(this.mergeSortRec(left), this.mergeSortRec(right))
  }

  merge(left, right) {
    let result = []
    let ileft = 0
    let iright = 0
    while(ileft < left.length && iright < right.length){
      if(left[ileft] <= right[iright]){
        result.push(left[ileft])
        ileft++
      } else {
        result.push(right[iright])
        iright++
      }
    }

    while(ileft < left.length){
      result.push(left[ileft])
      ileft++
    }

    while(iright < right.length){
      result.push(right[iright])
      iright++
    }

    return result
  }

  quickSort(){
    this.quick(this.array, 0, this.array.length - 1)
  }
  quick(array, left, right){
    let index 
    if(array.length > 1){
      index = this.partition(array, left, right)
     if(left < index - 1){
        this.quick(array, left, index - 1)
      }
      if(index < right){
        this.quick(array, index, right)
      } 
    }
  }

  partition(array, left, right){
    let pivot = array[Math.floor((right + left) /2 ) ]
    let i = left
    let j = right
    while(i <= j){
      while(array[i] < pivot){
        i++
      }
      
      while(array[j] > pivot){
        j--
      }
      
      if(i <= j){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        i++
        j--
      }
    }
    return i
  }
}

const arrayList = new ArrayList()

arrayList.add(5)
arrayList.add(4)
arrayList.add(3)
arrayList.add(2)
arrayList.add(1)
console.log(arrayList.toString())

// arrayList.bubleSort()
// arrayList.selectionSort()

// arrayList.mergeSort()
arrayList.quickSort()
console.log(arrayList.toString())