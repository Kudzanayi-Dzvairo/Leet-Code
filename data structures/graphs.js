//Edge List 

const graph = [[0,2], [2,3], [2,1], [1,3]]

//Adjancent List

const graph = [[2], [2,3], [0,1,3], [1,2]]

//Adajcent Matrix

const graph = [ 
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,0],
    [0,1,1,0],
]

class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList ={};
    }

    addVertex(node){
        this.adjacentList[node] = []
        this.numberOfNodes++
    }

    addEdge(node1, node2){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }

    showConnections(){

    }
}