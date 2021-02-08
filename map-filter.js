const numbers = [3,5,4,6,7,8];

// const output =[]
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);

// function square (element){
//     return element*element;
// }
// numbers.map(square)
// numbers.map(function(element , index , array){
//     console.log(element,index , array);
// })

// const result = numbers.map(function(element){
//     return element*element;
// })
// console.log(result);

// const square = element => element*element;
// const square = x =>x*x;

// const result = numbers.map(x=> x*x)

// console.log(result);

// const result = numbers.filter(x=> x<2)
// console.log(result);
const result2 = numbers.find(x=> x>5)
console.log(result2);

