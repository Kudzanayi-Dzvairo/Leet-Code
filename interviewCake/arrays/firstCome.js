// var firstCome = (inA, outA, served) => {

//     let order = []
//     let index1 = 0 
//     let index2 = 0 
//     let orderIndex = 0 

//     while(order < served.length){
//         if(inA[index1] > outA[index2]){
//             order[orderIndex] = outA[index2]
//             index2++
//         } else {
//             order[orderIndex] = inA[index1]
//         }
//     }
// }

// let inOrder = [1, 3, 5]
// let outOrder = [2, 4, 6]
// let served = [1, 2, 3, 5, 4, 6]

// console.log(firstCome(inOrder, outOrder, served))


 function isFirstComeFirstServed(takeout, dineIn, served){

    //base case
    if(served.length === 0) {
        return true 
    }

    if(takeout.length && takeout[0] === served[0]){

        return isFirstComeFirstServed(takeout.slice(1), dineIn, served.slice(1))
    } elseif(dineIn.length && dineIn[0] === served[0]) {

        return isFirstComeFirstServed(dineIn.slice(1), served.slice(1), takeout)
    } else {
        return false 
    }
 }

 function isFirstComeFirstServed2(takeout, dineIn, served){

    var takeoutIndex = 0 
    var dineIndex = 0 
    var takeoutMaxIndex = takeout.length -1
    var dineInMaxIndex = dineIn.length -1

    for(var i = 0; i < served.length; i++){
         var order = servedOrders[i]

         if(takeOutOrdersIndex <= takeoutMaxIndex && order === takeoout[takeoutIndex]){

         takeOutOrdersIndex++
    } else if(dineIndex  <=dineInMaxIndex && order === dineIn[dineIndex]) {
        dineIndex++
    } else {
        return false
    }
 }

 if(dineInOrdersIndex != dineInOrders.length || takeOutOrdersIndex != takeOutOrders.length){
     return false
 }

 return true


}
