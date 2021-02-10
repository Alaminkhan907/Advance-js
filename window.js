var name = 'kuddus';
function add (num1, num2){
    console.log("name inside",name);
    window.result = num1+num2;
    function double(num){
        return  num *2;
    }
    return result;
}
//console.log("name outside",name);

var sum = add(23,21);
console.log(sum);
console.log("result outside",result);