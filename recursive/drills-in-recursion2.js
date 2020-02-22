const sumOf = function(list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}

let lst = [2,4,6,8,10];
console.log(sumOf(lst));

                        //COUNTING SHEEP ---works ATTNTION TO ***MINOR AND*** EQUAL TO zero
                        function magic(pecore){
                          if (pecore <= 0) {
                              console.log("all pecore jumped")
                              return;
                          }
                              console.log(pecore + ": another pecora jumped")
                              magic (pecore - 1)
                          }
                          magic(4)
//COUNTING SHEEP ---WORKS
const countSheep = function(input) {
    // Base case
    if (input <= 0) {
        console.log("All sheep jumped over the fence")
        return;
    }
    console.log(input + ": Another sheep jumps over the fence");
    // General case
    countSheep(input - 1)
}
//COUNTING SHEEP --- WORKS ALTERNATIVE
const countSheep = function(input) {
    // Base case
    if (input <= 0) { 
        console.log("All sheep jumped over the fence")
    return;}
    console.log(input + ": Another sheep jumps over the fence");
    input --;
    // General case
    countSheep(input) 
}
let input = 3;
console.log(countSheep(input))
                            
                        //POWER CALCULATOR --- WHY DOES IT GIVE NAN??----------------------------------- i have put =0 2 times
                        function powerCalculator(base, exponent) {
                            if (exponent <= 0) {
                            return 'exponent should be >= 0'

                            } 
                            else if (exponent = 0) { //wrong here
                                return 1; // return 1 will make the whole functione return 1, incorrect
                            }
                            else {
                                return base * powerCalculator(base, exponent-1)
                            }
                        }

//POWER CALCULATOR ---- WORKS
function powerCalculator(base, elev) {
    if (elev <= 0) {
        return 'exponent should be >= 0'
 
     } 
     else if (elev == 1) {
      return base;
    } else {
      return base * powerCalculator(base, elev - 1);
    }
  }
powerCalculator(4, 4)

                        //REVERSE STRING --- MINE --- NOT WORKING --- check why
                        //corrected https://repl.it/@FedeCola/recursive
                        function magic(string) {
                          console.log(string.length)
                          if (string.length <=1 ) {return string}
                          return console.log(string.slice(-1) + magic(string.length -1)) //string.length-1 gives a number, not the string - 1
                        }
                        magic("casa")
                          
                          let string = "casa"
                          console.log(string.slice(-1))
                          console.log(string.length)
//REVERSE STRING --- WORKS 
function reverseString(string) {
    if (string === "") 
        return "";
    else
    //substring returns all the letters after the first
        return reverseString(string.substr(1)) + string.charAt(0);
}
reverseString('computer')

//NTH TRIANGULAR NUMBER
function magic (level) {
  if (level <= 1) return 1
  return level + magic(level - 1)
}
magic(8)

//STRING SPLITTER
    // 02/20/2020 => ['02', '20', '2020']
    // i
    // builder = ''
    // output = []
function stringSplitter(s) {
    let output = [];
    getSplitString(0, '');
    return output;
      
        function getSplitString(idx, builder) {
          if(idx === s.length) {
            output.push(builder);
            return;
          }
      
          if(s[idx] === '/') {
            output.push(builder);
            getSplitString(idx + 1, '');
          } else {
            getSplitString(idx + 1, builder + s[idx]);
          }
        }
}
//STRING SPLITTER 2
function stringSplitter2(s, idx, builder, output) {
    if(idx === s.length) {
      output.push(builder);
      return output;
    }

    if(s[idx] === '/') {
      output.push(builder);
      return stringSplitter2(s, idx + 1, '', output);
    } else {
      return stringSplitter2(s, idx + 1, builder + s[idx], output);
    }
}
console.log(stringSplitter2('02/20/2020', 0, '', []));

//FIBONACCI
function fibonacci(number) {
    if (number <2) {
        return number
    } return fibonacci(number-1) + fibonacci(number-2)
}
fibonacci(7)

//FACTORIAL
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) return 1;
    // Recursive case
    return n * factorial(n-1);
  }
factorial(7)

