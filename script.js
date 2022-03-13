$(document).ready(function () {

    let screen = $("#calculator-screen");
    let buffer1 = 0;
    let buffer2 = 0;
    let activeOperator;
    let result = 0;

    $("#num1").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("1");
        } else {
            screen.val(value + "1");
        }
    });

    $("#num2").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("2");
        } else {
            screen.val(value + "2");
        }
    });

    $("#num3").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("3");
        } else {
            screen.val(value + "3");
        }
    });

    $("#num4").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("4");
        } else {
            screen.val(value + "4");
        }
    });

    $("#num5").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("5");
        } else {
            screen.val(value + "5");
        }
    });

    $("#num6").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("6");
        } else {
            screen.val(value + "6");
        }
    });

    $("#num7").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("7");
        } else {
            screen.val(value + "7");
        }
    });

    $("#num8").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("8");
        } else {
            screen.val(value + "8");
        }
    });

    $("#num9").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("9");
        } else {
            screen.val(value + "9");
        }
    });

    $("#num0").click(function () {
        let value = screen.val();

        if (value == 0) {
            screen.val("0");
        } else {
            screen.val(value + "0");
        }
    });

    $("#all-clear").click(function () {
        screen.val("0");
    });

    $("#decimal").click(function () {
        let value = screen.val();
        let lastElementofValue = value[value.length - 1];

        if (lastElementofValue != ".") {
            screen.val(value + ".");
        }
    });

    //OPERATIONS WITH +

    $("#operator-plus").click(function () {
        let value = screen.val();
        let lastElementofValue = value[value.length - 1];
        activeOperator = "+";
        buffer1 = value;

        switch (lastElementofValue) {
            case "-":
            case "×":
            case "/":
            case "+":
                break;
            default:
                screen.val(value + "+");
        }

    });

    //OPERATIONS WITH -

    $("#operator-minus").click(function () {
        let value = screen.val();
        let lastElementofValue = value[value.length - 1];
        activeOperator = "-";
        buffer1 = value;

        switch (lastElementofValue) {
            case "-":
            case "×":
            case "/":
            case "+":
                break;
            default:
                screen.val(value + "-");
        }

    });

    //OPERATIONS WITH ×

    $("#operator-times").click(function () {
        let value = screen.val();
        let lastElementofValue = value[value.length - 1];
        activeOperator = "×";
        buffer1 = value;

        switch (lastElementofValue) {
            case "-":
            case "×":
            case "/":
            case "+":
                break;
            default:
                screen.val(value + "×");
        }
    });

    //OPERATIONS WITH /

    $("#operator-divide").click(function () {
        let value = screen.val();
        let lastElementofValue = value[value.length - 1];
        activeOperator = "/";
        buffer1 = value;

        switch (lastElementofValue) {
            case "-":
            case "×":
            case "/":
            case "+":
                break;
            default:
                screen.val(value + "/");
        }
    });

    // CALCULATIONS BASED ON THE ACTIVE OPERATOR

    function getResult() {
        buffer1 = screen.val().split(activeOperator)[0];
        buffer2 = screen.val().split(activeOperator)[1];

        switch (activeOperator) {
            case "+":
                result = parseFloat(buffer1) + parseFloat(buffer2);
                break;
            case "-":
                result = parseFloat(buffer1) - parseFloat(buffer2);
                break;
            case "×":
                result = parseFloat(buffer1) * parseFloat(buffer2);
                break;
            case "/":
                result = parseFloat(buffer1) / parseFloat(buffer2);
                console.log(result);
                console.log(isNaN(result));
        }

        screen.val(result);

        if (screen.val().includes(".")) {

            let numOfDecimalPlaces = screen.val().split(".")[1];

            if (numOfDecimalPlaces.length > 10) {
                screen.val(result.toPrecision(10));
            } else {
                screen.val(result);
            }

        }

        if (isNaN(result)) {
            screen.val("0");
        }
    }

    $("#equal-sign").click(function () {
        getResult();
    });
});