const Array = require('./array.js');
//MODEL
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    console.log(arr);
}
// 2. Explore the push() method--------------------------------------------------

// Using the Array class you just created above, add an item to the array.
function maintahu(){
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    arr.push("tahuina");
    console.log(arr);
    console.log(arr.get(0));
}
maintahu();
// length= 1 as one element has been pushed in the previously empty array  
// capacity= 6 because it was 0 when inizialized, and then resized to "this._resize((1 + 1) * 3)"=6 after the push
// memory address of the Array is 0, as the first and only item has 4 bit (1 cell)

//Add the following in the main function and then print the array:--------
function mainmore(){
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
    console.log(arr.length);
    console.log(arr._capacity);
}
mainmore();
// length= 6, number of elements pushed in the empty array
// capacity= 21 because after 1st push and resize capacity became 6 and after last push "this._resize((6 + 1) * 3)"= 21
// memory= 6-11, because: 1st push "creates" the previously empty array(no memory), with capacity 6 (slots 0-5),
    //second push creates capacity of 21, clears previous 6 slots and allocate in new slots (6-11)

// 3. Exploring the pop() method
// Add the following in the main function and then print the array:
function mainpop(){
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);  
    console.log(arr.length); 
}
mainpop();
// length= 3
//capacity= still 21 from previous pushes
//memory address= 6-8 

//5. URLify a string-------------------------------------
let esempio = "Tahuina Parveen";
let output = "Tahuina%20Parveen";

function stringify(string) {
    let store = string.split(' ')
    console.log(store)
    let newString = store.join('%20')
    console.log(newString)
}
stringify(esempio);
        //      URLIFY WITH LOOP
        function drill5(string) {
            let result = '';
            for (let i = 0; i < string.length; i++) {
                if (string[i] === ' ') {
                    result += '%20'
                } else {
                    result += string[i]
                }
            }
            console.log(result);
            return result;
        }
//6. Filtering an array
let example = [1, 2, 4, 9, 6, 4, 10]
let result = [9, 6, 10]

function filter(array) {
    let store = []
    for (i=0; i<= array.length; i++) {
        if (array[i] > 5) {
            store.push(array[i])
        }
    }
    console.log(store)
}
filter(example);

//8. Merge arrays
 let input1=[1, 3, 6, 8, 11], input2 = [2, 3, 5, 8, 9, 10]
 let output = [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

 function merging(array1, array2){
     const array3= array1.concat(array2)
    //  const result = array3.sort(); WRONG SORTING
    let result = array3.sort((a, b) => a - b); // For ascending sort
    console.log(result)
 }
 merging(input1, input2);
 // 8. Merge arrays FOR LOOPS
 function drill8(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
        console.log('current i idx, j idx, values: ', i, j, arr1[i], arr2[j]);

        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
            console.log('arr1 was smaller (or equal)!');
        } else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
            console.log('arr2 was smaller!');
        } else if (i >= arr1.length) {
            result.push(arr2[j]);
            j++;
            console.log('no more arr1!')
        } else if (j >= arr2.length) {
            result.push(arr1[i]);
            i++;
            console.log('no more arr2!')
        }
    }
    console.log(result);
    return result;
}

//9. Remove characters ---- NOT WORKING, WHY GIVES NaN? --------------------------------------
let input = "Battle of the Vowels: Hawaii vs. Grozny";
let deleteletters = "aeiou"
function deletechars(string) {
    let result = ""
    for(i=0; i<= string.length; i++) {
        console.log(string[i])
        console.log(typeof(string[i]))
        if (string[i] !== "a" || "e" || "i" || "o" || "u") {
            console.log("accettabile")
            result=+ string[i]
        } else{console.log("vowel")}
        console.log(result)
    }
}
deletechars(input);

//10. Products
//Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

let input = [1, 3, 9, 4]
let output = [108, 36, 12, 27]

function multiply(array) {
    let store = []
    let partial = 1
    for(i=0; i<=array.length; i++) {
        console.log(array[i])
        partial *= array[i]
        store.push(number)
    }
    console.log(store)
}
multiply(input);