class Node {
    constructor(value){
        this.left = null;
        this.right = null;  
        this.value = value
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        //create new Node
        const newNode = new Node(value)
        //if there is no root set root to new node
        if(this.root === null){
            this.root = newNode
        } else {
            //start traversing from root
            let currentNode = this.root;
            //continue to traverse while true
            while(true){
                //if the node is greater than that of the value go left
                if(value < currentNode.value){
                    //LEFT
                    //if there is no curentNode.left set new Node
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    // or set currentNode to currentNode.left and continue traversal
                    currentNode = currentNode.left
                } else {
                    //right
                    // see steps for left above
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }

    }
    lookup(value){
        //check if root is empty 
        if(!this.root){
            return false
        }
        //set currentNode to root
        let currentNode = this.root
        //while currentNode is true
        while(currentNode){
        //if value is less then currentNode
            if(value < currentNode.value){
                //go left
                currentNode = currentNode.left
        // if value is greater than currentNode
            } else if (value > currentNode.value){
                //go right
                currentNode = currentNode.right
        //if value is = to currentNode 
            } else if (currentNode.value === value){
                //return value 
                return currentNode 
            }
        }
        //if value does not exist, return value 
        return false
    }

    breadtFirstSearch(){
        let currentNode = this.root
        let list = []
        let queue = []

        queue.push(currentNode)

        while(queue.length > 0){
            currentNode = queue.shift()
            list.push(currentNode.value)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list
    }

   
}

const tree = new BinarySearchTree()

function traverse(node){
    const tree = {value: node.value}
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right)
    return tree;
}