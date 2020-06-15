const evenEqualOdd = (arr) =>{
    let evenSum = 0 
    let oddSum = 0 
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            evenSum += arr[i]
        }else{
            oddSum += arr[i]
        }
    }

    return evenSum === oddSum
}

const newIndex = (arr, index) => {

    let newArray = []

    for(let i = 0, j=0; i < arr.length; i++, j++){
        if(i == index){
            newArray[j] = arr[i+1]
            i++
        }else {
            result[j] == arr[i]
        }
    }

    return newArray
}




function countBalancingElements(arr) {
 
 let count = 0 

 for(let i = 0; i < arr.length; i ++){
    if(evenEqualOdd(newIndex(arr, i))){
        count++
    }
 }

    return count

 }
 
const evenEqualOdd = (arr) => {
    let evenSum = 0 
    let oddSum = 0 
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            evenSum += arr[i]
        }else{
            oddSum += arr[i]
        }
    }
    return evenSum === oddSum
}

 const newIndex = (arr, index) => {
    let newArray = []
    for(let i = 0, j=0; i < arr.length; i++, j++){
        if(i == index){
            newArray[j] = arr[i+1]
            i++
        }else {
            newArray[j] = arr[i]
        }
    }
    return newArray
}





function groupSort(arr) {
    // Write your code here
    
    //create map
    let map = {}
  
    let frequencyArray = []
    

    for(let i = 0; i < arr.length; i++){
        map[arr[i]]? map[arr[i]]++: map[arr[i]] = 1 
    }
    
  
    for(let [key, value] of Object.entries(map)){
        frequencyArray.push([Number(key), value])
    }
     
   
    frequencyArray.sort((a,b) => {
        if(a[1] > b[1]) return -1
        if(a[1] < b[1]) return 1
        if(a[0] > b[0]) return 1
        if(a[0] < b[0]) return -1
    })

    return frequencyArray

}

function findSimilar(a, b) {
    // Write your code here
    let arrayA = a.toString().split('')
    let arrayB = b.toString().split('')

    let map = {}

    for(let i = 0; i < arrayA.length; i++){
        map[arrayA[i]]? map[arrayA[i]]++ : map[arrayA[i]] = 1
    }

    for(let i = 0; i < arrayB.length; i++){
        map[arrayB[i]]? map[arrayB[i]]-- : null
    }

    let aOrB;

    if(Object.values(map).every( el => el === 0)){
        aOrB = arrayA.join('')
        }else{
        aOrB = arrayB.join('')
        }

       let combos = similar(aOrB).filter( el => el[0] !== '0')

       return new Set(combos).size 



       

}

const similar = str =>{
 let combos = []

 if(str.length === 1){
     combos.push(str)
     return combos
 }

 for(let i = 0; i < str.length; i++){
     let char = str[i]
     let remaining = str.slice(0,i) + str.slice(i+1)
     let innerCombos = similar(remaining)
     for(var j = 0; j < innerCombos.length; j++){
         let digit = char + innerCombos[j]
         combos.push(digit)
     }
     
 }          
 
    return combos   
    
}

