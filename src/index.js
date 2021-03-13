
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof(matrix) == 'object' && matrix.length > 0){

    let result = [];

    for(let i = 0; i < matrix.length; i++){

      if(i % 2 == 1 || i == 1){
        result = result.concat(matrix[i].reverse());
      }else{
        result = result.concat(matrix[i]);
      }

    }

    return result;
    
  }else{
    return [];
  }

}
