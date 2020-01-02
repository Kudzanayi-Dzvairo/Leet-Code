function reverseString(str) {

    return str.split('').reverse().join('');
  }
  
  reverseString("hello");
  

  function reverseString(str) {

    str = str.split('')
    let newStr = []
  
    for(let i=0; i < str.length; i++){
      newStr.unshift(str[i])
    }
     
    
    return newStr.join('')
  }
  
  reverseString("hello");