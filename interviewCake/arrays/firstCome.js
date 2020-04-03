var firstCome = (inA, outA, served) => {

    let order = []
    let index1 = 0 
    let index2 = 0 
    let orderIndex = 0 

    while(order < served.length){
        if(inA[index1] > outA[index2]){
            order[orderIndex] = outA[index2]
            index2++
        } else {
            order[orderIndex] = inA[index1]
        }
    }
}

let inOrder = [1, 3, 5]
let outOrder = [2, 4, 6]
let served = [1, 2, 3, 5, 4, 6]

console.log(firstCome(inOrder, outOrder, served))


 