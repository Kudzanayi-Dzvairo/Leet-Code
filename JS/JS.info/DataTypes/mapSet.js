//Map 

let map = new Map()

map.set('1', 'str1') //a string key
map.set(1, 'num1') //a numeric key
map.set(true, 'bool1') //a boolean key 

// remember the regular object converts keys to strings
// map keeps type, so these two are different 

console.log(map.get(1)) //num1
console.log(map.get('1'))// string1 

//map.set returns map so set calls can be chained 

map.set('1', 'str1')
.set(1, 'num1')
.set(true, 'bool1')

//Iteration over map 

let recipeMap = new Map ([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
])

// console.log(recipeMap.get('cucumber'))

//iterate over keys(vegatables)
for(let vegetable of recipeMap.keys()){
    console.log(vegetable)
}

//iterate over values(amounts)
for(let amount of recipeMap.values()){
    console.log(amount)
}

//iterate over keys and values 
for(let entry of recipeMap){
    console.log(entry)
}

//map comes with forEach method
recipeMap.forEach((value, key, map) =>{
    console.log(`${key}: ${value}`)
})

//create map from object using Object.entries 

let obj = {
    name: "John",
    age: 30
  };

  let map3 =  new Map(Object.entries(obj))

//create object from Map using Object.fromEntries

let map1 = new Map()
map1.set('banana', 1)
.set('orange', 2)
.set('apple', 3)

// let obj2 = Object.fromEntries(map.entries())

// console.log(obj2)

//SET

let set = new Set()

let john = {name: "john"}
let mary = {name: "mary"}
let pete = {name: "pete"}
let jack = {name: "jack"}

set.add(john)
set.add(mary)
set.add(john)
set.add(jack)
set.add(pete)

console.log(set.size)

for(let user of set){
    console.log(user)
}