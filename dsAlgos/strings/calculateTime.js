var calculateTime = function(keyboard, time){

    let map = {}
    let ans = 0 
    let index = 0 

    for(let i = 0; i < keyboard.length; i++) {
        map[keyboard[i]] = i
    }

    for(let char of word) {
        let curIndex = keys[char]
        ans += Math.abs(curIndex - index)
        index = curIndex
    }

    return ans
}