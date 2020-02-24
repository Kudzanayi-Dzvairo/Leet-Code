class Stack{
    this.array = []
}


peek() {
    this.array[this.length-1]
}

push(value){
    this.array.push(value)
    return this
}


pop(){
    this.array.pop()
    return this
}
