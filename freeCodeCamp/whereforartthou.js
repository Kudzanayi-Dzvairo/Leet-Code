function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    let srcKeys = Object.keys(source)

    //filter the collection
    return collection.filter( obj => {
        for (let i = 0; i < srcKeys.length; i++){
            if(
                !obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ){
                return false;
            }
        }
        return true
    })

    console.log(srcKeys)
  }

  function whatIsInAName2(collection, source){

    let srcKeys = Object.keys(source)

    return collection.filter( obj => {
        return srcKeys.every( key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        })
    })

  }

  function whatIsInAName3(collection, source){

    var srcKeys = Object.keys(source)

    return collection.filter( obj => {
        return srcKeys
        .map(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        })
        .reduce((a,b) =>{
            return a && b
        })
    })
  }

  function where(collection, source){
      //takes larger input colection and compares it with the selection needed aka source
      var arr = collection.filter(item => {
          //use filter and return true value;
          for(var i in source){
              //check value in source and compare with item 
              if(source[i]!= item[i]){
                  //do not add if false
                  return false
              }
          }
          //add if true 
          return true
      })
  }
  
  // test here
  console.log(whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  ));