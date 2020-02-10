class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null)
        }
         /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

}

function main() {
    let starTrek = new Stack();
    starTrek.push("Kirk");
    starTrek.push("Spok");
    starTrek.push("McCoy");
    starTrek.push("Scotty");
    //starTrek.pop("McCoy"); // interesting behavior, it gives: "McCoy", "Spok", "Kirk", ancora "Kirk", null
    return starTrek
}
main();

function peek(list) {
    if(this.top = null) {
        console.log("stack is empty")
        return;
    }
    return this.top.value;
}

//to check
function isEmpty(list) {
    if(this.top = null) {
        return true;
    }
    return false;
}

function display() {
    if(this.top = null) {
        console.log("stack is empty")
        return;
    }
    let currNode = this.top
    while (this.top !== null) {
        console.log(currNode)
        currNode = currNode.next;
    }
    return ;
}

//Remove McCoy from your stack and display the stack -----------------------------------------
function main() {
    let starTrek = new Stack();
    starTrek.push("Kirk");
    starTrek.push("Spok");
    starTrek.push("McCoy");
    starTrek.push("Scotty");
    starTrek.pop();
    starTrek.pop();
    starTrek.push("Scotty"); // it gives: "Scotty", "Spok", "Kirk", ancora "Kirk", null
    
    return starTrek
}
main();

//3. Check for palindromes using a stack ----------------------------------------
function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stringStack = new Stack();
    //put the string into the stack one character at a time
    for(i=0; i< string.length; i++) {
        stringStack.push(string[i])
    }
    let comparisonString = ""
    //take out characters and put the into another string
    while(stringStack.top !== null) {
        comparisonString += stringStack.pop();
    }

    return(string === comparisonString)
}

//4. Matching parentheses in an expression ----------------------------------
// check https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/ for advanced version (although in C++)
function matchPar(expression) {
    let stack = new Stack();
    for (i=0; i< expression.length; i++) {
        if(expression[i] == "(") {
            stack.push(expression[i])
        }
        if (expression[i] == ")") {
            if (stack.top === null) {
                return "can't have a closing parenthesins without an opening"
            }
            stack.pop()
        }
    }
    //if there are still some parenthesis inside the stack
    if(stack.top !== null) {
        return 'there are still some unclosed parenthesis inside the stack'
    }
    return true
}

//5. Sort stack
function sortStack(originalStack) {
    let helpstack = new Stack();
    while(originalStack.top !== null){
        let element = originalStack.pop();     
    }
    if(helpstack.top === null) {
        helpstack.push(element);
    }
    else {
        // move items from helper stack to original stack 
        //until element is no longer bigger than the top of helper stack (or helper stack is empty)
        while ((helpstack.top !== null) && (element > helpstack.top.value)) {
            stack.push(helpstack.pop())
        }
        helpstack.push(element)
    }
}

