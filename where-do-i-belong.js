function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a,b)=>a-b);
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
console.log(getIndexToIns([2, 20, 10], 19))