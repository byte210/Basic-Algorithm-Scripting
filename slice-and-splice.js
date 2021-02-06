function frankenSplice(arr1, arr2, n) {
  var copy = [...arr2];
  copy.splice(n, 0, ...arr1);
  console.log(copy);
  return copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);