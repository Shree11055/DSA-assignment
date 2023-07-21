console.clear();

// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
console.log('Question 1')


    function findPairs(array, target) {
        const pairs = [];

        const frequency = {};
        for (let num of array) {
            frequency[num] = (frequency[num] || 0) + 1;
        }

        for (let num of array) {
            const complement = target - num;
            if (frequency[complement]) {
                pairs.push([num, complement]);

                frequency[complement]--;

                frequency[num]--;
            }
        }

        return pairs;
    }

    const array = [2, 4, 6, 3, 1, 7, 5];
    const targetSum = 8;
    const pairs = findPairs(array, targetSum);
    console.log(pairs);



// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
console.log('Question 2')

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var start = 0;
var end = arr.length - 1;
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
console.log(arr);


// Q3. Write a program to check if two strings are a rotation of each other?
console.log('Question 3')

function areRotations(str1, str2) {
  return str1.length == str2.length && (str1 + str1).indexOf(str2) != -1;
}

var str1 = "AACD";
var str2 = "ACDA";

if (areRotations(str1, str2)) {
  console.log("Strings are rotations of each other");
} else {
  console.log("Strings are not rotations of each other");
}


// Q4. Write a program to print the first non-repeated character from a string?
console.log('Question 4')

var str = "cvczvedfrujhef";
for (var i = 0; i < str.length; i++) {
  if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
    console.log(`first Non repeated Character of ${str} id ${str.charAt(i)}`);
    break;
  }
}


// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
console.log('Question 5')

const towerOfHanoi = (disk, source, dest, aux) => {
  if (disk === 1)
    console.log("Move disk from source ", source, " to destination ", dest);
  else {
    towerOfHanoi(disk - 1, source, aux, dest);
    console.log("Move disk from source ", source, " to destination ", dest);
    towerOfHanoi(disk - 1, aux, dest, source);
  }
};
towerOfHanoi(4, "A", "B", "C");


function Stack() {
  this.items = [];

  this.push = (element) => {
    this.items.push(element);
  };
  this.pop = () => {
    if (this.items.length > 0) return this.items.pop();
  };

  this.peek = () => {
    return this.items[this.items.length - 1];
  };

  this.isEmpty = () => {
    return this.items.length === 0;
  };
}

function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
  }
  return false;
}



//   Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
console.log('Question 6')

function postToPre(post_exp) {
  let stack = new Stack();
  let length = post_exp.length;
  for (let i = 0; i < length; i += 1) {
    if (isOperator(post_exp[i])) {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let temp = post_exp[i] + op2 + op1;
      stack.push(temp);
    } else {
      stack.push(post_exp[i] + "");
    }
  }
  let ans = "";
  while (stack.items.length > 0) ans += stack.pop();
  return ans;
}

let post_exp = "abc/+xy*k-/";
console.log("Prefix : " + postToPre(post_exp));


//   Q7. Write a program to convert prefix expression to infix expression.
console.log('Question 7')
function convertPrefixToInfix(str) {
  let stack = new Stack();
  let length = str.length;
  for (let i = length - 1; i >= 0; i -= 1) {
    let c = str[i];
    if (isOperator(c)) {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let temp = "(" + op1 + c + op2 + ")";
      stack.push(temp);
    } else {
      stack.push(c + "");
    }
  }
  return stack.pop();
}

let exp = "/-x*yz+/abc";
console.log("Infix : " + convertPrefixToInfix(exp));


//   Q8. Write a program to check if all the brackets are closed in a given code snippet.
console.log('Question 8')


function checkBrackets(expr) {
  var stack = new Stack();
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x === "(" || x === "[" || x === "{") {
      stack.push(x);
      continue;
    }
    if (stack.isEmpty()) return false;

    let arg;
    switch (x) {
      case ")":
        arg = stack.pop();
        if (arg === "{" || arg === "[") return false;
        break;
      case "}":
        arg = stack.pop();
        if (arg === "(" || arg === "[") return false;
        break;
      case "]":
        arg = stack.pop();
        if (arg === "(" || arg === "{") return false;
        break;
    }
  }
  return stack.isEmpty();
}

let expr = "(((({{{}}}][][][]))))";

if (checkBrackets(expr)) console.log("Balanced ");
else console.log("Not Balanced ");



// Q9. Write a program to reverse a stack.
console.log('Question 9')


var stack = new Stack();

function insertAtBottom(x) {
  if (stack.isEmpty()) stack.push(x);
  else {
    let a = stack.pop();
    insertAtBottom(x);
    stack.push(a);
  }
}
function reverseStack() {
  if (stack.items.length > 0) {
    let x = stack.pop();
    reverseStack();
    insertAtBottom(x);
  }
}
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);

console.log("Original Stack");

console.log(stack.items);

reverseStack();

console.log("Reversed Stack");

console.log(stack.items);


// Q10. Write a program to find the smallest number using a stack.
console.log('Question 10')

function getMinimum() {
  const stack2 = new Stack();
  stack2.push(1);
  stack2.push(10);
  stack2.push(5);
  stack2.push(3);
  stack2.push(2);
  stack2.push(9);
  let first = stack2.pop();

  for (i = 0; i < stack2.items.length; i++) {
    if (!stack2.isEmpty()) {
      if (stack2.items[i] < first) {
        first = stack2.items[i];
      }
    }
  }
  console.log("Minimum value is ", first);
}
getMinimum();