//POWER CALCULATOR
let base = 2
let elev= 3
function powerCalculator (base, elev) {
    for(i=0; i<=elev; i++) {
        base *= base
    }
};
powerCalculator()

//REVERSE STRING
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("troll"));  // "llort"
//REVERSE STRING
function reverseStr(str) {
    var charArr = str.split('');
    for (var frontIndex = 0, backIndex = charArr.length - 1;
         frontIndex < charArr.length; frontIndex++) {
        // Once backIndex is equal to front index, string is reversed.
        if (backIndex === frontIndex) {
            break;
        }
        // Perform swap
        var temp = charArr[backIndex];
        charArr[backIndex] = charArr[frontIndex];
        charArr[frontIndex] = temp;
        // Decrement index
        backIndex--;
    }
    return charArr.join('');
}
console.log(reverseStr("troll"));  // "llort"

//FACTORIAL
function factorial(n) {
    var result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}
//FIBONACCI
function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    } 
    return b;
}

//ANAGRAMS
