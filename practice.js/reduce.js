const people = [
    {id:"1", name:"Farai", age: 35},
    {id:"2", name:"Rutendo", age: 30},
    {id:"3", name:"Oswald", age: 39}
]

let result; 
//count 

result = people.reduce((acc, person) => acc +  1 , 0)

//sum ages 

result = people.reduce((acc, person) => acc + person.age ,0)

//array of names (map)

result = people.reduce((acc, person) => [...acc, person.name]  ,[])

//convert to id => person lookup (dict)

result = people.reduce((acc, person) => {
    return {...acc, [person.id]: person}
} ,{})

//max age 

result = people.reduce((acc, person) => {{
    if(acc === null || person.age > acc) return person.age
    return acc
}}, null)


//find by name 

result = people.reduce((acc, person) => {
    if (acc !== null) return acc;
    if (person.name === 'Oswald') return person
    return null;
}, null)

//all over 18 

result = people.reduce((acc, person) => {
    if(!acc) return false
    return person.age > 18
}, true)

// result if over 18

result = people.reduce((acc, person) => {
    if(acc) return true
    return person.age > 40
}, false)


//count occurences

const orders = [
    {id:"1", status: "pending"},
    {id:"2", status: "cancelled"},
    {id:"3", status: "pending"},
    {id:"4", status: "shipped"},
 
]


result = orders.reduce((acc, order) => {
    return{...acc, [order.status]:(acc[order.status] || 0) + 1}
}, {})

console.log(result)


//implement a reduce 

function reduce(array, callback, initial){

    acc = initial 

    for(let i = 0; i < array.length; i++){
        acc = callback(acc, array[i], i, array)
    }

    return acc
}