let num1;
let num2;
let code;
let displayValue;

$(document).ready(function() {
    $("button").click(function() {
        $("button").css("outline", "0");
        $(this).css("outline", "2px solid #0099FF");
    });

    $(".num").click(function() {
        if(code === "=" && num1 !== undefined) {
            num1 = undefined;
            num2 = undefined;
            code = undefined;
            displayValue = undefined;
        }

        if(num1 === undefined ) {
            num1 = $(this).val();
        } else if(code === undefined) {
            num1 += $(this).val();
        } else if(num2 === undefined) {
            num2 = $(this).val();
        } else {
            num2 += $(this).val();
        }
        displayNumber($(this).val());
    });

    $(".code").click(function() {
        if(num1 !== undefined && num2 !== undefined) {
            calculate($(this).val());
            code = $(this).val();
        } else {
            code = $(this).val();
            displayCode($(this).val());
        }
    });
    $("#allClear").click(function() {
        num1 = undefined;
        num2 = undefined;
        code = undefined;
        displayValue = undefined;
        $("#display").text("0");
    });

    function displayNumber(value) {
        if(displayValue === undefined) {
            displayValue = value;
        } else {
            displayValue += value;
        }
        $("#display").text(displayValue);
    }

    function displayCode(value) {
        if(displayValue === undefined || value === "=") {
            return;
        } else {
            displayValue += value;
        }
        $("#display").text(displayValue);
    }

    function calculate(value) {
        let result;
        switch(code) {
            case "+":
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case "-":
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case "*":
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case "/":
                result = parseFloat(num1) / parseFloat(num2);
                break;
            default:
                break;
        }
        result = Math.round(result * 100000) / 100000;
        num1 = String(result);
        num2 = undefined;
        if(value !== "=") {
            $("#display").text(result + value);
            displayValue = num1 + value;
        } else {
            $("#display").text(result);
            displayValue = num1;
        }
    }
});