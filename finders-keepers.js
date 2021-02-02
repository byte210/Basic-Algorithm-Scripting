function findElement(arr, func) {
  let i=0;
  while(func(arr[i]) != true){
    i++;
  }
  return arr[i];
  //SPRÓBUJ ROZWIĄZAĆ PRZEZ DO WHILE
  // let num = 0;
  // return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);