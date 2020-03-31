// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("got user")
//         // resolve({user: 'K'})
//         reject(new Error('mutombo'))
//     }, 2000)
// })



// promise.then(user => {
//     console.log(user)
// }).catch(err => console.log(err.name))

console.log('start')

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('now we have the data')
            resolve({userEmail: email})
        }, 3000)
    })
}

function getUserVideos(email){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"])
        }, 1000)
    })
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of video")
        }, 2000)
    })
}

// loginUser('kdzvairo@gmail.com', 'dhodhi')
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[1]))
// .then(detail => console.log(detail))

// const user = login('kdzvairo@gmail.com', 'dhodhi')
// const videos = videoDetails(user.email)

//Promise.all 

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("geeting from youtube")
        resolve({video: [1,2,3,4,5]})
    }, 2000)
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("stuff from fb")
        resolve({user: "Name"})
    }, 2000)
})

// Promise.all([yt, fb])
// .then(result => console.log(result))


async function displayUser(){
    try{
    const loggedUSer = await loginUser('ed', 12434)
    const videos = await getUserVideos(loggedUSer.userEmail)
    const details = await videoDetails(video[1])
    console.log(details)
    }catch(err){
        console.log(err.name)
    }
}

displayUser()