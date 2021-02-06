function mutation(arr) {
  let arr1 = arr[0].toLowerCase(); //target
  let arr2 = arr[1].toLowerCase(); //test

  for(let i=0; i<arr2.length; i++){
    if (arr1.indexOf(arr2[i]) < 0){
      return false;
    }
  }
  return true;
  // console.log(arr1.localeCompare(arr2))
  // if(arr1.localeCompare(arr2) === -1){
  //   return false;
  // } 
  // return true;
}

console.log(mutation(["hello", "hey"]));
