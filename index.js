function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = eval(num1)

    num2 = document.getElementById('n2').value;
    num2 = eval(num2)

    result = num1 + num2;
    document.getElementById('out').innerHTML = result.toFixed(1);
}

function minus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = eval(num1)

    num2 = document.getElementById('n2').value;
    num2 = eval(num2)

    result = num1 - num2;
    document.getElementById('out').innerHTML = result.toFixed(2);
}

function divide() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = eval(num1)

    num2 = document.getElementById('n2').value;
    num2 = eval(num2)

    result = num1 / num2;

    if (num2 != 0) {
        document.getElementById('out').innerHTML = result.toFixed(2);
    } else if(num2 === 0){
        
        document.getElementById('out').innerHTML = "нізя";
    }
}

function multiplicate() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = eval(num1)

    num2 = document.getElementById('n2').value;
    num2 = eval(num2)

    result = num1 * num2;
    document.getElementById('out').innerHTML = result.toFixed(2);
}
