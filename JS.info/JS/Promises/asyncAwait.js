//async
async function f(){
    return 1
}

//aync always returns a promise implicitilly or explicitlly 
async function x(){
    return 1
}

x().then(alert) //1

async function y(){
    return new Promise.resolve(1)
}

y().then(alert) //1

//await
let value = await promise 

async function k() {
     
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    })

    let result = await promise //wait until promise resolves

    alert(result) //done!
}

k()

//example of before an after 

//make request for user.json
fetch('/article/promise-chaining/user.json')
// Load it as json
.then(response => response.json())
//Make request to Github
.then(user => fetch(`https://api.github.com/users/${user.name}`))
//Load the respnse as json
.then(response => response.json())
//Show the avatar image (githubUser.avatart_url)
.then(githubUser => {
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    img.className = 'promise-avatar-example'
    document.body.append(img)

    setTimeout(() => {
        img.remove()
        resolve(githubUser)
    }, 3000)
})

//with async 

async function showAvatar(){

    //read our JSON 
    let response = await fetch('/article/promise-chaining/user.json')
    let user = await response.json();

    //read github user 
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
    let githubUser = await githubResponse.json()

    //show the avatar 
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    img.className = "promise-avatar-example"
    document.body.append(img)

    await new Promise((resolve, reject) => setTimeout(resolve, 3000))

    img.remove()

    return githubUser
}

showAvatar()

