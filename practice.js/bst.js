class Node{
    constructor(value){
        this.right = null
        this.left = null
        this.value = value 
    }
}

class BST {
    constructor(){
        this.root = null
    }
}

insert(value){

    const newNode = new Node(value)

    if(!this.root){
        this.root = newNode
    }

    //start traversing from root
    currentNode = this.root

    while(currentNode){
        // if value is less then current Node go left
        if(value < currentNode){
        //if left node does not exist set new node to left node
            if{!current.left}{
            currentNode.left = newNode
            return this
            }
        //if left node does exist continue traversing down left
            currentNode.left = currentNode
    }
    // else go right
    else{
    //if right node does not exist set rigt node 
        if(!currentNode.right){
            current.right = newNode
            return this 
        }
    //else continue traversing down the right
        currentNode = currentNode.right
    }
  }
}

lookup(value){

    if(!this.root){
        return false
    }

    currentNode = this.root
    
    while(currentNode){
        if(value < currentNode.value){
            currentNode = currentNode.left
        }else if(value > currentNode.value){
            currentNode = currentNode.right
        }else if(currentNode.value = value){
            return currentNode
        }
    }
    return false

    
}
