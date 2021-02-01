function confirmEnding(str, target) {
  //zrobić array z str;
  //złapać target.length liter z końca array ze str i zwrócić porównanie
  let arr = str.split('')
  let arr2 = target.split('')
  let check = arr.slice(arr.length-arr2.length);
  check = check.join('');
  return check === target;
  
}

confirmEnding("Bastian", "n");