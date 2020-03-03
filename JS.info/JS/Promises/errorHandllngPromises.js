fetch(url)
.then(response => respnse.json())
.catch(err => alert(err)) //TypeError: failed to fetch 


//.catch as a safegurd 

fetch(url)
.then(response => response.json())
.then(user => fetch(url2))
.then(respnose => response.json())
.then(reponse => {
    //more code 
})
.catch(error => alert(error.message))

//implicit try and catch of a promise 

new Promise((resolve, reject) => {
    reject(new Error('Mutombo'))
}).catch(alert)// Error: Mutombo

new Promise((resolve, reject) => {
    resolve('ok');
}).then((result) => {
    throw new Error('Mutombo') //rejects promise 
}).catch(alert)// Error: Mutombo

new Promise((resolve, reject) => {
    resolve('okay')
}).then(result => {
    blabla() //no such function 
}).catch(alert) ReferenceError: blabla