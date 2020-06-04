function plus (){
  let number1,number2,result;
  number1 = document.getElementById('n1').value;
  number1 = parseInt(number1);

  number2 = document.getElementById('n2').value;
  number2 = parseInt(number2);

  result = number1 + numder2;
  document.getElementById('out').innerHTML = result;
}
