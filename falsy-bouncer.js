function bouncer(arr) {
  const falsy = [false, null, 0, "", undefined, NaN];
  const result = arr.filter(i => i != false && i != null && i != 0 && i != "" && i != undefined && !Number.isNaN(i));
  console.log(result)
  return result;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);