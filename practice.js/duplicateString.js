function removeDuplicate(str){

    let split = str.split(' ')

    for(let i = 0; i < split.length; i++){
        if(split[i] === split[i-1]){
            split.splice(i,1)
        }
    }
  
    console.log(split)

  return split.join(' ')
}


console.log(removeDuplicate('This is is a test test string'))