const transpose = function(matrix) {
    // Put your solution here
    //output holds our transposed array to return back 
    let output = [];
    //get length of inner array
    let innerLength = matrix[0].length;
    //get length of outer array
    let outerLength = matrix.length;
    //loop through inner array of matrix
    for (let inner = 0; inner < innerLength; inner++){
      //loop through outer array of matrix
      let rowTransposeArray = [];
      for (let outer = 0; outer < outerLength; outer++) {
        //push the value in each row of matrix into rowTransposeArray
        rowTransposeArray.push(matrix[outer][inner]);
      }
      output.push(rowTransposeArray);
    }
    return output;
  };

const checkArray = function(array, word) {
    for (const l of array) {
        if (l.includes(word)) return true;
    }
    return false;
};

const wordSearch = (letters, word) => { 
    //return false if empty array is passed in
    if (letters.length === 0) return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    let verticalJoin = transpose(letters);
    verticalJoin = verticalJoin.map(ls => ls.join(''));
    //The includes() method determines whether an array 
    //includes a certain value among its entries, returning true or false as appropriate. 
    if (checkArray(horizontalJoin, word)) return true;
    if (checkArray(verticalJoin, word)) return true;
    return false;
};

wordSearch([
    ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'A', 'F', 'E', 'L', 'D'],
    ['Y', 'N', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'F', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'I', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'S', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SENFIELDS')

module.exports = wordSearch