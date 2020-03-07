let array = [3,16,6,8,11,56,4,5,43,85,1,65,32]

function binarySearch(array, value) {

let sorted = array.sort((a,b) => a-b)
let high = array.length-1
let low = 0 
let mid = 0 
console.log(sorted)
while(low <= high){
    //create middle value by adding high and low and dividing by half
    mid = Math.floor((high + low) /2 )
     
    //if value is in the middle return value
    if(sorted[mid] == value){
        return sorted[mid]
    } else if(value > sorted[mid]){
        //if value us greater than mid move low one above mid and try again
        low = mid + 1
    } else {
        //if value is less than mid move value one below mid and try again 
        high = mid -1
    }
  }
  
  //if value is not found return one 
  return -1
}

console.log(binarySearch(array, 7))