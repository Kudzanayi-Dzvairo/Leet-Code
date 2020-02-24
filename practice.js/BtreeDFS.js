function preOrder(node){

    if(node == null){
        return 
    }

    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
}

function inOrder(node){

    if(node == null){
        return 
    }

    inorder(node.left)
    console.log(node.data)
    inorder(node.right)
}

function postOrder(){
    
    if(node == null){
        return 
    }

    postOrder(node.left)
    postOrder(node.right)
    console.log(data)


}