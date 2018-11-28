function findOdd(A) {
  // Given an array, find the int that appears an odd number of times.
  // There will always be only one integer that appears an odd number of times.
  var numbers = [];
  A.forEach(element => {
      let found = 0;
      numbers.forEach(number => {
          if(number == element) {
              numbers[number]++;
              found = 1;
          }
      })
      if (found == 0) numbers.push(element);
  });
  return oddNumber;
}

console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));