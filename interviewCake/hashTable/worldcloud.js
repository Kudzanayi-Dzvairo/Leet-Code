// function isLetter(character){
//     return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0
// }

// function splitWords(inputString){

//     const words = [];

//     let currentWordStartIndex = 0;
//     let currentWordLength = 0 

//     for(let i = 0; i < inputString.length; i++){
//         const character = inputString[i]

//         if(isLetter(character)){
//             if(currentWordLength === 0){
//                 currentWordStartIndex = i;
//             }
//             currentWordLength += 1
//         } else {
//             const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength)
//             words.push(word)
//             currentWordLength = 0
//         }
//     }

//     return words 
// }

// const wordsToCounts = new Map()

// function addWordToMap(word){
//     if(wordsToCounts.has(word)){
//         wordsToCounts.set(word, wordsToCounts.get(word) + 1)
//     } else {
//         wordsToCounts.set(word, 1)
//     }
// }

class WordCloudData {
    constructor(inputString){
        this.wordToCounts = new Map()
        this.populateWordsToCounts(inputString)
    }

    populateWordsToCounts(inputString){

        //iterats over each character in the input string, splitting
        //words and passing them to this.addWordToMap()

        let currentWordStartIndex = 0;
        let currentWordLength = 0;

        for(let i = 0; i < inputString.length; i++){

            const character = inputString.char(i)

            //If we reached the end of the string we check if the last
            //character is a letter and add the last word to our map
            if(i === inputString.length - 1){
                if(this.isLetter(character)){
                    currentWordLength += 1
                }
                if(currentWordLength > 0){
                    const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength)
                    this.addWordToMap(word)
                }
            } else if(character === ' ' || character === '\u2014'){
                if(currentWordLength > 0){
                    const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength)
                    this.addWordToMap(word)
                    currentWordLength = 0
                }

                //we want to make sure we split on ellipses so if we get two periods in 
                //a row we add the current word to our map and reset our current word
               }else if(character === '.'){
                   if(i< inputString.length -1 && inputString.charAt(i +1) === '.'){
                    if(currentWordLength > 0){
                        const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength)
                        this.addWordToMap(word)
                        currentWordLength = 0
                    }
                   }

                  //If the character is a letter ot an apostrophe we add it to our current word  
               }else if(this.isLetter(character) || character === '\''){
                   if(currentWordLength === 0){
                       currentWordLengthStartIndex = i 
                   }
                   currentWordLength += 1

                   //if the character is a hypen, we want to check if it's surrounded by letters
                   //if it  is, we add it our current word
               } else if(character === '-'){
                   if(i > 0 && this.letter(inputString.charAt(i - 1) && this.letter(inputString.charAt(i + 1))){
                       if(currentWordLength === 0) {
                           currentWordStartIndex = i
                       }
                       currentWordLength += 1
                   }else {
                       if(currentWordLength > 0 ){
                           const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength)
                           this.addWordToMap(word)
                           currentWordLength = 0
                       }
                   }
               }
            }
        }


        addWordToMap(word){
            let newCount

            //if the word is already in the map we increment its count
            if(this.wordsToCounts.has(word)){
                newCount = this.WordsToCounts.get(word) + 1
                this.wordsToCounts.set(word, newCount)

                //If a lowercase version is in the map, we know our inout word must be uppercase
                //but we only include uppercase words if they're always uppercase
                //so we just increment the lowercase versions count
            } else if(this.wordsToCounts.has(word.toLowerCase())){
                newCount = this.wordsToCounts.get(word.toLowerCase()) + 1
                this.wordsToCounts.set(word.toLowerCase(), newCount);

                //If an uppercase version is in the map, we know our input words must be lowercsase.
                //since we only incluse uppercase words if they're always upperse, we add the lowercase versions and give it uppercase version's count 
            } else if(this.wordsToCounts.has(this.capitalize(word))){
                newCount = this.wordsToCounts.get(this.capitalize(word)) + 1
                this.wordsToCounts.set(word, newCount);
                this.wordToCounts.delete(this.capitalize(word))

                //otherwsie, the word is not in the map at all, lowercase or uppercase
                //so we add it to the map
            } else{
                this.wordsToCounts.set(word, 1)
            }
        }

        capitalize(word){
            return word.charAt(0).toUpperCase() + word.slice(1)
        }

        isLetter(caracter){
            return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0
        }


    }
