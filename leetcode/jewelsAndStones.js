var numJewelsInStones = function(J, S) {
    
   let count = 0 
   
   for(let i = 0; i < J.length; i++){
       for(let j = 0; j < S.length; j++){
           if(J[i] === S[j]){
               count += 1
           }
       }   
   }
    return count 
};

const numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};