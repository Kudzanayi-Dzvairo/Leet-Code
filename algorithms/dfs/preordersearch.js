function preorderSearch(node){

    if(node !== null){
        console.log(node.data)
    preorderSearch(node.left)
    preorderSearch(node.right)
}
    }

   

