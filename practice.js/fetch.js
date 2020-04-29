async function fetchPractice(url){

    let response = await fetch(url)
    let data = await response.json
    let img = await data.img
    
    return{
        img
    }
}
