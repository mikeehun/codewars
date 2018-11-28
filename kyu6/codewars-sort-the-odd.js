'use strict';

function sortArray(array) {
  // Return a sorted array.

  // first check if it's and empty array
  if(array.length!=0) { 
    // then extract the evens and zeros
    let evensAndZeros = [];
    let final = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element%2==0 || element==0) {
          evensAndZeros.push([i,element]);
        }
        else {
          final.push(element);
        }
    }
    
    final.sort(function(a,b){
      return a > b ? 1 : -1;
    });

    evensAndZeros.forEach(element => {
      final.splice(element[0], 0, element[1])
    });
    
    return final;
  }
  else {
    return array;
  }
}

console.log('final');
console.log(sortArray([1, 1, 11, 11, 2, 111, 5, 0]));
console.log('expected \n [1, 1, 5, 11, 2, 11, 111, 0]');