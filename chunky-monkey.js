function chunkArrayInGroups(arr, size) {
  var copy = [];
  while (arr.length > 0){
    copy.push(arr.splice(0,size));
  }
  console.log(copy);
  // copy.push(arr.slice(0, size))
  // copy.push(arr.slice(size));
  return copy;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);