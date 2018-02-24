module.exports = function check(str, bracketsConfig) {
  let arrOfBrackets = [];
  let flag;

  for (let i = 0; i < bracketsConfig.length; i++) {
      arrOfBrackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }
  
  do {
    flag = false;
    for (let j = 0; j < arrOfBrackets.length; j++) {
      if (str.indexOf(arrOfBrackets[j]) !== -1) {
        str = str.replace(arrOfBrackets[j], '');
        flag = true;
      }
    }
  }
  while ((str.length !== 0) && (flag !== false));

  return flag;
}
