//Async code example

console.log('start')

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log('now we have the data')
        callback({userEmail: email})
    }, 3000)
}

function getUserVideos(email, callback){
    setTimeout(() => {
        callback(["video1", "video2", "video3"])
    }, 1000)
}

function videoDetails(video, callback){
    setTimeout(() => {
        callback("title of video")
    }, 2000)
}




const user = loginUser("kdzvairo@gmail.com", 12345, (user) =>{
     console.log(user.userEmail);
     getUserVideos(user.userEmail, video => {
         console.log(video);
         videoDetails(video[1], title => {
               console.log(title)
         })
     })
})








console.log('end')