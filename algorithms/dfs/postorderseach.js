function postordersearch (node){

    if(node !== null){
        postordersearch(node.left)
        postordersearch(node.right)
        console.log(node.data)
    }
}