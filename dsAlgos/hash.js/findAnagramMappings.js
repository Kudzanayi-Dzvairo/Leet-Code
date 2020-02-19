A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]

var anagramMappings = function(A,B) {
    let anagramMap = {}

    for(let i = 0; i < B.length; i++){
        anagramMap[B[i]] = i
    }
    console.log(anagramMap)

    for(let i= 0; i < A.length; i++){
        A[i] = anagramMap[A[i]]
        
    }
    return A
}

console.log(anagramMappings(A,B))







var anagramMappings1 = function(A, B) {
    
    let result = []
    
    for(let i = 0; i < A.length; i ++){
       let el = B.indexOf(A[i])
       result.push(el)
    }
    
    return result
    
};