var sortArrayByParity = function(a){

    let anwerArray = []

    //loop over array once and push even numbers into new array 
    //loop over array a second time and push odd numvers into it 

    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 === 0){
            answerArray.unshift(a[i])
        } else {
            answerArray.push(a[i])
        }
    }

    // for(let j = 0; j < a.length; j++){
    //     if(a[j] % 2 === 1){
    //         answerArray.push(a[j])
    //     }
    // }

    return answerArray 
}