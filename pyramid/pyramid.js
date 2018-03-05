/*
* Pyramid  >> O(n~2)
* */

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

module.exports = pyramid;