function largestOfFour(arr) {
  let numbers = [];
  for(let i=0; i<arr.length; i++){
    numbers.push(arr[i].sort((a, b) => a - b).reverse());
  }
  let sorted = [];
  for(let i=0; i<numbers.length; i++){
    sorted.push(numbers[i][0]);
  }
  return sorted;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);