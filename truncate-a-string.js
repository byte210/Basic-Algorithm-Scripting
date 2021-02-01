function truncateString(str, num) {
  let string; 
  let result;
  if(str.length === num | str.length < num){
    return str;
  } else {
    string = str.split('').slice(0, num);
  }
  if(string[string.length-1] === ' ' | string[string.length-1] === '-'){
    string.pop();
    string.push('...');
  } else{
    string.push('...');
  }
  result = string.join('');
  console.log(result)
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);