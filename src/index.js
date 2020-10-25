module.exports = function reverse (n) {
  let massive = n.toString().split('');
  let negative = false;
  massive.forEach(element => {
      if (element === '-'){
          negative = true;
          
      }
  });
  if(negative){
      return Math.sign(1)*parseInt(massive.reverse().join(''));
  }
  else{
      return parseInt(massive.reverse().join(''));
  }
}
