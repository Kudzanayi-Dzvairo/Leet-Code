var rangeSumBST = function(root, L, R) {
    
    if(root === null){
        return 0
    }
    
    let res = 0;
    
    if(L <= root.val){
        res += root.val + rangeSumBST(root.left, L, R)
    }
    
    if(R >= root.val) {
        res += root.val + rangeSumBST(root.right, L,R)
    }
    
    return res - root.val
    
};

const rangeSumBST = (root, L, R) => {
    let sum = 0 
    
    const traverse = (root) => {
        if(root.val >= L && root.val <= R) sum += root.val;
        if(root.left !== null) traverse(root.left)
        if(root.right !== null) traverse(root.right)
    }

    traverse(root)
    return sum 
}