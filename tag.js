function AddingTwoNumbers(){
    let firstNumber = document.getElementById("firstNumber").value;

    let secondNumber = document.getElementById("secondNumber").value;

    let thirdNumber = document.getElementById("thirdNumber").value;
    
    let answer = parseFloat(firstNumber) * parseFloat(secondNumber) * parseFloat(thirdNumber);

    document.getElementById("result").value = answer;
}


