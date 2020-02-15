//Linear search

function indexOf(array, value) {
    for(let i= 0; i< array.length; i++) {
       if(array[i] == value) {
           return i
       } 
    }
    return -1;
}

//Binary search (sorted arays)

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if(start > end) {
        return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    console.log(start, end);

    if(item == value) {
        return index;
    }
    else if(item < value) {
        return binarySearch(array, value, index + 1, end)
    }
    else if(item > value) {
        return binarySearch(array, value, start, index - 1)
    }
};

//DFS Depth first search

//array used is a STACK (first in, last out)

//in order traversal of search
function dfs(values=[]) {
    //explore left of bst
    if (this.left) {
        //keep going
        values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
}

//BFS Breadth first search

//array used is queue (first in first out)

function bfs(tree, values =[]) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);

    while(queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if(node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }
        if(node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }
    return values;
}


//1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive call will search to try and find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive call will search to try and find 16.

function firstcall(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return firstcall(array, value, index + 1, end);
    }
    else if (item > value) {
        return firstcall(array, value, start, index - 1);
    }
};
firstcall([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16);

//answer: 0-10 first round; 0-4 second round; 3-4 third round (indexes) --> final array[3] = 8.
//second answer: 0-10 first round; 6-10 second round; 6-7 third round; 7-7 last round ---> -1 not found


//4. Searching in a BST -----------------------------------------

// Inorder (Left, Root, Right) 
// Preorder (Root, Left, Right)
// Postorder (Left, Right, Root)


// Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 
//35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

//post-order is: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

// The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

//pre-order is: 8, 6, 5, 7, 10, 9, 11


//5. Implement different tree traversals -------------------------------

//in order traversal of search (Left, Root, Right)
function dfs(values=[]) {
    //explore left of bst
    if (this.left) {
        //keep going
        values = this.left.dfs(values);
    }
    //all left and all roots are pushed
    values.push(this.value);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
}

//pre order traversal of search (Root, Left, Right)
function dfs(values=[]) {
    //explore left of bst
    if (this.left) {
        // first push root, then go left
        values.push(this.value);
        //keep going
        values = this.left.dfs(values);
    }
    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
}

//post order traversal of search (Left, Right, Root)
function dfs(values=[]) {
    //explore left of bst
    if (this.left) {
        //keep going
        values = this.left.dfs(values);
    }

    if (this.right) {
        values = this.right.dfs(values);
    }

    values.push(this.value);
    return values;
}
