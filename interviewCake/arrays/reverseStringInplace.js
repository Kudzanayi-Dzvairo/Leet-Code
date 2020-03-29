var reverse = (string) => {

 let stringArray = string.split('')

 
let leftIndex = 0; 
let rightIndex = stringArray.length -1 

while(leftIndex < rightIndex) {

    //Swap characters
    const temp = stringArray[leftIndex]
    stringArray[leftIndex] = stringArray[rightIndex]
    stringArray[rightIndex] = temp 

    //move towards middle
    leftIndex++
    rightIndex--
}

return stringArray.join()

}

console.log(reverse('banana'))