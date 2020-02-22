function removeDuplicate(s) {
     let stack = [];

     for(let char of s){
         stack[stack.length -1] === char ? stack.pop : stack.push('char')
     }

     stack.join('')

}

var removeDuplicates = (s) {
    
    let stack = []
    let n = s.length

    for(let i = 0; i < n; i++){
        
        if(stack.top() === S.charAt(i)){
            stack.pop()
        } else stack.push(S.charAt(i))
    }

    return stack.join('')
}

Array.prototype.top = function (){
    return this[this.length - 1]
}