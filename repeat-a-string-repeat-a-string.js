function repeatStringNumTimes(str, num) {
  let string = '';
  if (num<0){
    return '';
  } else {
    for(let i=0; i<num; i++){
      string+=str;
    }
    console.log(string);
  }
  return string;
}

repeatStringNumTimes("abc", 3);