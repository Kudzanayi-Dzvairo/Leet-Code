process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var museum = [];
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    inputRows = input.split('\n');
    museumRows = inputRows.slice(1, inputRows.length);
    [ rows, columns ] = inputRows[0].split(' ').map(dimension => parseInt(dimension));
    museum = [...Array(rows)].map(row => Array(columns));
    museumRows.forEach((museumRow) => {
        [rowIndex, columnIndex, room] = museumRow.split(' ');
        museum[parseInt(rowIndex)][parseInt(columnIndex)] = room;
    });
});

