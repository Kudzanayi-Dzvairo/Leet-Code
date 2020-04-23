
// function getTempertureUrl(urls) {
  
  // if(urls.length === 0){
    //    return
// }

// fetch(urls[0])
// .then(response => response.json())
// .catch((error) => {
  // 	urls.shift()
  // 	getTemperatureUrls(urls)
  // })
  
  
  // }

  // function getTemperatureUrl(urls) {
    
    // for(let i = 0; i < urls.length; i++){
      // fetch(urls[i])
      // .then(response => response.json())
      // .then(json => displayTemperatures(json))
      // .catch((error) => {
        // 	console.log(error)
        // })
        
        //    }
        
        // }
        
        // Interviewer notes:
        
        // getTemperatureURLs([A, B, C]) -> getting A fails
        // now we want B, and we have a way to get the first element in a url array
        // getTemperatureURLs([B, C]) -> getting B fails
        // getTemperatureURLs([C]) -> C fails
        
        // new Promise((resolve, reject) =>  {
          //   for (...) {
            //    … .then(res => res.json()).then(data => resolve(data))
            //   }
// });


You have an app which you need to have display the temperature:

getTemperatureUrl(urls).then(displayTemperature);

It turns out the temperature API can be flaky, so your product team comes up with a list of backup URLs. You are provided an array of URLs that is ordered from most accurate to least accurate:

    temperatureUrlArray = [
        “best-data.json”,
        "average-data.json" ,
        “worst-data.json”
    ];

Implement the function getTemperatureUrls, which takes an array of URLs (strings) and resolves the best temperature from the array of URLs.

urls = ['url/best', 'url/medium', 'url/short']

function getTemperatures(url){

  for(let i = 0; i <urls.length; i++){
    fetch(url[i])
    .then(response => response.json())
    .then(data => data)
  }
}