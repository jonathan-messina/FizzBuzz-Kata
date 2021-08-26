//nested ternary
// n%15 ?(-----): "FizzBuzz";
// n%15 ? n%5 ?(---------): "Buzz" : "FizzBuzz";
//a more graphic example
// n%15 ?                   :"FizzBuzz";
// n%5 ?            :"Buzz"
// n%3 ? n : "Fizz"
// 0 is interpreted as false,
// so if a number has a valid module.
// it will jump to its false value
const fizzBuzz = (n) =>
  n % 15 ? (n % 5 ? (n % 3 ? n : "Fizz") : "Buzz") : "FizzBuzz";
