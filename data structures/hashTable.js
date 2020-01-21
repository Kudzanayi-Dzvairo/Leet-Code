class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash 
    }

    set(key, value){
        // set address to number returned by hash function
        let address = this._hash(key)
        //check if data does not exist
        if(!this.data[address]){
        //if it does not exist add that data
            this.data[address] = [];
            this.data[address].push([key, value])
        } 
          this.data[address].push([key, value])
          return this.data
        }

        get(key){
            let address = this._hash(key)
            const currentBucket = this.data[address]
            if(currentBucket){
                for(let i; i < currentBucket.length; i++){
                    if(currentBucket[i][0] === key){
                        return currentBucket[i][1]
                    }
                }
            }
            return undefined 
        }
    }


const myHashTable = new HashTable(50)
myHashTable.set('banana', 10000)
myHashTable.get('grapes')