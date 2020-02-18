//BUBBLE SORT best case O(n), average and worst case O(n^2)

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
function bubbleSort(array) {
    let swaps = 0;
    for (let i =0; i < array.length -1; i++) {
        if(array[i] > array[i + 1]) {
            swap(array, i, i+1);
            swaps ++;
        }
    }
    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
}

//MERGE SORT best, worst and average case of O(nlog(n))

function mergeSort(array) {

    //base case
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length /2);
    //middle is included in the left side
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        //if the value on the left is less than the value on the right
        //add the lowest element (picking from lowest stage, where is just a bunch of singular numbers )
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        }
        else {
            array[outputIndex++] = right[rightIndex++]
        }
    }
    //start merging back the smaller arrays
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outpitIndex++] = right[i];
    }
    return array;    
};

//QUICKSORT 
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    //middle would be j at the end of partition, which is a position inside the array, not a value
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle +1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    for(let i = start; i < end - 1; i++ ) {
        if(array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
}

//1. Understanding merge sort
//Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
//https://repl.it/@FedeCola/mergesort-1 but consider that testing on google is better

//What is the resulting list that will be sorted after 3 recursive calls to mergesort?
//first call [21, 1, 26, 45, 29, 28, 2, 9] and [16, 49, 39, 27, 43, 34, 46, 40]
//second call [21, 1, 26, 45] and [29, 28, 2, 9]
//third call [21, 1] and [26, 45]

//2. Understanding quicksort

// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. 
// After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. 
// Which of the following statements is correct about the partition step? Explain your answer.

//The pivot could have been 17, but could not have been 14 because at the end of first partitioning, pivot is swapped with last number on the right side
//if the pivt was 14, then 17 would be misplaced (because minor than 20)

// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
// show the resulting list after the second partitioning according to the quicksort algorithm.
//https://repl.it/@FedeCola/quicksort-3


//3. Implementing quicksort
//https://repl.it/@FedeCola/quicksort-3

//4. Implementing merge sort

//5. Sorting a linked list using merge sort
//https://repl.it/@FedeCola/linkedList-mergesort-5

//6. Bucket sort
//Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
//https://initjs.org/bucket-sort-in-javascript-dc040b8f0058
//https://repl.it/@FedeCola/bucket-sort-6

// InsertionSort to be used within bucket sort

function insertionSort(array) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }
  
  // Implement bucket sort
  function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }
  
    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;
    
    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
  
    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);
    
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }
    
    // Pushing values to buckets
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
  
    // Sorting buckets
    array.length = 0;
    
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });
  
    return array;
  }

//7. Sort in place
//Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

function shuffle(arr) {
    // toShuffle is the number of items left to be shuffled (starts with all elements in the array)
    let NumtoShuffle = arr.length;


    while (NumtoShuffle > 1) {
        // while there is a lenght in the array of nums not considered yet
        // nextEl will be an int from range 0 to current toShuffle  (math.floor)
        const nextEl = Math.floor(Math.random() * NumtoShuffle);

        // decrease the number of items considered
        // (and we now have one less item still to shuffle)
        NumtoShuffle--;

        // swap nextEl chosen at random with toShuffle (now the end of our unshuffled portion of array)
        swap(arr, NumtoShuffle, nextEl)
    }

    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//8. Sorting books
//Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

//array of books = []
//get first book ---- create new array   --- place book as first. --- take one book at a time, and sort. compare first letter

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', 'banana', 'orange', 'lemon', 'apple'];


const insertionSort = (array) => {
    const length = array.length;
  
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j+1] = key;
    }
    return array;
};