var titleCase = (str) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, i => i.toUpperCase());

  // /(^|\s)\S/g grabs an element to be replaced (in this example - first letter of each word of the string tested)
  // i is the grabbed piece of string to be replaced by defined function which is i => i.toUpperCase()
}

titleCase("I'm a little tea pot");