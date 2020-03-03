//arr.splice 
//delete element

let arr1 = ['I', 'study', 'Javascript']

arr1.splice(1,1); //remove from index 1 remove 1 element 

console.log(arr1); // ["I", "Javascript"]

//delete and replace elements 

let arr2 = ['I', 'study', 'Javascript', 'right', 'now']

//remove 3 first elements and replace them with two others

arr2.splice(0,3, 'Let', 'dance')

console.log(arr2)// ['Let', 'dance','right','now']

//splice returns removed elements 

let removed = arr1.splice(0,2)
console.log(removed) // 'I', study 

//splice allows you to insert with no removals, just set delete count to 0 

let arr4 = ["i", "study", "javascript"]

//from index 2 
//delete 0 
//then insert "complex" and "language" 
arr4.splice(2,0,"complex", "language")
console.log(arr4) // ["i", "study","complex", "language" "javascript"]

//negative indices 

let arr3 = [1,2,5]

//from index -1(one step fromt he end)
//delete 0 elements 
//then insert 3,4
arr3.splice(-1,0,3,4)

console.log(arr3); //1,2,3,4,5

//.SLICE()
 let arrSlice = ['t','e','s','t']

 console.log(arrSlice.slice(1,3)) // e,s (copy from 1,3)
 console.log(arrSlice.slice(-2)) // s,t (copy from -2 to end)

 arrSlice.slice() //creates copy of the array

 //.CONCAT

 let arrConcat = [1,2]

 //create an array from: arr and [3,4]
 console.log(arrConcat.concat([3,4]))

 //create an array from: arr and [3,4] and [5,6]
 console.log(arrConcat.concat([3,4], [5,6]))
 
 //create an array from: arr and [3,4] and values 5 and 6
 console.log(arrConcat.concat([3,4], 5, 6))

//.forEach

// arr.ForEach(function(item,index,array){
//     //...do something with item
// })


//.indexOf, .lastIndexOf, .includes 

let arrIndexOf = [1, 0 , false]

console.log(arrIndexOf.indexOf(0)) //1
console.log(arrIndexOf.indexOf(false)) //2
console.log(arrIndexOf.indexOf(null)) //-1


//arr.find 

let users = [
    {id:1, name: 'john'},
    {id:12, name: 'mary'},
    {id:14, name: 'peter'}
]

let user = users.find( item => item.id === 1)

console.log(user.name) // John


//filter

let usersFilter = [
    {id:1, name: 'john'},
    {id:12, name: 'mary'},
    {id:14, name: 'peter'}
]

//returns an array of all mathing elements 
let someUser = usersFilter.filter( item => item.id > 1)

console.log(someUser.length) // 2

//.MAP 

        // let result = arr.map(function(item, index, array) {
        //     //returns new value instead of item 
        // })

//split

let names = 'Bilbo, Gandalf, Nazgul'

let arrSplit = names.split(', ')

for(let name of arrSplit){
    console.log(`A message to ${name}`)
}