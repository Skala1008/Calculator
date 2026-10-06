
// constant declarations
console.log("Calculator JavaScript is working!");
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector("#clear");
const addbutton=document.querySelector("#add");
const subtractButton=document.querySelector("#subtract");
const multiplyButton=document.querySelector("#multiply");
const divideButton=document.querySelector("#divide");
const equalsButton=document.querySelector("#equals");
const deleteButton=document.querySelector("#delete");
const decimalButton=document.querySelector("#decimal");



let hasError = false;


function clearError() {
    if (hasError) {
        display.value = "";
        hasError = false;
    }
}
function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
}


function calculateExpression(expression) {                          //function to calculate the expression

    const numbers = expression.split(/[+\-*/]/);

    const nums = numbers.map(function (number) {
        return Number(number);
    });

    const operators = expression.match(/[+\-*/]/g);

    console.log(nums);
    console.log(operators);

    for (let i = 0; i < operators.length; i++) {

        const num1 = nums[i];
        const num2 = nums[i + 1];

        if (operators[i] === "*") {

            nums[i] = num1 * num2;

            nums.splice(i + 1, 1);
            operators.splice(i, 1);

            i--;

        } else if (operators[i] === "/") {

            if (num2 === 0) {
                display.value = "Error: Division by zero";
                hasError = true;
                return;
            }

            nums[i] = num1 / num2;

            nums.splice(i + 1, 1);
            operators.splice(i, 1);

            i--;
        }
    }

    for (let i = 0; i < operators.length; i++) {
        const num1 = nums[i];
        const num2 = nums[i + 1];
        if (operators[i] === "+") {
            nums[i] = num1 + num2;
            nums.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }else if (operators[i] === "-") {
            nums[i] = num1 - num2;
            nums.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }

    }
    return nums[0];
}


function addOperator(operator) {
    // addbutton → addOperator("+")
    // subtractButton → addOperator("-")
    // multiplyButton → addOperator("*")
    // divideButton → addOperator("/")

    if (display.value === "") {
        display.value = "";
        return;
    }
    if (isOperator(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + operator;
    }else {
        display.value = display.value + operator;
    }

}

// event listeners
numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        clearError();

        display.value = display.value + button.textContent;
    });
});


clearButton.addEventListener("click",function(){
    display.value = "";
    hasError = false;
});


addbutton.addEventListener("click",function(){
    clearError()
    addOperator("+")
    
  
});

subtractButton.addEventListener("click",function(){
    clearError()
    addOperator("-");
});


multiplyButton.addEventListener("click",function(){
    clearError()
    addOperator("*");
});


divideButton.addEventListener("click",function(){
    clearError()
    addOperator("/");
});


equalsButton.addEventListener("click",function(){
    const expression = display.value;
    const result = calculateExpression(expression);
    display.value = result;
    }
);

deleteButton.addEventListener("click",function(){
    display.value=display.value.slice(0,-1);
})

decimalButton.addEventListener("click",function(){
    if (!display.value.includes(".")) {
        display.value = display.value + ".";
    }
});
