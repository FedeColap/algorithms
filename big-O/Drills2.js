//1. What is the Big O for this?
//1-  O(1) - constant time - as the call is made once for all the people in the room
//2- O(n) linear time - the number of calls increases with the number of people in the room (excluding best case)

//2. Even or odd
//What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// is O(1) - constant time, because the input entered is only one, therefore the operation are only 2 each time

//3. Are you here?
//What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
//is O(n^k) - polynomial time as it implies nested loops

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
let armadio = [1,4,5,3,7,8,199, 75, 328, 999]
doubleArrayValues(armadio)
//is O(n) - linear time, as it have to perform the operation on each element of the array, so time complexity will increase with size of array

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
let armadio = [1,4,5,3,7,8,199, 75, 328, 999]
naiveSearch(armadio, 999)
// is O(n) - linear time, seems a basic comparison if thevalue with each item of array, so complexity is directly proportional with size of array (excluding best case)

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
let armadio = [1,4,5,3,7,8,199, 75, 328, 999]
createPairs(armadio)
//is O(n^k) - polynomial time as it implies nested loops

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
compute(7)
//SOLUTION IN CONSOLE: IT DISPLAYS AN ARRAY OF NUMBERS WHERE ONE IS THE SUME OF THE PREVIOUS 2
//couldn't figure out its purpose, but time complexity should be O(n) - linear time

// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
// I believe is still O(log(n)) - logaritmic time. Despite the num randomly generated, the array is still split in twice each time, so complexity will increase/
//slower with increasing of the array

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
let arr = [1,4,5,3,7,8,199, 75, 328, 999]
findRandomElement(arr)
// being a random picking, size of array won't matter. O(1) - constant time

// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
// determines if a number is an integer over 2 // FALSE! DETERMINES PRIME NUMBERS
// O(1) constant time as it has to perform 3 operations on the number, no matter his value


// 11. Tower of Hanoi
function moveDisk(disk, from,to) {
    console.log(`Move disk #${disk} from ${from} to ${to}`);
};
function Hanoi(disk, from, to , via ) {
    if(disk === 0) {
        return;    
    }
  Hanoi(disk-1, from, via, to);

  moveDisk(disk, from,to);
  
  Hanoi(disk-1, via, to, from);
}
Hanoi(5, 'A', 'B', 'C')

// 12. Iterative version
// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// 13. Recursive Big O
// Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

// 14. Iterative Big O
// Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

