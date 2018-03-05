/*
* Pyramid  >> O(n~2)
* */
/*
Iterative

function pyramid(n){
    const result = [];
    const num_cols = ((n - 1) * 2) + 1;

    //Just to create an array and work with ES5+ ....
    const rows = Array(n).fill().map((x,i)=>i);
    const cols = Array(num_cols).fill().map((x,i)=>i);

    for (let row of rows){
        let line = '';
        let blank = (n - row - 1);

        for (let col of cols){
            let char = ((col < blank)^(col >= (cols.length-blank))) ? ' ' : 'X';
            line += char;
        }
        result.push(line);
        console.log(line);
    }

    return result;
}
*/

//Recursive

function pyramid(n, row = 0, line=''){
    //console.log("n: "+n+" row:"+row);
    const cols = ((n - 1) * 2) + 1;
    const blank = (n - row - 1);

    if (row === n){
        return;  //The end...
    }

    if (line.length === cols)
    {
        console.log(line);
        return pyramid(n, row + 1);
    }
    let pos = line.length;
    let char = ((pos < blank)^(pos >= cols-blank)) ? ' ' : 'X';

    pyramid(n, row, line+char);
}

//pyramid(2);

module.exports = pyramid;