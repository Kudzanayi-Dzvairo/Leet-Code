let promise  = Promise.all([..promises...])

//Promise.all below settles after 3 seconds and its result is an array

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), //1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), //2
    new Promise(resolve => setTimeout(() => resolve(3)), 1000) //3
]).then(alert); // 1,2,3 each promise contributes an array member

//another way to fetch an array of urls 

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
]

//map every url to the promise of the fetch 
let requests = urls.map(url => fetch(url))

//Promise.all waits until jobs are resolved
Promise.all(requests)
.then(responses => responses.forEach {
    response => alert(`${response.url}: ${response.status}`)
})

//immediate rejection is one promise fails 

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
    new Promise((resolve, reject) => setTimeout(() => reject(new Error ('Mutombo')), 2000))
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert)//Error: Mutombo

//Promise.all Settled
Promise.all([
    fetch('html')
    fetch('css')
    fetch('json')
]).then(render) //render method needs results of all fetches 

//e.g 
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
]

Promise.allSettled(urls.map(url => fetch(url)))
.then(results => { // (*)
    results.forEach((result, num)=> {
        if(result.status === "fulfilled") {
            alert(`${urls[num]}: ${result.value.status}`)
        }
        if(result.status === "rejected"){
            alert(`${urls[num]}: ${result.reason}`)
        }
    })
})

//results will be 
[
    {status: 'fulfilled', value: ...response...},
    {status: 'fulfilled', value: ...response...},
    {status: 'rejected', reason: ...error object...}
  ]

// Promise.race 

let promise = Promise.race(iterable)

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
    new Promise((resolve, reject) => setTimeout(() => reject(new Error ('Mutombo')), 2000))
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); //1