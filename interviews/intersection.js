# Given 2 numbers that are of type string
# Write a function that sums the numbers and returns the new sum as a string
# These numbers are too large to be stored as integers.

# Example input:
# n1 = "91234567890"
# n2 = "91987654321"

//so given two strings of numbers 
//add both numbers within the string and return that value as a string 
// You may not convert the entire string  into a number 

String1 = “91234567890"
String2 = "91987654321"

N1 = 100
N2 = 200

function addValues (n1, n2){

//create string to return value 
 let total = []
 
//take the length of the larger number 
let longer; 
let shorter

if(n1.length > n2.length){
 Longer = n1 
Shorter = n2
}else {
  Longer = n2
  Shorter = n1
}

let difference = longer - shorter

let zeros = ‘0’.repeat(difference-1)

Shorter = zeroes + shorter



//create a loop that iterates over the longer length of the two 

//loop over both number from the the end 
for(let i = longer.length-1; i > 0; i--) {
  sum = parseInt(longer[i]) +  parseInt(shorter[i])
  sum.toString()
  if(sum > 9) 
   sum[1] .concat(total)
  //how to handle tens column  
} else {
    sum.concat(total)
}


// add both values in that element place
//if the number is larger than two digit number carry over the first digit 
//push the second digit into the return string 
//return the string 


}

