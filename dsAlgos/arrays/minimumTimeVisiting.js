/* On a plane there are n points with integer coordinates points[i] = [xi, yi]. 
Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally 
(it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array */

var minTimeToVisitAllPoints = function(points) {
    
    let sec = 0;
    for(let i = 0; i < points.length - 1; i++){
        const curr= points[i], next = points[i + 1];
        // console.log(curr)
        // Calculate the distances between current point and previous point for each axis
        const distance = [next[0] - curr[0], next[1] - curr[1]]
        console.log(distance)
        sec += Math.max(Math.abs(distance[0]), Math.abs(distance[1]))
        console.log(sec)
       
    }
    return sec;
}


console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))