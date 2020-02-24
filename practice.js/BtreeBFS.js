function dfs(rootnode){

    if(!rootnode){
        return 
    }

    let queue = []
    queue.push(rootnode)

    while(queue.length > 0){
        currentNode = queue[0]
    }

        if(currentNode.left !== null){
            queue.push(currentNode.left)
        }

        if(currentNode.right !==null){
            queue.push(currentNode.right)
        }

    queue.shift
    
}


function dfs2(rootnode){
    let currentNode = rootnode
    let queue = []
    let list = []

    queue.push(currentNode)

    while(queue.length > 0){
        currentNode = queue.shift()
        list.push(currentNode)

        if(currentNode.left){
            queue.push(currentNode.left)
        }

        if(currentNode.right){
            queue.push(currentNode.right)
        }
    
    }
    return list
}