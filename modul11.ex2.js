function getRandomNum(min , max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    const numb =  Math.floor(Math.random() * (max - min) + min);
    if ((numb % 1 === 0) && (numb % numb === 0) && (numb % 2 !== 0) && (numb % 3 !== 0) && (numb % 4 !== 0) && (numb % 5 !== 0) && (numb % 6 !== 0) && (numb % 7 !== 0) && (numb % 8 !== 0) && (numb % 9 !== 0)){
        console.log(`Число ${numb} простое`)
    }

    else {
        console.log(`Число ${numb} не простое`)
    }
}

getRandomNum(0, 1001)

//или

function getNum(num) {
    if (num <= 1 || num > 1000) {
        console.log("Данные неверны");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} не является простым числом`);
            return;
        }
    }

    console.log(`${num} является простым числом`);
}

getNum(10)