//FIND A WAY OUT OF THE MAZE
let mySmallMaze = 
[ 
  [' ', ' ', ' '], 
  [' ', '*', ' '], 
  [' ', ' ', 'e'] 
];
// output: RRDD
// mySmallMaze[2][2] === 'e'
let maze = [ 
    [' ', ' ', ' ', '*', ' ', ' ', ' '], 
    ['*', '*', ' ', '*', ' ', '*', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', '*', '*', '*', '*', '*', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' ', 'e'] 
];
// output: RRDDLLDDRRRRRR 
function getMazePath(maze) {
    const rowLength = maze.length - 1;
    const colLength = maze[0].length - 1;
    return getPath(0,0,'');
  
    function getPath(row, col, dir) {
      if(maze[row][col] === 'e') {
        return dir;
      }
  
      maze[row][col] = 'x';
  
      // left
      if(inBounds(row, col - 1) && canGo(row, col - 1)) {
        return  getPath(row, col-1, dir + 'L');
      }
      
      // right
      if(inBounds(row, col + 1) && canGo(row, col + 1)) {
        return getPath(row, col+1, dir + 'R');
      }
  
      // down
      if(inBounds(row + 1, col) && canGo(row + 1, col)) {
        return  getPath(row + 1, col, dir + 'D');
      }
  
      // up
      if(inBounds(row - 1, col) && canGo(row - 1, col)) {
        return getPath(row - 1, col, dir + 'U');
      }
  
      maze[row][col] = ' ';
  
      function inBounds(row, col) {
        if(
          row < 0 || 
          row > rowLength ||
          col < 0 || 
          col > colLength
        ) {
          return false;
        }
  
        return true;
      }
  
      function canGo(row, col) {
        return maze[row][col] === ' ' || maze[row][col] === 'e';
      }
  
    }
}
//console.log(getMazePath(mySmallMaze));
console.log(getMazePath(maze));

//FIND ALL THE WAYS OUT OF THE MAZE
let maze = [ 
    [' ', ' ', ' ', '*', ' ', ' ', ' '], 
    ['*', '*', ' ', '*', ' ', '*', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', '*', '*', '*', '*', '*', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' ', 'e'] 
];
function getMazePath2(maze) {
    const rowLength = maze.length - 1;
    const colLength = maze[0].length - 1;
    const paths = [];
    getPath(0,0,'');
    return paths;
  
    function getPath(row, col, dir) {
      if(maze[row][col] === 'e') {
        paths.push(dir); 
        return;
      }
  
      maze[row][col] = 'x';
  
      // left
      if(inBounds(row, col - 1) && canGo(row, col - 1)) {
        getPath(row, col-1, dir + 'L');
      }
      
      // right
      if(inBounds(row, col + 1) && canGo(row, col + 1)) {
        getPath(row, col+1, dir + 'R');
      }
  
      // down
      if(inBounds(row + 1, col) && canGo(row + 1, col)) {
        getPath(row + 1, col, dir + 'D');
      }
  
      // up
      if(inBounds(row - 1, col) && canGo(row - 1, col)) {
        getPath(row - 1, col, dir + 'U');
      }
  
      maze[row][col] = ' ';
  
      function inBounds(row, col) {
        if(
          row < 0 || 
          row > rowLength ||
          col < 0 || 
          col > colLength
        ) {
          return false;
        }
  
        return true;
      }
  
      function canGo(row, col) {
        return maze[row][col] === ' ' || maze[row][col] === 'e';
      }
    }
}
console.log(getMazePath2(maze));

//ANAGRAMS -----------------------------------------------------
function magic(string) {
  if(string.length < 2) { //only 1 letter
    return string
  }
  let store = []
  for(let i=0; i< string.length; i++) {
    let letter = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(letter) !== i) { //letter already used
      continue; //skip this time
    }
    let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
    for (let subPermuts of magic(remainingString)) {
      store.push(letter + subPermuts)
    }
  }
  return store;  
}
magic("east")
//ORGANIZATIONAL CHART --- to check ----------------------------------
let organization= {
    Zuckerberg:[
        {Schroepfer: [{Bosworth: ['Steve', 'Kyle', 'Andra']},{Zhao: ['Richie', 'Sofia', 'Jen']}]},
        {Schrage: [{VanDyck: ['Sabrina', 'Michelle', 'Josh']},{Swain: ['Blanch', 'Tom', 'Joe']} ]},
        {Sandberg: [{Goler: ['Eddie', 'Julie', 'Annie']},{Hernandez: ['Rowi', 'Inga', 'Morgan']}]}
    ]}
function magic(org) {
    if(org = []) { // this doesn't mean anything
      console.log(org)
        return;
    }
    console.log(org)
    magic(' ' + org.children) // this doesn't mean anything
}
magic(organization)

//BINARY REPRESENTATION --- to check -------------------------------------
function magic(number) {
  let result = []

  let division = Math.floor(number %2)
  console.log(division)
  if (division === 1) {
    // console.log(1)
    result.push(1)

  }
  if (division === 0) {
   // console.log(0)
    result.push(0)

  }
  let newnumber = number / 2;
  console.log(newnumber)
  if ( newnumber === 2) {
      console.log(0)
      result.push(0)
      return;
  }
  if (newnumber <= 1) {
    console.log(1)
    result.push(1)
    return;
}
  console.log(result)
  return magic(newnumber);
}
magic(16)





