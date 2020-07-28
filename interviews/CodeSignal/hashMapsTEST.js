Input:
queryType:
["insert", 
 "insert", 
 "addToKey", 
 "addToKey", 
 "addToKey", 
 "insert", 
 "addToValue", 
 "addToKey", 
 "addToKey", 
 "get"]
query:
[[-5,-2], 
 [2,4], 
 [-1], 
 [-3], 
 [1], 
 [3,-2], 
 [-4], 
 [-2], 
 [2], 
 [-8]]
Expected Output:
-6


queryType:
["insert", 
 "insert", 
 "addToValue", 
 "addToKey", 
 "get"]
query:
[[1,2], 
 [2,3], 
 [2], 
 [1], 
 [3]]
Expected Output:
5

Input:
queryType:
["insert", 
 "addToValue", 
 "get", 
 "insert", 
 "addToKey", 
 "addToValue", 
 "get"]
query:
[[1,2], 
 [2], 
 [1], 
 [2,3], 
 [1], 
 [-1], 
 [3]]
Expected Output:
6


queryType:
["addToValue", 
 "addToValue", 
 "insert", 
 "get", 
 "addToKey", 
 "insert", 
 "insert", 
 "insert", 
 "addToValue", 
 "addToKey"]
query:
[[-5], 
 [3], 
 [3,-3], 
 [3], 
 [0], 
 [-4,2], 
 [0,-3], 
 [-2,4], 
 [2], 
 [2]]
Expected Output:
-3