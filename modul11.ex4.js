function printNumbers(num1, num2) {
    let current = num1;
    function printNext() {
        console.log(current);
        if (current === num2) {
            clearInterval(intervalId);
        }
        current++;
    }

    printNext();
    const intervalId = setInterval(printNext, 1000);
    }
printNumbers(5,15)