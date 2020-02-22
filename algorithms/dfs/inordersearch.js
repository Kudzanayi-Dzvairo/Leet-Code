function inordersearch(node){

    if(node !== null) {
        inodersearch(node.left)
        console.log(node.data)
        inordersearch(node.right)
    }

}

  