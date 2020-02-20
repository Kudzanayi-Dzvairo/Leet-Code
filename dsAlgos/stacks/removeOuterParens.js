var removerOuterParentheses = function(str){

    let stack = []
    let currSubString = ""
    let collection = []

    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            stack.push(str[i])
            currSubString += str[i]
        } else if(str[i] === ')'){
            stack.pop()
            currSubString += str[i]

            if(stack.length === 0){
                collection.push(currSubString)
                currSubString = ""
            }
        }
    }

    finalString = ""
    for(let i = 0; i < collection.length; i++){
        finalString = collection[i].substring(1, collection[i].length -1)
    }

    return finalstring 

    
}

var removeOuterParentheses = function(str){

    let counter = 0
    let result = '' 
    
    for(let i = 0; i < str.length; i++){
        if((str[i] === '(' && ++counter !== 1) || (str[i] === ')' && --counter !== 0)) {
            result += str[i]
        }
    }
    return result
}