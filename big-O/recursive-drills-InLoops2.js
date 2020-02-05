//COUNT SHEEPS-------------------------------------------------------
function countSheeps(pecore) {
    for(i= pecore; i>0; i--) {
        console.log(`${pecore}: another sheep jumps over the fence`)
        pecore -= 1
    }
    return `all sheeps jumped`
}
countSheeps(5) 

//POWER CALCULATOR---------------------------------------------------
function powerCalculator (base,elev){
    var p=1;
    for (var i=0;i<elev;i++)
    { p*=base;}
    return p;
}
powerCalculator(2,3)

            //REVERSE STRING --- no, this is a method
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
            //REVERSE STRING --------------------- does not work, check with Jamie
            function reverseStr(string) {
                for(i=0; i<=string.length; i++){
                    let Newstring= string.slice(-1)
                    console.log(Newstring)
                    let string= string.substr(-1)
                }
                return string
            }
//REVERSE STRING -- WORKS 
function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
reverseString('arno')
//FACTORIAL-----------------------------------------------------------
function factorial(n) {
    var result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}
//FACTORIAL AGAIN
function factorial(input) {
    let result = input;
    for (let i = input - 1; i > 0; i--) {
        result = result * i;
    }
    return result;
}
factorial(4);
//FIBONACCI--------------------------------------------------------------
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
//FIBONACCI FOR LOOP
function fibonacci(input) {
    if (input === 0 || input === 1) {
        return input;
    }
    // seed values
    let minus2 = 0;
    let minus1 = 1;
    let result;
    for (let i = 2; i <= input; i++) {
        // calculate new result
        result = minus1 + minus2;

        // iterate minus1 & minus2 for the next call
        minus2 = minus1;
        minus1 = result;
    }
    return result;    
}
console.log(fibonacci(7))

//ANAGRAMS-------------------------------------------------------
function permut(string) {
    if (string.length < 2) return string; // This is our break condition
  
    var permutations = []; // This array will hold our permutations
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
  
      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i) // if char was used already
        continue; // skip it this time
  
      var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
  
      for (var subPermutation of permut(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
       console.log(permutations)
}
permut("noto");
