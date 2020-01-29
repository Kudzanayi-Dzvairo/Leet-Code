/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.*/

function uniteUnique(arr){
    //create an empty array to store the final result 
    let finalArray = []

    //Loop through arguments to make program work with two or more arrays
    for(let i = 0; i < arguments.length; i++){
        let arrayArguments = arguments[i];

        //Loops through array at hand
        for(let j = 0; j < arrayArguments.length; j++){
            var indexValue = arrayArguments[j]

            //checks if the value is already on the final array 
            if(finalArray.indexOf(indexValue) < 0){
                finalArray.push(indexValue)
            }
        }
    }

    return finalArray
}

function uniteUnique2(arr){
    //spread arguments into an array
    let args = [...arguments]
    //create results empty array
    let result = [];
    //loop over array of arguments 
    for (let i = 0; i < args.length; i++){
        //loop of argument array elements
        for (let j = 0; j < args[i].length; j++){
            //if said element is not in results array
            if(!result.includes(args[i][j])){
                //push element to results array
                result.push(args[i][j])
            }
        }
    }
    //results
    return result
}

funtion uniteUnique3(arr){
    let newArr;

    let args = Arry.prototype.slice.call(arguments)

    newArr = args.reduce(arrA, ArrB){
        return arrA.concat(
            arrB.filter(funtion(i){
                return arrA.indexOf(i) === -1
            })
        )
    }

    return newArr
}