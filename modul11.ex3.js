function getSum(num1) {
   return function(num2) {
      return num1 + num2;
   };
}

const sumFunc = getSum(5);
const result = sumFunc(3);

console.log(result);