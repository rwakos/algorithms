/*
* INVERSE PYRAMID
* Iterative decrement, O(n2)
* */

function invPyramidIter(n) {
    let inv_pyramid = [];
    for (let row = n; row > 0 ; row--){
        let result = '';
        for (let col = n; col>0; col--){
            if (col >= row){
                result = "#" + result;
            } else {
                result = " " + result;
            }
        }
        console.log(result);
        inv_pyramid.push(result);
    }

    return inv_pyramid;
}

module.exports = invPyramidIter;