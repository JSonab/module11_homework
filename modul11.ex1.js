function countNum() {
    const arr1 = [1, 2, 'a', null, 0, 5, 6, 'b', 0, 8];
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr1.forEach(element => {
        if (typeof element === 'number') {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log(`Количество чётных элементов: ${evenCount}`);
    console.log(`Количество нечётных элементов: ${oddCount}`);
    console.log(`Количество нулевых элементов: ${zeroCount}`);
}

countNum();

