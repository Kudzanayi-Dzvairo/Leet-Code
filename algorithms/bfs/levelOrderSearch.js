function levelOrderSearch(rootNode){
    //Check that a node exists
    if(rootNode === null){
        return
    }

    //create queue and add root node to it 
    let queue = [];
    queue.push(rootNode)

    //continue searching through queue as long as its not empty
    while(queue.length > 0) {
    //create current node reference at the top of the queue
        let currentNode = queue[0]
    }

    //if currentNode has a left child node, add it to the queue
    if(currentNode.left !== null){
        queue.push(currentNode.left)
    }

    //if currentNode has a right child node. add it to the queue
    if(currentNode.right !== null){
        queue.push(currentNode.right)
    }

    //remove currentNode from the queue
    queue.shift()

    //continue looping till queue is empty
}