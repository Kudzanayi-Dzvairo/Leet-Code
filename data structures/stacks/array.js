class Stack{
    constructor(){
        this.array = []
    }

    peek(){
        return this.array[this.array.length-1]
    }

    push(value){
        this.array.push(value)
    }

    pop(){
        this.array.pop()
        return this;
    }
}

const myStack = new Stack()

myStack.push('google')
myStack.push('udemy')
myStack.push('gmail')
myStack.pop()
console.log(myStack.peek())