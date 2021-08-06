function AddingTwoNumbers(){
    let firstNumber = document.getElementById("firstNumber").value;

    let secondNumber = document.getElementById("secondNumber").value;
    
    let answer = parseFloat(firstNumber) + parseFloat(secondNumber);

    document.getElementById("result").value = answer;
}


